import { setProfileHandle } from './handles.js'; 

export default class Profile {
    max_size_kb = 1000;
    allowed_types = [
        "image/png",
        "image/jpg",
        "image/gif",
        "image/jpeg"
    ];
    savePath = "./img/profiles/";
    defaultPath = "./img/default-profile.png";

    form = $(".form-change-profile");
    previewProfileImage = $(".userUpdate .user-profile");

    constructor (user)
    {
        this.user = user;
        this.prop = $(".user-profile");
    }

    getUserId()
    {
        return this.user.id;
    }

    getProfile()
    {
        return this.user.getProfile();
    }

    setProfile(imageId) 
    {
        this.user.profile = imageId;
    }

    getPath()
    {
        let profile = this.getProfile();
        let path = this.savePath + profile; 

        if (profile !== "default") {    
            let xhr = new XMLHttpRequest();
            xhr.open('HEAD', path, false);
            xhr.send();

            if (xhr.status !== 404) {
                return path;
            }   
        }

        return this.defaultPath;
    }

    updateAll()
    {
        setTimeout(() => {
            this.prop.attr("src", this.getPath());
        }, 100);
    }
    
    addHandle()
    {
        let changeHandle = $("#change-profile");
        let removeHandle = $(".remove-profile");

        changeHandle.on("change", () => this.onChange(changeHandle.prop("files"), false));
        removeHandle.click(() => this.removeProfile(false));
    }

    removeProfile(complete = true)
    {
        if (complete === false) {
            this.previewProfileImage.attr("src", this.defaultPath);
            setProfileHandle({
                cancel: () => this.previewProfileImage.attr("src", this.getPath()),
                done: () => this.removeProfile()
            });
            return;
        }

        let form = new FormData();
        form.append("imageId", this.getProfile());
        form.append("savePath", this.savePath);

        $.ajax({
            type: 'POST',
            url: 'includes/removeProfile.php',
            data: form,
            cache: false,
            processData: false,
            contentType: false,
            success: () => {
                let imageId = "default";

                if (this.getProfile() !== imageId) {
                    this.setProfile(imageId);
                }
                this.updateAll();
            },
            error: (e, error) => {
                alert(error);
            }
        });
    }

    onChange(files, complete = true) 
    {
        if (files) {
            let [file] = files;

            if (!file.size) {
                return;
            }

            let sizeKB = file.size / 1000;
            if (sizeKB > this.max_size_kb) {
                console.log("please, select less then 200kb image.");
                return;
            }

            let type = file.type;
            if (!this.inArray(type, this.allowed_types)) {
                console.log("please select png, jpg or gif image.");
                return;
            }
            
            let imageId = "user-" + this.getUserId() + "." + type.split('/').pop();

            let reader = new FileReader();
            reader.onload = (event) => {
                if (complete === false) {
                    this.previewProfileImage.attr("src", event.target.result);
                    setProfileHandle({
                        cancel: () => this.previewProfileImage.attr("src", this.getPath()),
                        done: () => this.onChange(files)
                    });
                    return;
                }

                let form = new FormData(this.form[0]);
                form.append("imageId", imageId);
                form.append("savePath", this.savePath);

                $.ajax({
                    type: 'POST',
                    url: 'includes/changeProfile.php',
                    data: form,
                    cache: false,
                    processData: false,
                    contentType: false,
                    success: (result) => {
                        if (result === "moved.uploaded") {   
                            this.setProfile(imageId);
                            this.updateAll();

                            let changeProfile = $("#change-profile");

                            changeProfile.attr("value", '');
                            changeProfile.change();
                        } else {
                            alert(result);
                        }
                    },
                    error: (e, error) => {
                        alert(error);
                    }
                });
            };
            reader.readAsDataURL(file);
        }
    }

    inArray(needle, haystack) 
    {
        for (let i = 0; i < haystack.length; i++) {
            if (haystack[i] === needle) {
                return true;
            }
        }
        return false;
    }
};
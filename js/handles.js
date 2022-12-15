import ModalListener from './modalListener.js'; 
import { initEditProfile, editDone } from './editProfile.js'; 

const headerUser = $(".header .user");
const ChangePassword = $(".change-password");
const createAnnounce = $(".nav .announce-manager .create-announce");
const createAnnounceImage = $("#createAnnounceModal .image input");

initEditProfile();
let profileHandle = undefined;

const setProfileHandle = (handle) => {
    profileHandle = handle;
}

const initHandles = () => {
    createAnnounceImage.on("change", () => {
        let files = createAnnounceImage.find("form");

        console.log(files)
    });

    /** REGISTER MODAL LISTENER */
    headerUser.click(() => {
        showModal("profileModal", {
            cancell:  () => {
                if (profileHandle !== undefined) {
                    profileHandle.cancel();
                }
                setProfileHandle(undefined);
            },
            confirm: async (listener) => {
                listener.continue();
                let hasEdit = await editDone();

                if (hasEdit === true) {
                    if (profileHandle !== undefined) {
                        profileHandle.done();
                    }
                    listener.close();
                }
            }
        });
    });
    createAnnounce.click(() => {
        showModal("createAnnounceModal", {
            cancell: () => {},
            confirm: async (listener) => {
                listener.continue();
            }
        });
    });
}

const showModal = (modal, callable) => {
    let body = $("body");
    let modalContent = $("#" + modal);
    let modalBackground = $(".modal-background");
    
    body.css("overflow-y", "hidden");
    modalBackground.fadeIn(100);
    modalContent.fadeIn(100, () => {
        let modalCancell = $("#" + modal + " #cancel");
        let modalConfirm = $("#" + modal + " #confirm");

        modalCancell.click(() => {
            callable.cancell();
            modalBackground.fadeOut(100);
            modalContent.fadeOut(100);
            body.css("overflow-y", "auto");
        });
        modalConfirm.click(async () => {
            let listener = new ModalListener;
            await callable.confirm(listener);
            if (listener.isClosed()) {
                modalBackground.fadeOut(100);
                modalContent.fadeOut(100);
                body.css("overflow-y", "auto");
            }
        });
    });
}

ChangePassword.click(() => {
    ChangePassword.toggleClass("active");
});

export { initHandles, setProfileHandle };
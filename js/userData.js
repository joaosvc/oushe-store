import User from './userClass.js';

export default async function createUser() {
    let data = undefined;
    await $.ajax({
        url: "includes/userEncoded.php",
        dataType: "json",
        success: (result) => {
            if (result.length === 0) {
                console.log("User data not found, destroying session");
            } else {
                data = result;
            }
        },
        error: (e, msg) => {
            console.log("Request error: " + msg);
        }
    });
    return (data ? new User(data) : undefined);
};
$.ajax({
    url: "includes/cookieSession.php",
    dataType: "json",
    success: function (result) {
        if (result.cookie) {
            console.log("Restored session id: " + result.id);
            location.href = "./";
        }
    },
    error: function (result) {
        console.log("Request error: " + result);
    }
});
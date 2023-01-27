document.addEventListener("DOMContentLoaded", function() {
    const helloButton = document.getElementById("hello-button");
    if (helloButton !== null) {
        helloButton.addEventListener("click", function (e) {
            alert("hello")
        });
    }
});

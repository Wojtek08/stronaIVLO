var content = document.getElementById("content-left-container");
var button = document.getElementById("about");

button.onclick = function () {
    if (content.className == "open") {
        content.className = "";
    } else if (content.className == "") {
        content.className = "open";
    };
};
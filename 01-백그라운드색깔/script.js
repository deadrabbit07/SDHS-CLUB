const background = document.querySelector("div");

function transition() {
    let name = background.className;
    switch (name) {
        case "red":
            background.classList.replace("red", "orange");
            break;
        case "orange":
            background.classList.replace("orange", "yellow");
            break;
        case "yellow":
            background.classList.replace("yellow", "green");
            break;
        case "green":
            background.classList.replace("green", "blue");
            break;
        case "blue":
            background.classList.replace("blue", "purple");
            break;
        case "purple":
            background.classList.replace("purple", "red");
            break;
    }
}

setInterval(() => transition(), 1000);

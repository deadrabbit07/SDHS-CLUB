let counter = document.querySelector(".counter");
const counterBtn = document.querySelector(".counterBtn");
let count = 0;

counterBtn.addEventListener("click", () => {
    count += 1;
    if (count >= 11) {
        count = 0;
    }
    counter.innerHTML = count;
})

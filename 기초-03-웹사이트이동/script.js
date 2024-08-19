
const link = () => {
    let txt = document.querySelector(".txt").value;
    let link = `https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=${txt}`;
    window.location.href = link;
    txt = '';
}

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    link();
});


document.querySelector(".img2").addEventListener("click", () => {
    link();
})

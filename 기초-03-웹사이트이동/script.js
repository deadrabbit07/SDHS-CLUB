
function clickHandler(e) {
    if (e.key == "Enter") {
        let txt = document.querySelector(".txt").value;
        let link = `https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=${txt}`;
        window.location.href = link;

    }
}

const img2 = document.querySelector(".img2").addEventListener("click", () => {
    let txt = document.querySelector(".txt").value;
    let link = `https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=${txt}`;
    window.location.href = link;

})

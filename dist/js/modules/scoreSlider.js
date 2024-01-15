function sliderScore() {
    const score = document.querySelector(".mainWindow__score");
    const next = document.querySelector("#mainWindow__next");
    const prev = document.querySelector("#mainWindow__prev");
    let index = 1;
    score.textContent = index;


    const item = document.querySelectorAll(".mainWindow__my-slider__item");
    const indexArray = item.length-2;
    console.log(indexArray);

    next.addEventListener("click", (e) => {
        if (index >= indexArray) { 
            index = 1;
            score.textContent = index;
        } else {
            index = index + 1;
            score.textContent = index;
        }
    });

    prev.addEventListener("click", (e) => {
        if (index <= 1) { 
            index = indexArray;
            score.textContent = index;
        } else {
            index = index - 1;
            score.textContent = index;
        }
    });
}

export default sliderScore;

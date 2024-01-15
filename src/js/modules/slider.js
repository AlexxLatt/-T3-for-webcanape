function slider() {
    var mainWindowSlider = tns({
        container: '.mainWindow__my-slider',
        controlsContainer: "#mainWindow__custom_controlsContainer",
        prevButton: '#mainWindow__prev',
        nextButton: '#mainWindow__next',
        items: 1,
        nav: true,
        responsive: {}
    });

	var newsSlider = tns({
    container: '.news__my-slider',
    controlsContainer: "#news__custom_controlsContainer",
    prevButton: '#news__prev',
    nextButton: '#news__next',
    items: 3,
    nav: false,
    
    responsive: {
    0: {
        items: 1, // На самых узких экранах отображаем по одному элементу
    },
    769: {
        items: 2, // От 769 пикселей и до 1044 отображаем по два элемента
    },
    1045: {
        items: 3, // Начиная с 1045 пикселей отображаем по три элемента
    },
       
    }
});


    return { mainWindowSlider, newsSlider };
}

export default slider;

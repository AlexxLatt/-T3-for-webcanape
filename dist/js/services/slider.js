function slider(){
    
  var slider = tns({
      container: '.my-slider',
      controlsContainer: "#custom_controlsContainer",
      prevButton: '#prev',  
      nextButton: '#next',                           
      items: 1,
      
      responsive: {
        640: {
          edgePadding: 20,
          gutter: 20,
          items: 2
        },
        700: {
          gutter: 30
        },
        900: {
          items: 3
        }
      }
    });

}
export default slider;
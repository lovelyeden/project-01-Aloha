    document.addEventListener("DOMContentLoaded", function() {

      //Carousel 
      const flkty = new Flickity( '.main-carousel', {
      cellAlign: 'left',
      });
      //Email Validation 
      const subscribe = document.getElementById("subscribe-form");
      const inputText = document.getElementById("email");
      subscribe.addEventListener("submit", function (event) {
      event.preventDefault();

      let inputVal = inputText.value;

      if (inputVal === "") {
      alert('Please entered an valid email address!');
      } else {
      alert('Thank you for your subscribe!');
    }

    });
      
      // Cartt
      const cartTotal = 0;
      $("$counter").hide();

      $(".button").on("click", function(event) {
        event.preventDefault();
        cartTotal++;
        $("$counter")
          .text(cartTotal)
          .show();
        console.log(".counter");
      });
});//end of document ready



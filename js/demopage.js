var openNav =	function() {
     document.getElementById("myNav").style.width = "100%";
    }
     openNav();
    
  function closeNavCLick () {
        document.getElementById("myNav").style.width = "0%";
    }
    closeNavCLick();

function onDemoLoad(){
    if(document.getElementsByClassName("demoPageClass")[0]){
        document.getElementsByClassName("containerApp")[0].style="height:100%;overflow:auto;";
        document.getElementsByTagName("body").style="overflow:scroll;"
        var  heightWindow=$(window).height();
        heightWindow=heightWindow-100;
        //document.getElementsByClassName("demoButtons")[0].style="margin-top:"+heightWindow+"px !important;";
    }
    
}onDemoLoad();
    function scrollToADiv(){

        $(".overlay-content a").on('click', function(event) {

            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
              // Prevent default anchor click behavior
              event.preventDefault();
        
              // Store hash
              var hash = this.hash;
        
              // Using jQuery's animate() method to add smooth page scroll
              // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
              $('html, body').animate({
                scrollTop: $(hash).offset().top+60
              }, 800, function(){
           
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
              //  window.location.hash = $(hash).offset().top+60
                
              });
              closeNavCLick();
            } // End if
         
          })
         
    } scrollToADiv();

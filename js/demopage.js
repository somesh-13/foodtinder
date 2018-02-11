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
        document.getElementsByClassName("containerApp")[0].style="height:470px;overflow:auto;";
        document.getElementsByTagName("body").style="overflow:scroll;"
    
    }
    
}onDemoLoad();
    

    var dummyFoodItems=[
    {id:0,name:"You are viewing",url:"https://firebasestorage.googleapis.com/v0/b/foodtinder-3543e.appspot.com/o/bino.jpg?alt=media&token=078b9fe0-9d9a-4fe1-b0a6-bdfaa8bf842f"
    ,healthindex:50,question:"You are viewing",matched:"false",description:"THis is dummyitem"},
    {id:1,name:"Healthy Liked Foods",url:"https://firebasestorage.googleapis.com/v0/b/foodtinder-3543e.appspot.com/o/pexels-photo-128402.jpeg?alt=media&token=8e107cd2-1663-484f-b86b-5526005d8eeb"
    ,healthindex:88,question:"YOu are viewing healthy liked food items",matched:"false",description:"CAkes contains a lot of sugar and will make you fat"},
    {id:2,name:"Unhealthy Liked Foods",url:"https://firebasestorage.googleapis.com/v0/b/foodtinder-3543e.appspot.com/o/24.jpeg?alt=media&token=1f297a0a-7ff9-4d93-ac44-57771d9f01d2"
    ,healthindex:15,question:"This is liked unhealthy food item",matched:"false",description:"CAkes contains a lot of sugar and will make you fat"},
    {id:3,name:"Healthy Disliked Foods",url:"https://firebasestorage.googleapis.com/v0/b/foodtinder-3543e.appspot.com/o/6.jpeg?alt=media&token=17f3c2d9-d130-4cee-93ed-a94e9f6d3070"
    ,healthindex:15,question:"This is disliked healthy food item",matched:"false",description:"CAkes contains a lot of sugar and will make you fat"},
    {id:4,name:"Unhealthy Disliked food",url:"https://firebasestorage.googleapis.com/v0/b/foodtinder-3543e.appspot.com/o/23.jpg?alt=media&token=f79cc5f9-649f-417a-9476-bb6b2b56e14b"
    ,healthindex:15,question:"These are disliked unehealthy food items",matched:"false",description:"CAkes contains a lot of sugar and will make you fat"}
 
    ];
var semiCircleMenu = function(){
    var isOn = false;

    $('#container').click(function() {
      if(isOn) {
        reset();
      } else {
      
        setPosition();
      
      }
    });
    
    function setPosition() {
      isOn = true;
      var links = $('#container a');
      var radius = (links.length * links.width()) /1.8;
      var degree = Math.PI / links.length, angle = degree / 2;
      
      links.each(function() {
        var x = Math.round(radius * Math.cos(-angle));
        var y = Math.round(radius * Math.sin(-angle));
        
        $(this).css({
          left: x + 'px',
          top: y + 'px'
        });
        
        if(window.console) {
          console.log(x, y);
          
        }
        
        angle += degree;
      });
      $(".IconsText").css("display","block");
      $("#container").removeClass("bounce");
      $("#calcButton").css("display","none");
      
    }
    
    function reset() {
      $('#container a').css({
        left: 0 + 'px',
        top: 0 + 'px',
      });
      $("#container").addClass("bounce");
      $(".IconsText").css("display","none");
      $("#calcButton").css("display","block");
      isOn = false;
    }
    
}

semiCircleMenu();

//LOgic for semicircle menu creation ends here
//LOgic for semicircle menu creation ends here

var foodItemsInfo = function( itemtype){ 
if(($(".IconsText")[0].style.display=="block")){ 
    var AllFoodIds =[];
    $("#sliderID").css("display","block");
    var DislikedFoodItemsIds=JSON.parse(sessionStorage.getItem("foodDisLikedArray"));
    var likedFoodItemsIds=JSON.parse(sessionStorage.getItem("foodLikedArray"));
        var AllfoodItems=JSON.parse(sessionStorage.getItem("fooditemsList"));
  //  var dummyfoodItems=JSON.parse(sessionStorage.getItem("dummyFoodItems"));
    if(AllfoodItems){
        for (var i=0;i<AllfoodItems.length;i++){
            AllFoodIds[i]=AllfoodItems[i].id;
        }
    if(DislikedFoodItemsIds  && likedFoodItemsIds){
        var likedFoodItemsIdsNumber=likedFoodItemsIds.map(Number);
        var DislikedFoodItemsIdsNumber=DislikedFoodItemsIds.map(Number);  
        var commonLiked = $.grep(likedFoodItemsIdsNumber, function(element) {
            return $.inArray(element, AllFoodIds ) !== -1;
        });
        var commonDisLiked = $.grep(DislikedFoodItemsIdsNumber, function(element) {
          return $.inArray(element, AllFoodIds ) !== -1;
      });         
        var uniquecommonLiked= Array.from(new Set(commonLiked));

        var uniquecommonDisLiked= Array.from(new Set(commonDisLiked));
    }

    }
 


  if(itemtype==healthyLiked){
      console.log("healthy liked food ")
      $("#sliderID").css("display","block");

    
    for(var k=0;k<2;k++){
        console.log(dummyFoodItems[k].url +" is the dummy items url");
        $("#ULlistId").append('<li class="ListElements"><a href=""><span class="tab"><img src="'+dummyFoodItems[k].url+'"><span class="foodNameOnimage">'+dummyFoodItems[k].name+'</span></span></a></li>');
     }    
     if(uniquecommonLiked){
        for(var j=0;j<uniquecommonLiked.length;j++){
               
            if(AllfoodItems[uniquecommonLiked[j]].healthindex>50){
             console.log(AllfoodItems[uniquecommonLiked[j]].name+" are the healthy liked")
             console.log(AllfoodItems[uniquecommonLiked[j]].url+" are the healthy liked")
             console.log(AllfoodItems[uniquecommonLiked[j]].healthindex+" of  the  healthy liked")
             
             $("#ULlistId").append('<li class="ListElements"><a href=""><span class="tab"><img src="'+AllfoodItems[uniquecommonLiked[j]].url+'"><span class="foodNameOnimage">'+AllfoodItems[uniquecommonLiked[j]].name+'</span></span></a></li>');
            
     }
 }

 }


    $(".CloseButton").css("display","block");
   
    CarouselSlide();
  }
 else if(itemtype==UnhealthyLiked){
    console.log(" unhealthy liked food ")
    for(var k=0;k<3;k=k+2){
        console.log(dummyFoodItems[k].url +" is the dummy items url");
        $("#ULlistId").append('<li class="ListElements"><a href=""><span class="tab"><img src="'+dummyFoodItems[k].url+'"><span class="foodNameOnimage">'+dummyFoodItems[k].name+'</span></span></a></li>');
     }    
     if(uniquecommonLiked){
        for(var j=0;j<uniquecommonLiked.length;j++){
       
            if(AllfoodItems[uniquecommonLiked[j]].healthindex<50){
             console.log(AllfoodItems[uniquecommonLiked[j]].name+" are the unhealthy liked")
             console.log(AllfoodItems[uniquecommonLiked[j]].url+" are the  unhealthy liked")
             console.log(AllfoodItems[uniquecommonLiked[j]].healthindex+" of  the  unhealthy liked")
             $("#ULlistId").append('<li class="ListElements"><a href=""><span class="tab"><img src="'+AllfoodItems[uniquecommonLiked[j]].url+'"><span class="foodNameOnimage">'+AllfoodItems[uniquecommonLiked[j]].name+'</span></span></a></li>');
           
     }
    }
     }

$(".CloseButton").css("display","block");
CarouselSlide();
    }
else if(itemtype==HealthyDisliked){
    console.log("healthy Disliked food ")
    for(var k=0;k<4;k=k+3){
        console.log(dummyFoodItems[k].url +" is the dummy items url");
        $("#ULlistId").append('<li class="ListElements"><a href=""><span class="tab"><img src="'+dummyFoodItems[k].url+'"><span class="foodNameOnimage">'+dummyFoodItems[k].name+'</span></span></a></li>');
     } 
   if(uniquecommonDisLiked){
    for(var j=0;j<uniquecommonDisLiked.length;j++){
        //	AllfoodItems[uniquecommonDisLiked[j]].name;
        if(AllfoodItems[uniquecommonDisLiked[j]].healthindex>50){
            console.log(AllfoodItems[uniquecommonDisLiked[j]].name +" are the healthy disliked")
            console.log(AllfoodItems[uniquecommonDisLiked[j]].url +" are the healthy disliked")
            console.log(AllfoodItems[uniquecommonDisLiked[j]].healthindex+" of  the healthy disliked")
            $("#ULlistId").append('<li class="ListElements"><a href=""><span class="tab"><img src="'+AllfoodItems[uniquecommonDisLiked[j]].url+'"><span class="foodNameOnimage">'+AllfoodItems[uniquecommonDisLiked[j]].name+'</span></span></a></li>');
           
        } 
        //	document.getElementById('matchedFood').innerHTML=AllfoodItems[uniquecommonDisLiked[j]].name;
        }
   }

        $(".CloseButton").css("display","block");
        CarouselSlide();
}
else  if(itemtype==UnhealthyDisLiked){
    console.log("Unhealthy Disliked food ")
    for(var k=0;k<5;k=k+4){
        console.log(dummyFoodItems[k].url +" is the dummy items url");
        $("#ULlistId").append('<li class="ListElements"><a href=""><span class="tab"><img src="'+dummyFoodItems[k].url+'"><span class="foodNameOnimage">'+dummyFoodItems[k].name+'</span></span></a></li>');
     } 
     if(uniquecommonDisLiked){
        for(var j=0;j<uniquecommonDisLiked.length;j++){
            //	AllfoodItems[uniquecommonDisLiked[j]].name;
            if(AllfoodItems[uniquecommonDisLiked[j]].healthindex<50){
                console.log(AllfoodItems[uniquecommonDisLiked[j]].name +" are the Unhealthy disliked")
                console.log(AllfoodItems[uniquecommonDisLiked[j]].url +" are the  Unhealthy disliked")
                console.log(AllfoodItems[uniquecommonDisLiked[j]].healthindex+" of  the Unhealthy disliked")
                $("#ULlistId").append('<li class="ListElements"><a href=""><span class="tab"><img src="'+AllfoodItems[uniquecommonDisLiked[j]].url+'"><span class="foodNameOnimage">'+AllfoodItems[uniquecommonDisLiked[j]].name+'</span></span></a></li>');
               
            }
            //	document.getElementById('matchedFood').innerHTML=AllfoodItems[uniquecommonDisLiked[j]].name;
            }
     }

        $(".CloseButton").css("display","block");
        CarouselSlide();
}
}
    
}

// logic for fooditemFetching ends here//logic for carousel starts here
//logic for carousel starts here
var CarouselSlide= function() {
    $('#calcButton').css('display', 'none');
    $('.ListElements').click(false);
    $("#container").css("display","none");
  var interval=1000;
  /* interval no
  interval = setInterval(function () {  
    moveRight();
  }, 1000);*/
  
  $('._slider').mouseover(function(){
    clearInterval(interval);
    
  });
  /*  not required mouseleave as makes it fast
  $('._slider').mouseleave(function(){
    interval = setInterval(function () {
      moveRight();
      }, 1000);
  });*/
  
  var slideCount = $('._slider ul li').length;
  var slideWidth = $('._slider ul li').width();
  var slideHeight = $('._slider ul li').height();
  var sliderUlWidth = slideCount * slideWidth;
  
  $('._slider').css({ width: slideWidth, height: slideHeight });
  
  $('._slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
  
    $('._slider ul li:last-child').prependTo('._slider ul');
  
    function moveLeft() {
        $('._slider ul').animate({
            left: + slideWidth
        }, interval, function () {
            $('._slider ul li:last-child').prependTo('._slider ul');
            $('._slider ul').css('left', '');
        });
    };
  
    function moveRight() {
        $('._slider ul').animate({
            left: - slideWidth
        }, interval, function () {
            $('._slider ul li:first-child').appendTo('._slider ul');
            $('._slider ul').css('left', '');
        });
    };
  
    $('._slider_prev').unbind('click').bind('click', function (e){
        moveLeft();
        return false;
    });
  
    $('._slider_next').unbind('click').bind('click', function (e){
        moveRight();
        return false;
    });
   $('.CloseButton').click(function () {
    clearInterval(interval);

interval=0;


   });
  
}// logic for slider ends here

var closeCarousel = function(){
    $(".ListElements").remove();  
    $("#sliderID").css("display","none");
    $(".CloseButton").css("display","none"); 
    $("#container").css("display","block");
    $('#calcButton').css('display', 'block');
}

var calculateNutrition = function(){
    $("#calcButton").css("display","block");
	$("#caluclateNav").css("height","100%");
    var likedFoodItemsIds=JSON.parse(sessionStorage.getItem("foodLikedArray"));
    var AllFoodIds =[];
if(likedFoodItemsIds==null){
    alert("you have not liked anything till now please do some swipes to calculate.")
}

    if(likedFoodItemsIds){
    var likedFoodItemsIdsNumber=likedFoodItemsIds.map(Number);
  var AllfoodItems=JSON.parse(sessionStorage.getItem("fooditemsList"));
    for (var i=0;i<AllfoodItems.length;i++){
        AllFoodIds[i]=AllfoodItems[i].id;
    }    
var commonLiked = $.grep(likedFoodItemsIdsNumber, function(element) {
      return $.inArray(element, AllFoodIds ) !== -1;
  });
var uniquecommonLiked= Array.from(new Set(commonLiked));
console.log(uniquecommonLiked+" is array of items liked overall")
var sum=0;
for(var q=0;q<uniquecommonLiked.length;q++){
    sum=sum+Number(AllfoodItems[uniquecommonLiked[q]].healthindex);
    
}

var average = sum/uniquecommonLiked.length;
console.log(average+" is the average")
if(average>0 && average<=35){
    console.log("here between 0 to 30")
$(".calcText")[0].innerHTML = "you eat a lot of junk food and is dangerous for your health , leave each unhealthy food per week \
first the worst like cakes then coldrinks then vegetarian junk food and increase your protien intake , consume 1gm per kg body weight protien eg 70gm protien for 70kgs";
$(".card img")[0].src="https://firebasestorage.googleapis.com/v0/b/foodtinder-3543e.appspot.com/o/28.jpeg?alt=media&token=cc47d8d9-e79b-4f77-9479-3b7135f26225";
}
else if(average>35 && average<=70){
    console.log("here between  30 to 69")
	$(".calcText")[0].innerHTML ="you are not in too much of a danger but still you need to improve your food habits , increase protien(1 gm per KG body weight) , reduce carbs and eat a lot of green veggies ";
	$(".card img")[0].src="https://firebasestorage.googleapis.com/v0/b/foodtinder-3543e.appspot.com/o/27.jpeg?alt=media&token=06fc2a12-28ee-4b71-84f8-80c241e215d0";
	    //alert("you eat a lot of carbs  and you need to work hard to loose weight")
}

else if (average>70){
    console.log("here between  70 to 100")
		$(".calcText")[0].innerHTML="you are well aware about the food science and are on track of you health";
		$(".card img")[0].src="https://firebasestorage.googleapis.com/v0/b/foodtinder-3543e.appspot.com/o/salads.jpg?alt=media&token=27b278d8-bc70-4fed-b4ce-8b883d9fd3a1";
    //alert("you are well aware about the food science and are on track of you health")
}

    }
    
}

var backgroundColorChange= function(){

 if($(window).width()>767){
if($('.containerApp')){
    $('.containerApp').css("height", "570px");
}
 }    
}
function closeNavCalc() {
 $("#caluclateNav").css("height","0%");
 }

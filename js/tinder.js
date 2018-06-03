var arr = [];
var inc=1;


	//var AllfoodItemslength=(JSON.parse(sessionStorage.getItem("fooditemsList"))).length;



            //Do your stuff
		//	$(window).load(function(event) {
	var likedFoodItemsstack=[];
	
	var dislikedFoodItemsstack=[];
	var ArrayGenerator=  function(AllfoodItemslength){
		AllfoodItemslength--;
		while(arr.length < AllfoodItemslength){
	var randomnumber = Math.floor(Math.random()*AllfoodItemslength) + 1;
	if(arr.indexOf(randomnumber) > -1) continue;
	arr[arr.length] = randomnumber;
	
}
   return arr;

}
function preloadimages(arr){ 
    var newimages=[], loadedimages=0
    var postaction=function(){}
    var arr=(typeof arr!="object")? [arr] : arr
    function imageloadpost(){
        loadedimages++
        if (loadedimages==arr.length){
            postaction(newimages) //call postaction and pass in newimages array as parameter
        }
    }
    for (var i=0; i<arr.length; i++){
        newimages[i]=new Image()
        newimages[i].src=arr[i]
        newimages[i].onload=function(){
            imageloadpost()
        }
        newimages[i].onerror=function(){
            imageloadpost()
        }
    }
    return { //return blank object with done() method
        done:function(f){
            postaction=f || postaction //remember user defined callback functions to be called when images load
        }
    }
}
 

		var tinderFunc  =  function (fooditems,AllfoodItemslength) {
			var namesFood = new Array(fooditems.length);
			var foodId = new Array(fooditems.length);
			var foodImageURls = new Array(fooditems.length);
		

			var foodquestion= new Array(fooditems.length);
//			var namesFood,foodId,foodImageURls;
			for (var i=0;i<fooditems.length;i++){
				namesFood[i]=fooditems[i].name;
				foodId[i]=fooditems[i].id;
				foodImageURls[i]=fooditems[i].url;
				foodquestion[i]=fooditems[i].question;

			}
			preloadimages(foodImageURls).done(function(images){
				//call back codes, for example:
				//alert(images.length) //alerts 3
				
				//alert(images[0].src+" "+images[0].width) //alerts '1.gif 220'
			   })
	
			$("div#swipe_like").on( "click", function() {
				swipeLike();
			});	
		
			$("div#swipe_dislike").on( "click", function() {
				swipeDislike();
			});	
		
			addNewProfile();
		
			function swipe() {
				Draggable.create("#photo", {
					   throwProps:true,
					   onDragEnd:function(endX) {
						   if(Math.round(this.endX) > 0 ) {
							   swipeLike();	
									  
						   }
						   else {
							   swipeDislike();
						   }
						   console.log(Math.round(this.endX));
					}
				});
			}
			
	
			function swipeLike() {
				
					var $photo = $("div.content").find('#photo');
					var fooditems=document.getElementById('randomID').value;
					likedFoodItemsstack.push(fooditems);
					sessionStorage.setItem("foodLikedArray", JSON.stringify(likedFoodItemsstack));
			

					var swipe = new TimelineMax({repeat:0, yoyo:false, repeatDelay:0, onComplete:remove, onCompleteParams:[$photo]});
					swipe.staggerTo($photo, 0.8, {bezier:[{left:"+=400", top:"+=300", rotation:"60"}], ease:Power1.easeInOut});
						
					addNewProfile();
			}
		
			function swipeDislike() {
				
					var $photo = $("div.content").find('#photo');
					var foodDisLiked=document.getElementById('randomID').value;
					dislikedFoodItemsstack.push(foodDisLiked);
					sessionStorage.setItem("foodDisLikedArray", JSON.stringify(dislikedFoodItemsstack));
					var swipe = new TimelineMax({repeat:0, yoyo:false, repeatDelay:0, onComplete:remove, onCompleteParams:[$photo]});
					swipe.staggerTo($photo, 0.8, {bezier:[{left:"+=-350", top:"+=300", rotation:"-60"}], ease:Power1.easeInOut});
		
					addNewProfile();
			}
		
			function remove(photo) {
				$(photo).remove();
			}
		
			function addNewProfile() {
				//var randomid = arr[Math.floor(Math.random() * 10)];
				var randomid = arr[inc-1];
			
				if (inc==arr.length-1){ 
					inc=0;
				}
				if(inc==arr.length){
					inc=0; 
					randomid = arr[Math.floor(Math.random() * 10)];
				}
				inc++;
				console.log(randomid+ " is random id")
			//	var randomid=foodId[Math.floor(Math.random() * 8 )];
				var names = namesFood[randomid];
				document.getElementById('foodquestion').innerHTML=foodquestion[randomid];
				
				//var photos = ['1', '2', '3'][Math.floor(Math.random() * 3)]
				$("div.content").prepend('<div class="photo" id="photo" style="background-image:url('+foodImageURls[randomid]+')">'
				+ '<span class="meta">' 
				+ '<p>'+names+'</p>' 
				+ '<span class="moments">0</span>' 
				+ '<input type="hidden" id="randomID" value="'+randomid+'">' 
				+ '</span>' 
				+ '</div>');
		
				swipe();
			}
		
		}			

tinderFunc();
			

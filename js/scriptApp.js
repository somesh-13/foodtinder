   var app = angular.module("FoodEdu",["ui.router"])
					.config(function($stateProvider,$urlMatcherFactoryProvider,$urlRouterProvider){
						$urlMatcherFactoryProvider.caseInsensitive(true);
						$urlRouterProvider.otherwise("/swipes");
						$stateProvider
						.state("swipes",{
                            url:"/swipes",
                            templateUrl:"swipePartial.html",
                            controller:"swipeController",
							controllerAs:"swipesCtrl",
							data:{
								customData1:"Home state custom data 1",
								customData2:"homeState custom data 2 "
							}
							})			
							.state("matches",{
                                url:"/matches",
							templateUrl:"matchesPartial.html",
                            controller:"matchesController",
							controllerAs:"matchesCtrl",
							data:{
								customData1:"Courses state custom data 1",
								customData2:"Courses state custom data 2 "
							}
                        })
					})

					.controller("swipeController",function($scope,$timeout){
						$scope.$on('$viewContentLoaded', function(event) {
							$timeout(function() {
								$scope.message="swipe page";
								var AllfoodItemslength="";
								var fooditems = [
							
									{id:0,name:"chicken fried",url:"https://firebasestorage.googleapis.com/v0/b/foodtinder-3543e.appspot.com/o/1.jpeg?alt=media&token=ed1d22c5-c36b-4d5c-af9c-0bf46717a5c8"
									,healthindex:80,question:"do you consider eating chicken fried healthy?",matched:"false",description:"chicken is lean source of protien"},
									{id:1,name:"chicken soup",url:"https://firebasestorage.googleapis.com/v0/b/foodtinder-3543e.appspot.com/o/2.jpg?alt=media&token=2842bd3d-5e91-411b-af13-950c6cc2adf4"
									,healthindex:83,question:"do you consider eating chicken soup healthy?",matched:"false",description:"chicken is lean source of protien"},
									{id:2,name:"chocolate pastry",url:"https://firebasestorage.googleapis.com/v0/b/foodtinder-3543e.appspot.com/o/20.jpeg?alt=media&token=2747698e-4ab5-495e-913d-7b74acb4265d"
									,healthindex:10,question:"do you consider eating choclate pastry  healthy?",matched:"false",description:"chocolate has unhealthy sugar and carbs"},
									{id:3,name:"chocolate cookies",url:"https://firebasestorage.googleapis.com/v0/b/foodtinder-3543e.appspot.com/o/21.jpeg?alt=media&token=c1d7433a-819b-4576-b48e-10758ba15926"
									,healthindex:15,question:"do you consider eating choclate cookikes healthy?",matched:"false",description:"chocolate is unhealhty due to sugar"},
									{id:4,name:"choco Vanilla Icecream",url:"https://firebasestorage.googleapis.com/v0/b/foodtinder-3543e.appspot.com/o/23.jpg?alt=media&token=f79cc5f9-649f-417a-9476-bb6b2b56e14b"
									,healthindex:5,question:"do you consider eating choclate vanilla icecream healthy?",matched:"false",description:"chocolate is unhealhty due to sugar"},
									{id:5,name:"donuts",url:"https://firebasestorage.googleapis.com/v0/b/foodtinder-3543e.appspot.com/o/26.jpeg?alt=media&token=4767e27f-5e35-4334-9c37-41605951fa08"
									,healthindex:8,question:"do you consider eating donuts healthy",matched:"false",description:"chocolate is unhealhty due to sugar"},
									{id:6,name:"roasted chicken",url:"https://firebasestorage.googleapis.com/v0/b/foodtinder-3543e.appspot.com/o/5.jpeg?alt=media&token=99874e3a-c317-431b-9f1a-90564dc25411"
									,healthindex:68,question:"do you consider eating roasted chicken healthy?",matched:"false",description:"chocolate is unhealhty due to sugar"},
									{id:7,name:"egg rolls",url:"https://firebasestorage.googleapis.com/v0/b/foodtinder-3543e.appspot.com/o/27.jpeg?alt=media&token=06fc2a12-28ee-4b71-84f8-80c241e215d0"
									,healthindex:77,question:"do you consider egg roll healthy?",matched:"false",description:"egg is a complete source of protien"},
									{id:8,name:"Roasted Chicken",url:"https://firebasestorage.googleapis.com/v0/b/foodtinder-3543e.appspot.com/o/3.jpeg?alt=media&token=f34bfb8b-7c9c-49fa-aa70-fa3b553adbcc"
									,healthindex:87,question:"do you like eating roasted chicken?",matched:"false",description:"Roasted chicken is a complete source of protien"},
									{id:9,name:"Pastry",url:"https://firebasestorage.googleapis.com/v0/b/foodtinder-3543e.appspot.com/o/28.jpeg?alt=media&token=cc47d8d9-e79b-4f77-9479-3b7135f26225"
									,healthindex:17,question:"Are you habitual of eating pastry?",matched:"false",description:"Pastry contains a lot of sugar and will make you fat"},
									{id:10,name:"Cakes",url:"https://firebasestorage.googleapis.com/v0/b/foodtinder-3543e.appspot.com/o/29.jpeg?alt=media&token=0d049eb2-5682-46fd-b292-fd7ee044f818"
									,healthindex:15,question:"Do you eat big slices of cakes at a birthday?",matched:"false",description:"CAkes contains a lot of sugar and will make you fat"},

								];  
								
								sessionStorage.setItem("fooditemsList", JSON.stringify(fooditems));
							//	sessionStorage.setItem("dummyFoodItems", JSON.stringify(dummyFoodItems));

								$scope.fooditems=fooditems;
								$scope.AllfoodItemslength=fooditems.length;
								AllfoodItemslength=$scope.AllfoodItemslength;
								//var AllfoodItemslength=fooditems.length;
								ArrayGenerator(AllfoodItemslength);
								tinderFunc(fooditems,AllfoodItemslength);
							
							},0);
						  });
							})			
					.controller("matchesController",function($scope,$state){
/*
							var AllFoodIds =[];
							var likedFoodItemsIds=JSON.parse(sessionStorage.getItem("foodLikedArray"));
							var DislikedFoodItemsIds=JSON.parse(sessionStorage.getItem("foodDisLikedArray"));
							 var likedFoodItemsIdsNumber=likedFoodItemsIds.map(Number);
							 var DislikedFoodItemsIdsNumber=DislikedFoodItemsIds.map(Number);
							var AllfoodItems=JSON.parse(sessionStorage.getItem("fooditemsList"));
							for (var i=0;i<AllfoodItems.length;i++){
								AllFoodIds[i]=AllfoodItems[i].id;
							}
						
						
						var commonLiked = $.grep(likedFoodItemsIdsNumber, function(element) {
							return $.inArray(element, AllFoodIds ) !== -1;
						});
						var commonDisLiked = $.grep(DislikedFoodItemsIdsNumber, function(element) {
							return $.inArray(element, AllFoodIds ) !== -1;
						});
						var uniquecommonLiked= Array.from(new Set(commonLiked));
						var uniquecommonDisLiked= Array.from(new Set(commonDisLiked));
						//console.log(uniquecommonLiked); // returns liked elements ids
						//console.log(uniquecommonDisLiked); // returns liked elements ids
						
						for(var j=0;j<uniquecommonLiked.length;j++){
							AllfoodItems[uniquecommonLiked[j]].name;
							console.log(AllfoodItems[uniquecommonLiked[j]].name+" are the liked")
							console.log(AllfoodItems[uniquecommonLiked[j]].url+" are the liked")
						}
						for(var j=0;j<uniquecommonDisLiked.length;j++){
						//	AllfoodItems[uniquecommonDisLiked[j]].name;
							console.log(AllfoodItems[uniquecommonDisLiked[j]].name +" are the disliked")
							console.log(AllfoodItems[uniquecommonDisLiked[j]].url +" are the disliked")
							
						//	document.getElementById('matchedFood').innerHTML=AllfoodItems[uniquecommonDisLiked[j]].name;
						}
		*/				
						semiCircleMenu();
					
						/*	$scope.coursesdata1= $state.current.data.customData1;
							$scope.coursesdata2= $state.current.data.customData2;
							$scope.homedata1= $state.get("main").data.customData1;
							$scope.homedata2= $state.get("main").data.customData2;*/
				
					})
								
				/*	.controller("studentsController",function(studentsList,$scope,$http,$rootScope,$log){

							$scope.$on("$locationChangeStart",function(event,next,current){
								$log.debug("Location change start fired");
								$log.debug(event);
								$log.debug(next);
								$log.debug(current);
							});
							$scope.$on("$routeChangeStart",function(event,next,current){
								$log.debug("Route change start fired");
								$log.debug(event);
								$log.debug(next);
								$log.debug(current);
							});
		
							$scope.students=studentsList;
					}) */
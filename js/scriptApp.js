   var app = angular.module("FoodEdu",["ui.router"])
					.config(function($stateProvider,$urlMatcherFactoryProvider,$urlRouterProvider){
						$urlMatcherFactoryProvider.caseInsensitive(true);
						$urlRouterProvider.otherwise("/demo");
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
						.state("demo",{
							url:"/demo",
						templateUrl:"demoPartial.html",
						controller:"demoController",
						controllerAs:"demoCtrl",
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
									{id:11,name:"Barbeque chicken",url:"https://firebasestorage.googleapis.com/v0/b/foodtinder-3543e.appspot.com/o/barbequechicken.jpg?alt=media&token=009deb77-adac-4f00-9951-41e946a4b1b5"
									,healthindex:82,question:"Are you fond of eating barbeque chicken",matched:"false",description:"chicken is lean source of protien"},
									{id:12,name:"Barbeque mushrooms",url:"https://firebasestorage.googleapis.com/v0/b/foodtinder-3543e.appspot.com/o/barbequemushrooms.jpeg?alt=media&token=469269cb-cc85-421e-8e0c-d5b06fd0515d"
									,healthindex:74,question:"Are you fond of eating barbeque mushrooms?",matched:"false",description:"Mushrooms are good source of protien"},
									{id:13,name:"Dal tadka",url:"https://firebasestorage.googleapis.com/v0/b/foodtinder-3543e.appspot.com/o/DalTadka.jpeg?alt=media&token=10e79549-b751-4c4f-8f1f-1c9428c8a054"
									,healthindex:68,question:"DO you like eating tasty Indian dal tadka?",matched:"false",description:"Dal has protien but carbs too"},
									{id:14,name:"Egg Fried Rice",url:"https://firebasestorage.googleapis.com/v0/b/foodtinder-3543e.appspot.com/o/fried%20rice.jpeg?alt=media&token=5ad030b4-c0cd-488a-b555-9e020119e9ac"
									,healthindex:"63",question:"Do you like Tasty Fried rice with omlette topping",matched:"false",description:"Rice has carbs and protien cant make for it too"},
									{id:15,name:"Idli",url:"https://firebasestorage.googleapis.com/v0/b/foodtinder-3543e.appspot.com/o/idli.jpeg?alt=media&token=4011afe2-2fee-4488-a7b8-c7587faa4fff"
									,healthindex:48,question:"Are you fond of eating idli ?",matched:"false",description:"Idli has a lot of carbs"},
									{id:16,name:"Masala Dosa",url:"https://firebasestorage.googleapis.com/v0/b/foodtinder-3543e.appspot.com/o/masaladosa.jpeg?alt=media&token=2e9c5d58-2e28-477e-b34a-0cf63559f61e"
									,healthindex:25,question:"do you eat it this tasty dosa frequently?",matched:"false",description:"Dosa has carbs . maida and potatoes"},
									{id:17,name:"McPuff MC'D",url:"https://firebasestorage.googleapis.com/v0/b/foodtinder-3543e.appspot.com/o/McVeggie%20MCdonalds.jpeg?alt=media&token=b0ce5509-d866-4153-b3c7-e43c98b6b0d9"
									,healthindex:33,question:"MC Puff seems tasty, do you crave it?",matched:"false",description:"mcfpuff has carbs . maida and potatoes"},
									{id:18,name:"mexican nachos",url:"https://firebasestorage.googleapis.com/v0/b/foodtinder-3543e.appspot.com/o/mexicannachos.jpg?alt=media&token=83ffa287-47e5-4854-90f3-d8e007e4c35b"
									,healthindex:28,question:"do you eat it these nachos frequently?",matched:"false",description:"nachos has carbs . maida and potatoes"},
									{id:19,name:"Mutton Curry",url:"https://firebasestorage.googleapis.com/v0/b/foodtinder-3543e.appspot.com/o/mutton%20curry.jpeg?alt=media&token=59b1b25d-3a59-4ef3-852f-940e957afe01"
									,healthindex:82,question:"do you like eating mutton curry?",matched:"false",description:"Mutton curry has high protiens"},
									{id:20,name:"pulao",url:"https://firebasestorage.googleapis.com/v0/b/foodtinder-3543e.appspot.com/o/pulao.jpg?alt=media&token=5f776510-e9a0-480f-8257-3467b797d562"
									,healthindex:24,question:"do you like eating Indian Pulao?",matched:"false",description:"Pulao has high carbs"},
									{id:21,name:"Salads",url:"https://firebasestorage.googleapis.com/v0/b/foodtinder-3543e.appspot.com/o/salads.jpg?alt=media&token=27b278d8-bc70-4fed-b4ce-8b883d9fd3a1"
									,healthindex:77,question:"do you like eating salads?",matched:"false",description:"salads are good for healthy"},
									{id:22,name:"Fries",url:"https://firebasestorage.googleapis.com/v0/b/foodtinder-3543e.appspot.com/o/fries.jpeg?alt=media&token=3eaa981b-90be-4e3e-999d-96b1162a0464"
									,healthindex:23,question:"are you habitual of eating fries?",matched:"false",description:"fries has high carbs"},			
									{id:23,name:"namkeen",url:"https://firebasestorage.googleapis.com/v0/b/foodtinder-3543e.appspot.com/o/namkeen.jpeg?alt=media&token=52abd20e-bcbf-4aa7-abb8-a760bc5fea75"
									,healthindex:33,question:"are these your chakna :D and you binge eat it?",matched:"false",description:"namkeen has slightly high carbs"},						
									{id:24,name:"Potato Chips",url:"https://firebasestorage.googleapis.com/v0/b/foodtinder-3543e.appspot.com/o/potato%20chips.jpeg?alt=media&token=333afd6d-754f-4fb6-888e-73ec0c6043a5"
									,healthindex:26,question:"is it your go to option everyday as you get hungry?",matched:"false",description:"namkeen has slightly high carbs"},						
									{id:25,name:"ChocoCOld Coffee",url:"https://firebasestorage.googleapis.com/v0/b/foodtinder-3543e.appspot.com/o/choco%20cold%20coffee.jpeg?alt=media&token=d7982f6c-c14d-470c-8a74-e8b97dd2eaa0"
									,healthindex:26,question:"do you have this kind of coffee?",matched:"false",description:"it has sugar and high carbs"},
									{id:26,name:"burger and fires",url:"https://firebasestorage.googleapis.com/v0/b/foodtinder-3543e.appspot.com/o/burger%20n%20fries.jpeg?alt=media&token=239c86e2-b79b-4944-b29c-caeb8336a7bf"
									,healthindex:28,question:"do you enjoy this tasty meal frequently?",matched:"false",description:"it has high carbs"}						
				
				
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
						semiCircleMenu();
						backgroundColorChange();
					})
								
					.controller("demoController",function($scope,$state){
						onDemoLoad();
						scrollToADiv();

					})

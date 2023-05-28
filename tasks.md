version 0.1.0
- created svelte skeleton app
- added bulma to app.html 
- created routes folder and homepage
- added login and signup page 
- added +layout for routes
- imported some placeholder images 
- added components folder 
- created TitleBar,WelcomeNavigator,Header, LoginForm, SignupForm, DenominationForm, DenominationList components
- created denomination and denominationlist page and imported components
- updated Navigation Bar to allow for different bar based on logged in state

version 0.2.0
- installed axios 
- created services folder and churchview-service.js 
- updated the loginform to include churchviewService 
- created new logout route
- updated mainNavigator to link to new logout route, with no ux
- created stores.js to include user store
- imported users in TitleBar component
- updated churchview-service login and logout function to include user.set object
- added reload function to churchview-service to save the token on local storage
- added the reload feature to layout page


version 0.3.0
- added createDenomination() , getChurches(), getDenominations() to churchview-service.js
- updated the DenominationList component to show list of denominations 
- updated the login function to include the user id as a response.
- updated stores.js to include the userid 
- updated the denomination form to include userid to be sent.
- completed ability to add a denomination

version 0.4.0
- Created ChurchForm , ChurchList and ChurchListByDenomination components 
- added scripts to ChurchForm and ChurchList
- Created church (to host add church form) and churchlist ( to host list of churches) 
- added the createChurch method on churchview-service


version 0.5.0
- installed leaflets 
- introduced new service class leaflet-map.js 
- updated the main navigator bar to include map
- create new route called /map
- added zoom control and layer control 
- added Street style map layer 
- add a way to get the latest donations lat and long 
- created coordinates component 
- included coordinates component into the church route
- include map on the church page
- added latestChurch to stores.js to update map 
- imported latestChurch to the churchviewService.createChurch and churchMap
- switched const map to let map on churchMap 
- added moveTo for the map 
- fixed the window bug +page.ts

version 0.6.0
- installed svelte frappe charts 
- added a charts page 
- added bar chart
- added chart for getting number of churches per geographical province 
- added pie charts 
- added chart for getting number of churches per denomination
- added system to help user select the chart if they are selecting by denomination

version 0.6.1 
- tested the image upload page function
- testing an imageChange store
- created an image upload component
- created a delete image functionality
- added an uploadImage, deleteImage and getDenominationById method to churchviewservice
- created dynamic pages for the churches 
- updated the signup and login process to take into account hashing and salting of passwords 









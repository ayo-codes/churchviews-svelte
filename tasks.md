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

var portfolioObject = {

    "assets/images/searchApp.jpeg" : ["https://jlovejo2.github.io/Multi-Media-Search-App/","Multi Media Search App"],
    "assets/images/password.jpg" : ["https://jlovejo2.github.io/Password_Generator/","Password Generator"],
    "assets/images/trivia_quiz.jpg" : ["https://jlovejo2.github.io/Trivia_quiz/", "Trivia Quiz"],
    "assets/images/weather_image.png" : ["https://jlovejo2.github.io/Weather_Dashboard/", "Weather Dashboard"],
    "assets/images/calendar.jpg" : ["https://jlovejo2.github.io/Word-Day-Calendar/", "Work Day Calendar"]

};

$(document).ready(function(){

    init();

    createPortfolioCard(portfolioObject);  

});
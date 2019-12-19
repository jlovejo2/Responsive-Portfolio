
function init() {

    $(".content").addClass("animated fadeInRight");

    //code to be used if I want to delay the animation
    // setTimeout(() => {

    //     $(".content").addClass("animated fadeInRight");

    // }, 1000 * 2);

    $(".nav-link").hover(function(){
    
        $(this).toggleClass("animated bounce")
    
    })

}


function createCarousel(mainDiv, imgSRC, numOfImg) {

    var carouselInnerDiv = $("#carouselInner")

    for (i = 1; i <= numOfImg; i++) {

        var imgLink = imgSRC + "img_000" + i + ".jpg";
        var img = $("<img>").attr({ "class": "img-fluid rounded", "src": imgLink, "alt": "Photo" });

        carouselInnerDiv.append(($("<div>").attr("class", "carousel-item")).append(img));
    }

    carouselInnerDiv.children().first().addClass("active");
}

function createPortfolioCard(objOfImgSRCLinks) {

    var rowDiv = $("<div>").attr({ "class": "row mr-2 p-2" });
    var count = 0;
    console.log(objOfImgSRCLinks);

    $.each(objOfImgSRCLinks, function (key, value) {

        console.log(key);
        console.log(value[0]);

        if (count < 3) {

            var colDiv = $("<div>").attr({ "class": "col-xl-4 col-lg-6 col-md-6 col-md-6 p-2" });
            var cardDiv = $("<div>").attr({"class":"card text-center"});
            var cardBodyDiv = $("<div>").attr({"class":"card-body shadow-lg p-2"});
            var cardTitle = $("<h5>").attr({"class":"card-title p-1 m-2","style":"border-bottom: solid 3px rgba(0,0,0,.5)"});
            var imgDiv = $("<img>").attr({ "class": "card-img-top", "src": key });
            var aDiv = $("<a>").attr({"href": value[0], "class": "btn btn-info portfolio_button m-2" });

            cardTitle.text(value[1]);
            aDiv.text("Click here to explore!")

            rowDiv.append(colDiv.append(cardDiv.append(cardBodyDiv.append(cardTitle, imgDiv, aDiv))));

            count++;
        } else {
            $("#portfolioContent").append(rowDiv);
            rowDiv = $("<div>").attr({ "class": "row mr-2 p-2" });
            count = 0;
        }

            $("#portfolioContent").append(rowDiv);
            count= 0;

    });
};




    // <div class="row mr-2 p-2">
    //         <div class="col-xl-4 col-lg-6 col-md-6 col-md-6 p-2">
    //             <img class="img-responsive" src="assets/images/IMG_9209.JPG">
    //                 <a class="portfolio-link" href="#" >Trivia Game</a>
    //         </div>
    //         <div class="col-xl-4 col-lg-6 col-md-6 p-2">
    //           <img class="img-responsive" src="assets/images/IMG_9209.JPG">
    //             <a class="portfolio-link" href="#" >Trivia Game</a>
    //         </div>
    //         <div class="text-center col-xl-4 p-2">
    //           <img class="img-responsive" src="assets/images/IMG_9209.JPG">
    //             <a class="portfolio-link" href="#" >Trivia Game</a>
    //         </div> 
    //     </div>
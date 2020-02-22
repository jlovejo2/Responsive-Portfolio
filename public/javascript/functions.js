
function init() {

  $(".content").addClass("animated fadeInRight delay-1s");

  $(".nav-link").hover(function () {

    $(this).toggleClass("animated headShake")

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
      var cardDiv = $("<div>").attr({ "class": "card text-center" });
      var cardBodyDiv = $("<div>").attr({ "class": "card-body shadow-lg p-2" });
      var cardTitle = $("<h5>").attr({ "class": "card-title p-1 m-2", "style": "border-bottom: solid 3px rgba(0,0,0,.5)" });
      var imgDiv = $("<img>").attr({ "class": "card-img-top", "src": key });
      var aDiv = $("<a>").attr({ "href": value[0], "class": "btn btn-info portfolio_button m-2" });

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
    count = 0;

  });
};

//This function takes an array of titles and an array of objects  and places them in a boostrap 4 table
//Note: the arrays need to be the same length
function createPortfolioTable(arrTitles, arrOfObjects) {

  let tableResponsive = $('<div>').attr('class', 'table-responsive');
  let tableDiv = $('<table>').attr('class', 'table');
  let tableRow1 = $('<tr>').attr('class', 'd-flex');
  let tableBody = $('<tbody>');
  let tableHeader = $('<thead>').attr({ 'class': 'thead-dark' });

  for (title of arrTitles) {


    let tableH = $('<th>').attr({ 'scope': 'col', 'class': 'col-3' });

    tableRow1.append(tableH.text(title))
    tableHeader.append(tableRow1);
    tableDiv.append(tableHeader);
    console.log(tableDiv);
  }

  for (index of arrOfObjects) {

    let tableRow = $('<tr>').attr('class', 'd-flex');
    let img = $('<img>').attr({ 'class': 'img-thumbnail' });
    let link = $('<a>');
    $.each(index, function (key, value) {

      if (key === "imgLink") {
        img.attr('src', value)


      } else if (key === "appLink") {
        let dataCell = $('<td>').attr({ 'scope': 'row', 'class': 'centered col-3' });

        link.attr('href', value)
        dataCell.append(link.append(img));
        tableRow.append(dataCell);
      } else {
        let dataCell = $('<td>').attr({ 'scope': 'row', 'class': 'col-3' });
        console.log(value);

        dataCell.text(value);
        console.log(dataCell);
        tableRow.append(dataCell);
      };
    });
    console.log(tableRow);

    tableBody.append(tableRow);
  }

  tableResponsive.append(tableDiv.append(tableBody));

  $('#portfolioContent').append(tableResponsive);
}


{/* <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

<table class="table">
  <thead class="thead-light">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table> */}




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
$(document).ready(function () {
    
    init()
    
    $('#emailSubmit1').on('click', function (event) {

        //Creating a JSON object with information from the contact form in order to send it through to route
        const submittedInfo = {
            name: $('#fullName').val(),
            fromAddress: $('#sender').val(),
            subject: $('#subject').val(),
            body: $('#body').val(),
        }

        //Executing an ajax call which actually sends the desired JSON object through the route to the api
        $.ajax('/sendEmail/', {
            type: 'POST',
            data: submittedInfo
        }).then(function (emailInfo) {
            console.log('inside ajax post');
            //Console log response on front end to confirm api is sending back desired content
            console.log(emailInfo);
        })
    })

    });
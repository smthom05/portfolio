// let myform = $("form#contact-form");

// // myform.submit(function(event){
// // 	event.preventDefault();
// //    	myform.hide();
// //    	// thankYou.show();

//   // Change to your service ID, or keep using the default service
//   let service_id = "default_service";
//   let template_id = "ContactMe";

//   myform.find("button").text("Contact Me");
//   emailjs.sendForm(service_id,template_id,"contact-form")
//   	.then(function(){ 
//     	console.log("Sent!");
//        myform.find("button").text("Send");
//     }, function(err) {
//        console.log("Send email failed!\r\n Response:\n " + JSON.stringify(err));
//        myform.find("button").text("Send");
//     });
//   return false;
// });


$("#contact-form").on("submit", function(event) {
    event.preventDefault(); // prevent reload
    
    let formData = new FormData(this);
    formData.append('service_id', 'gmail');
    formData.append('template_id', 'template_FCwYklu8');
    formData.append('user_id', 'user_aZK3qK1S3PwyZ3lyWlzPd');
 
    $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
        type: 'POST',
        data: formData,
        contentType: false, // auto-detection
        processData: false // no need to parse formData to string
    }).done(function() {
        alert('Thank you for reaching out! I will get back to you as soon as possible.');
    }).fail(function(error) {
        alert('Oops... ' + JSON.stringify(error));
    });
});
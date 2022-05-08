window.onload=function(){

	$(document).ready(function(){
  $("i#btnslide_").click(function(){
    $(".slidedown_").slideToggle("slow");
  });
});

    var btn = document.getElementById("submit_");
    btn.addEventListener("click", function(e){
		e.preventDefault();

		var email = document.getElementById("inputEmail4").value;
		var phone = document.getElementById('inputPhone').value;
		var firstname = document.getElementById('firstname_').value;
		var lastname = document.getElementById('lastname_').value;
		var venue = document.getElementById('inputCity').value;
		var date = document.getElementById('dateinput').value;
		var bookingtype = document.getElementById('booking_type_').value;

		var body = 'Email: ' + email + '<br>Phone: ' + phone + '<br>Firstname: ' + firstname + '<br>Lastname: ' + lastname + '<br>Venue: ' + venue + '<br>Date: ' + date + '<br>Booking type: ' + bookingtype;
		console.log(body);
	Email.send({
    Host : "smtp.gmail.com",
    Username : "taanhnguyendz@gmail.com",
    Password : "xjaurjfdezlwgqsx",
    To : 'taanhnguyendz@gmail.com',
    From : email,
    Subject : "Nguyên Ơi Mày Có Người Booking nè!",
    Body : body
	}).then(
	  message => alert("Booking Successfully!")
	);
});

}
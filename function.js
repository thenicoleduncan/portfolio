$(document).ready(function () {

    document.getElementById("submit").addEventListener("click", function (event) {
        event.preventDefault();
        var name = $("#name").val();
        var email = $("#email").val();
        var msg = $("#msg").val();

        console.log(`${msg}
From ${name} at ${email}. `);

        alert("Your messaged was sent to Nicole Duncan.");
        // document.getElementById("#pop-up").innerHTML = "Your messaged was sent to Nicole Duncan.";

    });


});
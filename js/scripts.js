function sendEmail(){
    var templateParams = {
        name :document.getElementById('name').value,
        email :document.getElementById("email").value,
        subject :document.getElementById("subject").value,
        message :document.getElementById("message").value
    }
    emailjs.send("service_wy78w1j","template_sbaabvf",templateParams,"vgD19uXVAbiTsUN68").then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        document.getElementById("thanks").innerHTML = "<h5 class='text-success '> I'will contact you soon, Thanks </h5>"
     }, 
     function(error) {
        console.log('FAILED...', error);
        
        document.getElementById("thanks").innerHTML = "<h5 class='text-danger '> error! please reSupmit </h5>"
     });
}

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
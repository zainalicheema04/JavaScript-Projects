// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

// Contact Me 
function SendToWhatsapp() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let number = document.getElementById("number").value;
  let message = document.getElementById("message").value;

  var url = "http://wa.me/" +number+ "?text="
  +"*Name :*"+name+"%0a"
  +"*Email :*"+email+"%0a"
  +"*Number :*"+number+"%0a"
  +"*message :*"+message+"%0a%0a";

  window.open(url, '_blank').focus();
}

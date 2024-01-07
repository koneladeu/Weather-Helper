var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.button')) {
    var dropdowns = document.getElementsByClassName("header-navigation");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


  
// START SCRIPT HEADER EN MENU HOMEPAGE
document.onscroll = () => {
    if (window.scrollY > 0) {
      document.querySelector('.header,').classList.add('active');
    } else {
      document.querySelector('.header').classList.remove('active');
    }
  };
  document.onload = () => {
    if (window.scrollY > 0) {
      document.querySelector('.header').classList.add('active');
    } else {
      document.querySelector('.header').classList.remove('active');
    }
  };

  const navbar = document.querySelector('.header .navbar');
const menuButton = document.querySelector('.header .menu');
menuButton.addEventListener('click', () => {
  navbar.classList.toggle('show');
  menuButton.classList.toggle('fa-close');
});
document.onscroll = () => {
  navbar.classList.remove('show');
  menuButton.classList.remove('fa-close');
  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};
document.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};
// EIND SCRIPT HEADER EN MENU HOMEPAGE





// START SCRIPT VIDEO HOMEPAGE
var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}
// EIND SCRIPT VIDEO HOMEPAGE
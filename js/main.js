const menu = document.getElementById('menu-label');
const sidebar = document.getElementsByClassName("sidebar")[0];

// saat saya klik munculkan function sidebar dengan tambahkan class hide, isi class hide adalah width: 80px;
menu.addEventListener('click', function() {
    sidebar.classList.toggle('hide');
});
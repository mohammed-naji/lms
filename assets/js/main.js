var menu_btn = document.querySelector('.navbar-toggler');
menu_btn.onclick = e => document.querySelector(menu_btn.dataset.bsTarget).classList.toggle('show');

document.querySelectorAll('li.nav-item.has-dropdown').forEach(function(li) {
    console.log(li);
    li.addEventListener('click', function() {
        this.classList.toggle('active');
    })
})
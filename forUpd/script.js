function toggleMenu() {
    const menuContent = document.querySelector('.menu-content');
    const body = document.body;
    
    menuContent.classList.toggle('active');
    body.classList.toggle('menu-open');
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    const menuContent = document.querySelector('.menu-content');
    const menuBtn = document.querySelector('.menu-btn');
    const body = document.body;
    
    if (!menuBtn.contains(e.target) && !menuContent.contains(e.target)) {
        menuContent.classList.remove('active');
        body.classList.remove('menu-open');
    }
});

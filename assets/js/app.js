const hamburgerEl = document.querySelector('.hamburger');
const mobile_nav_el = document.querySelector('.mobile_nav_link')


hamburgerEl.addEventListener('click', () => {
    hamburgerEl.classList.toggle('active')

    if ( hamburgerEl.classList.contains('active')) {
        mobile_nav_el.classList.add('mobile_nav_link_active');
    }
    else {
        mobile_nav_el.classList.remove('mobile_nav_link_active');
    }
})

const subscribeBtn = document.getElementById('subscribe-btn');

subscribeBtn.addEventListener('click', (e) => {
    e.preventDefault();
})

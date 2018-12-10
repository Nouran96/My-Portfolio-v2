// Typing Animation (Typed.js)
var typed = new Typed('#typed', {
    strings: ["I'm a Front End Developer", "I'm Nouran Samy"],
    typeSpeed: 60,
    fadeOut: true,
    loop: true
});

// WOW.js animate on scroll
new WOW().init();

// Smooth scroll initialization
var scroll = new SmoothScroll('a[href*="#"]');

// Global Variables
var skillsLink = document.getElementById('skills-link'), // skills anchor link in nav bar
    progressBars = document.querySelectorAll('.progress'), // array for all progress bar elements
    scrollTop = 0, // for checking the scrolltop value if anchor link is clicked
    mobileMenu = document.querySelector('.small-menu'),
    mobileMenuLinks = mobileMenu.querySelectorAll('a'),
    mobileMenuIcon = document.querySelector('.menu-icon'),
    closeMenu = document.querySelector('.close');

// Return the scroll to the top of the page on reresh
window.onbeforeunload = function() {
    window.scrollTo(0,0);
};

window.addEventListener('scroll', loadBar);
window.addEventListener('scroll', showFixedNav);

mobileMenuIcon.addEventListener('click', showMobileMenu);

closeMenu.addEventListener('click', closeMobileMenu);

mobileMenuLinks.forEach(function(link) {
    link.addEventListener('click', closeMobileMenu);
});

// On clicking of the close ison, the menu disappears
function closeMobileMenu() {
    mobileMenu.style.left = '-9999px';
}

// On clicking of the hamburger icon, the menu appears
function showMobileMenu() {
    mobileMenu.style.left = '0';
}

// Show fixed menu after header disappears
function showFixedNav() {
    var fixedNav = document.querySelector('.fixed-nav'),
        header = document.querySelector('header');

    // Appear before the end of the header
    if (document.documentElement.scrollTop >= header.clientHeight - 100) {
        fixedNav.classList.remove('hidden');
    }
    else {
        fixedNav.classList.add('hidden');
    }
}

// Load the progress bars function in skills section
function loadBar() {
    var about = document.querySelector('#about');

    // if scrolled into the section or by clicking the link in nav bar
    if (document.documentElement.scrollTop >= about.scrollHeight + 200 || scrollTop === 1332) {
        progressBars.forEach(function (elem) {
            var elemPercent = elem.querySelector('.percent'), // used for getting the width of the meter
                elemMeter = elem.querySelector('.meter'),
                elemWidth = parseInt(elemPercent.textContent), // width of the meter
                i = 1;

            var interval = setInterval(function () {
                if (i === elemWidth) {
                    clearInterval(interval); // stops when the specified width is reached
                } else {
                    elemMeter.style.width = i + '%';
                    i++;
                }
            }, 10);
        });
        window.removeEventListener('scroll', loadBar); // Load the bars just once on every refresh of the page
    }
}
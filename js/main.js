const movieAPIURL = 'ff24098252cedd7693fcac3f88559734';

const global = {
    currentPage: window.location.pathname,
};

// Highlight active link
function highlightActiveLink() {
    const links = document.querySelectorAll('.nav-link');
    links.forEach((link) => {
        if (link.getAttribute('href') === global.currentPage) {
            link.classList.add('active');
        }
    });
}

// Init App
function init() {
    switch (global.currentPage) {
        case '/':
        case '/index.html':
            console.log('Home page');
            break;
        case '/shows.html':
            console.log('Shows page');
            break;
        case '/movie-detail.html':
            console.log('Movie Details page');
            break;
        case '/tv-detail.html':
            console.log('TV Details page');
            break;
        case '/search.html':
            console.log('Search page');
            break;

        default:
            break;
    }
    highlightActiveLink();
}
document.addEventListener('DOMContentLoaded', init);

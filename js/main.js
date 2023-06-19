// Expand and collapse hamburger
let openham = document.querySelector('.openham');
let closeham = document.querySelector('.closeham');
let linkSection = document.querySelector('.link-section');

function hamburger (link, open, close) {
    linkSection.style.display = link;
    openham.style.display = open;
    closeham.style.display = close;
}

openham.addEventListener('click', () => hamburger('flex', 'none', 'block'))
closeham.addEventListener('click', () => hamburger('none', 'block', 'none'))

// Exapnd and collapse links
let expandQuiz = document.querySelector('.expand-quiz');
let collapseQuiz = document.querySelector('.collapse-quiz');
let expandShop = document.querySelector('.expand-shop');
let collapseShop = document.querySelector('.collapse-shop');
let expandBlog = document.querySelector('.expand-blog');
let collapseBlog = document.querySelector('.collapse-blog');
let arrowRightQuiz = document.querySelector('.arrow-right-quiz');
let arrowLeftQuiz = document.querySelector('.arrow-left-quiz');
let arrowRightShop = document.querySelector('.arrow-right-shop');
let arrowLeftShop = document.querySelector('.arrow-left-shop');
let arrowRightBlog = document.querySelector('.arrow-right-blog');
let arrowLeftBlog = document.querySelector('.arrow-left-blog');
let quizLinks = document.querySelector('.quiz-links');
let shopLinks = document.querySelector('.shop-links');
let blogLinks = document.querySelector('.blog-links');

function quizLinkClick (link, expand, collapse) {
    quizLinks.style.display = link;
    expandQuiz.style.display = expand;
    collapseQuiz.style.display = collapse;
}
expandQuiz.addEventListener('click', () => quizLinkClick ('flex', 'none', 'block'))

collapseQuiz.addEventListener('click', () => quizLinkClick ('none', 'block', 'none'))

function shopLinkClick (link, expand, collapse) {
    shopLinks.style.display = link;
    expandShop.style.display = expand;
    collapseShop.style.display = collapse;
}

expandShop.addEventListener('click', () => shopLinkClick ('flex', 'none', 'block'))

collapseShop.addEventListener('click', () => shopLinkClick ('none', 'block', 'none'))

function blogLinkClick (link, expand, collapse) {
    blogLinks.style.display = link;
    expandBlog.style.display = expand;
    collapseBlog.style.display = collapse;
}

expandBlog.addEventListener('click', () => blogLinkClick ('flex', 'none', 'block'))

collapseBlog.addEventListener('click', () => blogLinkClick ('none', 'block', 'none'))

if (window.matchMedia("(max-width: 990px)").matches) {
    expandQuiz.style.display = 'none';
    collapseQuiz.style.display = 'none';
    expandBlog.style.display = 'none';
    collapseBlog.style.display = 'none';
    expandShop.style.display = 'none';
    collapseShop.style.display = 'none';
}


    function arrowClickQuiz (link, expand, collapse, links) {
        quizLinks.style.display = link;
        arrowRightQuiz.style.display = expand;
        arrowLeftQuiz.style.display = collapse;
        linkSection.style.display = links;
    }

    arrowRightQuiz.addEventListener('click', () => arrowClickQuiz ('block', 'none', 'block'))

    arrowLeftQuiz.addEventListener('click', () => arrowClickQuiz ('none', 'block', 'none', 'block'))

    function arrowClickShop (link, expand, collapse, links) {
        shopLinks.style.display = link;
        arrowRightShop.style.display = expand;
        arrowLeftShop.style.display = collapse;
        linkSection.style.display = links;
    }

    arrowRightShop.addEventListener('click', () => arrowClickShop ('block', 'none', 'block'))

    arrowLeftShop.addEventListener('click', () => arrowClickShop ('none', 'block', 'none', 'block'))


    function arrowClickBlog (link, expand, collapse, links) {
        blogLinks.style.display = link;
        arrowRightBlog.style.display = expand;
        arrowLeftBlog.style.display = collapse;
        linkSection.style.display = links;
    }

    arrowRightBlog.addEventListener('click', () => arrowClickBlog ('block', 'none', 'block'))

    arrowLeftBlog.addEventListener('click', () => arrowClickBlog ('none', 'block', 'none', 'block'))
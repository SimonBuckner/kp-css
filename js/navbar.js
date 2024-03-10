const navPages = [
    ['index', 'Home', 'home'],
    ['pages/hero-text', 'Hero Text', 'hero-text'],
    ['pages/flex-columns', 'Flex Columns', 'flex-columns'],
    ['pages/hero-image', 'Hero Image', 'hero-image'],
];


class Navbar extends HTMLElement {
    constructor() {
        super();
    }
    
    connectedCallback() {

        let links = [];
        navPages.forEach((item) => {
            let link = `<li><a href="\\${item[0]}.html" id="navbar__${item[2]}">${item[1]}</a></li>`;
            links.push(link);
        });

        let content = '<ul>\n';
        
        content = content.concat(links.join('\n'));
        content = content.concat('</ul>', '\n');
        
        this.innerHTML = content;
    }
}

customElements.define('nav-bar', Navbar);

function setActivePage(pageName) {
    
    let item = document.getElementById('navbar__' + pageName);
    if (item != null) {
        item.setAttribute('class', 'navbar__item--active');
    }
}

window.setActivePage = setActivePage;

export { setActivePage };
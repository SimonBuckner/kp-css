
const prefix = '/kp-css';

const navPages = [
    ['/index', 'Home', 'home'],
    ['/pages/hero-text', 'Hero Text', 'hero-text'],
    ['/pages/flex-columns', 'Flex Columns', 'flex-columns'],
    ['/pages/hero-image', 'Hero Image', 'hero-image'],
];


class Navbar extends HTMLElement {
    constructor() {
        super();
    }
    
    connectedCallback() {
        
        let content = '<nav class="nav"><ul>\n';
        let links = [];
        navPages.forEach((item) => {
            let link = `<li id="nav__${item[2]}"><a href="${prefix}${item[0]}.html">${item[1]}</a></li>`;
            links.push(link);
        });

        
        content = content.concat(links.join('\n'));
        content = content.concat('</navbar></ul>', '\n');
        
        this.innerHTML = content;
    }
}

customElements.define('nav-bar', Navbar);

function setActivePage(pageName) {
    
    let item = document.getElementById('nav__' + pageName);
    if (item != null) {
        item.setAttribute('class', 'nav__item--active');
    }
}

window.setActivePage = setActivePage;

export { setActivePage };
const navPages = [
    ["pages/hero-text", "Hero Text", "hero-text"],
    ["pages/flex-columns", "Flex Columns", "flex-columns"],
    ["pages/hero-image", "Hero Image", "hero-image"],
];



function loadNavbar(pageName) {
    console.log("load nav bar");
    let content = `<ul>\n`;
    navPages.forEach((item) => {
        let activeClass = "";
        if (pageName === item[2]) {
            activeClass = "class=\"navbar__item--active\"";
        }
        let link = `<li><a href=\"${item[0]}.html\" ${activeClass}>${item[1]}</a></li>\n`;
        content = content + link;
    });
    content = content + `</ul>\n`;
    
    class Navbar extends HTMLElement {
        constructor() {
            super();
        }
        
        connectedCallback() {
            this.innerHTML = content;
            console.log("nav-bar connected");
        }
    }
    
    customElements.define('nav-bar', Navbar);
    
}


export { loadNavbar, navPages };
window.loadNavbar = loadNavbar;
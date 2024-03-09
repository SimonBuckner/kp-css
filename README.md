kp-css
======

Consolidating my learning from Kevin Powell's excellent 
[Conquering Responsive Layouts course](https://courses.kevinpowell.co/conquering-responsive-layouts)

You can see the results [here](https://simonbuckner.github.io/kp-css/).

My aim is to avoid using the following.

- Pre-processors (other than ones I write myself)
- Transpilers
- JavaScript frameworks
- Node and NPM and other JS ecosystems


Shout-Outs
----------

Before getting into the content of the site, here are some shout-outs to people
and tools that help me out.

  - [Kevin Powell](https://www.youtube.com/@KevinPowell) for his excellent YouTube channel
  - [The Primeagen](https://www.youtube.com/c/theprimeagen) for his excellent YouTube channel
  - [Prism](https://prismjs.com/) for their syntax highlighter
  - [Lambdatest](https://www.lambdatest.com/free-online-tools/html-escape) for the HTML escape tool
  - [LogRocket](https://blog.logrocket.com/building-color-palette-css/) for the color system
  - [freeCodeCamp](https://www.freecodecamp.org/news/reusable-html-components-how-to-reuse-a-header-and-footer-on-a-website/) HTML Components

### TODO
Track down the favicon generator I used.


Layout of the site
------------------

### [Hero Section - Text](https://simonbuckner.github.io/kp-css/)

The Hero section is a large attention grabbing section of a website used on the
landing page. This allows the visitor to understand what your site is about.

The hero section introduces some key concepts that are built upon later on. This demonstrates the relation between a vertical section of a page, a container
for the content in that section and then the content itself. In this context,
these elements are used for the following purposes.

- Section
    - Covers the width of the visible page
        - An exception here would be with a side nav or a sidebar
    - Allows control of the background across that full width
    - Allows vertical spacing through padding
- Content Container
    - Position the content within the section
        - E.g., Limit the maximum width and centre horizontally
    - Control the arrangement of child content
        - E.g., Enable flexbox or flexgrid on the child items


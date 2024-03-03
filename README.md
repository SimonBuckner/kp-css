kp-css
======

Consolidating my learning from Kevin Powell's excellent 
(Conquering Responsive Layouts course|https://courses.kevinpowell.co/conquering-responsive-layouts)

Shout Outs
----------

Before getting into the content of the site, here are some shout-outs to people
and tools that help me out.

  - [Kevin Powell](https://www.youtube.com/@KevinPowell) for his excellent YouTube channel
  - [The Primeagen](https://www.youtube.com/c/theprimeagen) for his excellent YouTube channel
  - [Prism](https://prismjs.com/) for their syntax highlighter
  - [Lambdatest](https://www.lambdatest.com/free-online-tools/html-escape) for the HTML escape tool

Layout of the site
------------------

### Hero Text

This demonstrates the relation between a vertical section of a page, a container
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


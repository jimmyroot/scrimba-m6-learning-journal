# Scrimba FrontEnd Dev Path — Module 6 Solo Project — Learning Journal

This is my take on the Learning Journal project from Module 6 of Scrimba's FrontEnd Dev course. The assignment was to build a responsive blog with mobile, medium and large size layouts.

I got quite fascinated with the idea of building this out as a modern single page app, so ended up doing a lot of googling and extra research into different areas to achieve this end. 

## What I learned
- How simple it can be to create a flowy grid layout using CSS grid - less is more. I made it way too complicated the first time around and realised I needed far less code to achieve what I wanted with grid, I ended up taking most of it out.
- Grid and flex can be mixed to keep things simple where it needs to be
- How to use mediamatch queries in Javascript — so cool
- Built a custom 'router' and so was introduced to a lot of new JS, nothing to do with module 6 but was having fun so I went with the flow. Lots of new stuff mainly in terms of interacting with the 'window'. Things like popstate, history, location in javascript were all implemented by the end of it
- I made heavy use of modular javascript, modular CSS, and nested CSS in this project
- Found my first legit use for a `do while` loop too! Yay.

## Notes for reviewer
- Most of the stuff that's relevant to M6 is located in the css modules for each respective page. Rather than one big CSS file with all the media queries, everything is broken down into small self contained modules that contain the queries for that particular page/element. I thought I would quickly pop a note here showing where it is, as I don't want to be the cause of your wasted time because I've spread everything out :(
- e.g., `pages/home.module.css` contains the css and media queries for elements unique to the homepage like the featured post
- `pages/post.module.css` contains all css related to showing both an individual post (if a post link was clicked) and also for when several posts are displayed in a grid (e.g. all of the places where 'recent posts' are displayed on screen)
- `pages/mywork.module.css` contains all css for the 'my work' page
- `layout/header.module.css` contains the css for the header
- and so on and so forth - you get the idea! 
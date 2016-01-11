## Udacity P4: Website Performance Optimization Portfolio

### Project overview

This project consists of two main parts. First challenge was to optimize the index.html so that both mobile and desktop pagespeed measurements were higher than 90%. The second task was to improve the web performance of Cam's pizzeria page.

### Getting started

####Part 1: Optimize PageSpeed Insights score for index.html

I followed these instructions to get started:

1. Run a local server.

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

2. Download and install [ngrok](https://ngrok.com/) to access your local server remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok http 8080
  ```

####Part 2: Optimize Frames per Second in pizza.html

The aim of optimizing views/pizza.html is to achieve frames per second rate 60 fps or higher by modifying views/js/main.js. Chrome developer tools came handy in measuring the fps rate.


### Measured results

#### By PageSpeed Insights for Mobile portfolio page (index.html):
* 94% speed on mobile
* 95% speed on desktop
* 100% mobile user experience

#### By Chrome Developer Tools for Cam's Pizzeria (views/pizza.html & views/js/main.js)
* scrolling at 60 fps
* time to resize pizza less than 5ms

### Executed optimizations
#### Mobile portfolio page
* Inlined CSS
* Used Web Front Loader asynchronously
* Asynced JS
* Compressed images with Grunt Imagemin
* Resized images with Grunt responsive-images
* Added srcset to images
* Minified JS files with Grunt uglify

#### Cam's Pizzeria
* Udacity Forum and Fend office hours webcasts provided a great starting point for removing jank caused by forced synchronous layout in 'changePizzaSizes' and 'updatePositions' functions. Thanks also to [karoldavid](https://github.com/karoldavid/website-optimization.git) for excellent explanations of how and why certain optimizations were done. I followed his excellent idea in introducing an array for pizzas and counting the number of pizzas needed by page width. I kept the numer of pizzas in 200 though.
* Moved variables and accessed the DOM outside of For loops to decrease scripting time.
* Used 'document.getElementsByClassName()' instead of 'document.querySelectorAll()' in order to decrease layout time.
* As suggested in the Udacity FEND discussion forum, I experimented with 'transform: translateX()' which did not improve the performance greatly. I also added 'backface-visibility: hidden;' to the mover class in 'views/css/style.css'.
* Compressed pizza.png and pizzeria.jpg images with Grunt imagemin and resized them with Grunt responsive-images.
* Added alt and srcset to the images.
* Minified JS files with Grunt uglify.


### Valuable links
* [Web Font Loader](https://github.com/typekit/webfontloader.git)
* [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)
* [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks)
* [More on integrating ngrok, Grunt and PageSpeed](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api")
* [Front-End Web Developer Office Hours Support Documents](https://github.com/udacity/fend-office-hours.git)



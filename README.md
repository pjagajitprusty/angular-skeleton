# angular-skeleton
It automates the Front-end build generation using Gulp for different environments. One can clone this repo and get started with developing a full-fledged Angular Application without worrying about initial setup. See [Demo](https://pjagajitprusty.github.io/angular-skeleton/). </br>

## Features
* Fully automated using [**Gulp**](http://gulpjs.com/) to generate build dynamically.
* Applied watch on all HTML, SASS & JS Files so that it automatically reloads browser on file change making the development easier.
* Added best practices boilerplates for SPA (single page app), routing, home page (Header, Footer, Body styling )
* Added SASS & JS precompilers.
* Added common SASS mixins (Image Grid, clearfix) with example. So that one can get started with SASS for powerful styling.

## Getting started

Client side dependencies (e.g. AngularJS, Angular Bootstrap etc) are maintained with [**Bower**](https://bower.io/). Development dependencies (e.g. Gulp, Babel, SASS etc) are maintained with [**Npm**](https://www.npmjs.com/).

### Local Server (Development Environment)

To start Local Server, run following command.
```
npm start

The above command will start local server at => http://localhost:9999/

It will run following 3 commands

npm install (Install Dev dependencies) &&
bower install (Install Client dependencies) &&
gulp (create front-end build & start server)

```
Developers will work on **src** Directory and gulp will create a **docs** (You can change this Directory in config.js file destLocation variable) Directory. **docs** directory will be mapped to server.

### Notes:
* Don't change any file in **docs** directory as it's dynamically created from gulp.
* Any changes made to files in src will reload the local server automatically.
* Don't add any JS/CSS file as dependency in index.html page for best practices. Add same to "config.js" File. Kindly refer Adding Resources section.

### Create Front-End Build (Production Environment)

To create build to deploy in production env, run following command.

 ```
 npm run build

 It will create a minimized build (HTML/JS/CSS Minimized) in docs directory for production environment. Which will be used for deployment.

 N.B.: It won't start server for production environment.
 ```

### Adding Resources:
 * For adding a new JS library, follow below commands
  * bower install --save < lib name > (It'll update bower.json file)
  * Add the same file path to "jsLibSources" of "config.js" File
  * Restart Server

* No need to update "config.js" for custom JS/CSS/Image files If it stored inside the corresponding directory. Just restart the server.

* If any library is not present in bower then download the same and put inside src/libs directory. Add the same path to
   "jsLibSources" of "config.js" File.

## TODO:
- [x] Styling using SASS.
- [x] Babel preprocessing (To convert ES6 => ES5 for cross browser compatibility).
- [ ] Cache busting for JS/CSS Files.
- [x] Boilerplates for common styling and page layouts.
- [ ] Minify Resources for production environment.

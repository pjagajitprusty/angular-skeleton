# angular-skeleton
This is a fully automated front-end build to create a full scale Angular Application. See [Demo](https://pjagajitprusty.github.io/angular-skeleton/). </br>

Client side dependencies (AngularJS, Angular Bootstrap etc) are maintained with [**Bower**](https://bower.io/). Development dependencies (Gulp, SASS etc) are maintained with [**Npm**](https://www.npmjs.com/).

## Features
* Fully automated using [**Gulp**](http://gulpjs.com/) to generate build dynamically.
* Applied watch on all HTML, SASS & JS Files so that it automatically reloads browser on file change.
* Added best practices broiler plates for SPA (single page app), routing, home page (Header, Footer, Body styling )
* Added styles through SASS thus making configuration very easy.
* Added common SASS mixins (Image Grid, clearfix) with example. So that one can get started with SASS for powerful styling.

## Getting started

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

 N.B., It won't start server for production environment.
 ```

### Adding Resources:
 * For adding a new JS library, follow below commands
  * bower install --save <lib name> (It'll update bower.json file)
  * Add the same file path to "jsLibSources" of "config.js" File
  * Restart Server

* No need to update "config.js" for custom JS/CSS/Image files If it stored inside the corresponding directory. Just restart the server.

* If any library is not present in bower then download the same and put inside src/libs directory. Add the same path to
   "jsLibSources" of "config.js" File.

## TODO:
- [x] Styling using SASS
- [ ] Common styling, HTML layouting
- [ ] Minify Resources for production environment.

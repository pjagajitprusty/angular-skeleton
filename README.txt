To Run App Locally run => npm start
It will run following command
npm install && (Install dev dependency packages)
bower install && (Install client dependency packages)
gulp (Runs the app local http://localhost:9999/)

To Create build for Deployment => npm run build

Developers will work on "src" Directory and gulp will create a "deploy" Directory which will be mapped to server.

===========================================================================================================================

Notes:

1: Don't change any file in deploy directory as it's dynamically created from gulp.
2: Any changes made to files in src will reload the local server automatically.
3: Don't add any JS/CSS file as dependency in index.html page. Add same to "config.js" File. Kindly refer Adding Resources section.


===========================================================================================================================


Adding Resources:

1: For adding a new JS library, follow below commands
  1: bower install --save <lib name> (It'll update bower.json file)
  2: Add the same file path to "jsLibSources" of "config.js" File
  3: Restart Server

2: No need to update "config.js" for custom JS/CSS/Image files If it stored inside the corresponding directory. Just restart the server.

3: If any library is not present in bower then download the same and put inside src/libs directory. Add the same path to
   "jsLibSources" of "config.js" File.


===========================================================================================================================

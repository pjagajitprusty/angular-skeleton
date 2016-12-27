var gulpConfig = {
  destLocation : './docs/',
  jsLibSources : [
    'bower_components/angular/angular.min.js',
    'bower_components/angular-animate/angular-animate.min.js',
    'bower_components/angular-bootstrap/ui-bootstrap.min.js',
    'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
    'bower_components/angular-route/angular-route.min.js',
  ],
  jsCustomSources : [
    'src/js/*.js',
    'src/js/**/*.js'
  ],
  imageSources : [
    './src/images/*.*'
  ],
  sassSources : [
    'src/sass/style.scss'
  ],
  allSassSources : [
    'src/sass/**/*'
  ],
  cssLibSources : [
    'bower_components/bootstrap/dist/css/bootstrap.min.css',
  ],
  fontsSources : [
    'bower_components/bootstrap/dist/fonts/*.*',
  ],
  cssCustomSources : [
    'src/css/*.css'
  ],
  indexPage : [
    'src/index.html'
  ],
  templateSources : [
    'src/templates/*.html'
  ]
};

module.exports.gulpConfig = gulpConfig;

var gulp         = require('gulp'),
	sass         = require('gulp-sass'),
	plumber 	 = require("gulp-plumber"),
	concat       = require('gulp-concat'),
	uglify       = require('gulp-uglifyjs'),
	cssnano      = require('gulp-cssnano'),
	rename       = require('gulp-rename'),
	del          = require('del'),
	imagemin     = require('gulp-imagemin'),
	pngquant     = require('imagemin-pngquant'),
	cache        = require('gulp-cache'),
	autoprefixer = require('gulp-autoprefixer'),
	server       = require('browser-sync').create();

//____________________watch
gulp.task('default', ['watch']);

gulp.task('watch', function() {
	server.init({
	    server: 'develop',
	    notify: false,
	    open: true,
	    cors: true,
	    ui: false
	});

	gulp.watch('develop/sass/**/*.scss', ['sass']);
	gulp.watch('develop/*.html', server.reload);
	gulp.watch('develop/js/**/*.js', server.reload);
});

gulp.task('sass', function(){ 
	gulp.src([
		'develop/sass/style.scss',
		'develop/sass-libs/libs.scss'])
		.pipe(plumber()) // Игнор возможных ошибок
		.pipe(sass())
		.pipe(autoprefixer(['last 15 versions', '> 1%'], { cascade: true }))
		.pipe(gulp.dest('develop/css'))
		.pipe(cssnano()) // Сжимаем CSS
		.pipe(rename({suffix: '.min'})) 
		.pipe(gulp.dest('develop/css'))
		.pipe(server.stream()); // Обновляем CSS на странице при изменении
});

gulp.task('scripts', ['js-libs'], function() {
	return gulp.src('develop/js/index.js')
	.pipe(uglify()) // Сжимаем JS
	.pipe(rename({suffix: '.min'})) 
	.pipe(gulp.dest('develop/js'));
	//.pipe(server.stream());
});

gulp.task('js-libs', function() {
	return gulp.src([
		'develop/js-libs/jquery/jquery.min.js',
		'develop/js-libs/slick/slick.min.js',
		'develop/js-libs/WOW/wow.min.js',
		'develop/js-libs/fontawesome-all.min.js'])
		.pipe(concat('libs.min.js')) // Собираем библиотеки в кучу в новом файле libs.min.js
		.pipe(uglify()) // Сжимаем JS
		.pipe(gulp.dest('develop/js')); 
});


//____________________build
gulp.task('build', ['clean', 'img', 'sass', 'scripts'], function() {

	var buildCss = gulp.src('develop/css/**/*.css')
	.pipe(gulp.dest('production/css'))

	var buildFonts = gulp.src('develop/fonts/**/*')
	.pipe(gulp.dest('production/fonts'))

	var buildJs = gulp.src('develop/js/**/*')
	.pipe(gulp.dest('production/js'))

	var buildHtml = gulp.src('develop/*.html')
	.pipe(gulp.dest('production'));

});

gulp.task('clean', function() {
	return del('production'); // Удаляем папку production перед сборкой
});

gulp.task('img', function() {
	return gulp.src('develop/img/**/*') 
		.pipe(imagemin({ // Сжимаем изображения без кеширования
			interlaced: true,
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest('production/img')); 
});
gulp.task('clear', function (callback) {
	return cache.clearAll();
})



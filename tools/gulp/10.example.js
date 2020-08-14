// 引入核心库
const gulp = require('gulp');
// 引入压缩库
const uglify = require('gulp-uglify'); // 压缩 js
const cssmin = require('gulp-cssmin'); // 压缩 css
const imagemin = require('gulp-imagemin'); // 压缩 image
// 引入合并文件的库
const concat = require('gulp-concat');
// 引入重命名文件的库
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
// livereload
const livereload = require('gulp-livereload');
const less = require('gulp-less');

const scriptFiles = ['./src/script/**/*.js'];
const styleFiles = ['./src/assert/**/*.css'];
const lessFiles = ['./src/assert/**/*.less'];
const imageFiles = ['./src/image/**/*'];
const htmlFiles = ['./index.html'];

// 处理 js
gulp.task('script', () => { 
	return gulp.src(scriptFiles) 
		.pipe(sourcemaps.init())
		.pipe(babel({
			presets: ['@babel/env']
		}))
		//.pipe(concat('bundle.min.js'))
		.pipe(uglify())
		.pipe(rename({suffix: '.min'}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./build/js/'))
		//.pipe(livereload());
});

// 处理 css
gulp.task('style_css', () => {
	return gulp.src(styleFiles)
		.pipe(concat('style.min.css'))
		.pipe(cssmin())
		.pipe(gulp.dest('./build/css/'))
		//.pipe(livereload());
});
// less
gulp.task('style_less', () => {
	return gulp.src(lessFiles)
	.pipe(sourcemaps.init())
	.pipe(concat('style.min.css'))
	.pipe(less())
	.pipe(cssmin())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('./build/css/'))
});

// 处理 image, gif jpg png svg
gulp.task('image', () => {
	return gulp.src(imageFiles)
		.pipe(imagemin([   // 提供压缩功能和渐进式加载
			imagemin.gifsicle({interlaced: true}),
			imagemin.jpegtran({propressive: true}),
			imagemin.optipng({optimizationLevel: 5}),
			imagemin.svgo({
        plugins: [
            {removeViewBox: true},
            {cleanupIDs: false}
        ]
			})
		]))
		.pipe(gulp.dest('./build/imges/'))
		//.pipe(livereload());
});

gulp.task('watch', () => {
	livereload.listen();
	let watcher = gulp.watch([...scriptFiles, ...styleFiles, ...lessFiles, ...imageFiles, ...htmlFiles], gulp.series('script', 'style_css', 'style_less', 'image'));
	// reload，所以前面任务中的 livereload 可以省略
	watcher.on('change', (path, stats) => {
		console.log(`file ${path} has changed ${stats}`);
		gulp.src([path])
		.pipe(livereload());
	})

});

// 声明默认任务，任务名只能是 default
gulp.task('default', gulp.series('script', 'style_css', 'style_less', 'image', 'watch'));


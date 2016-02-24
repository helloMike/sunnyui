/**
 * Created by Administrator on 2016/2/24.
 */
//请求相应的插件
var gulp = require('gulp'),                  	//基础库
    minifycss = require('gulp-minify-css'),		//css压缩
 	//rename = require('gulp-rename'),			//重命名
 	imagemin = require('gulp-imagemin'),		//图片压缩
	jshint = require('gulp-jshint'),			//js检查
	uglify = require('gulp-uglify'),			//js压缩
	clean = require('gulp-clean');				//清楚文件clean
 
//定义任务
//压缩css任务
    gulp.task('css',function(){
        var cssSrc = ['./src/css/**/*.css']
            cssDst = './dist/css';

        gulp.src(cssSrc)
            .pipe(minifycss())
            .pipe(gulp.dest(cssDst));
})

//图片压缩
gulp.task('image',function(){
	var imageSrc = './src/img/**/*',
		imageDst = './dist/img';

		gulp.src(imageSrc)
			.pipe(imagemin())
			.pipe(gulp.dest(imageDst));
})

//js压缩
gulp.task('js',function(){
	var jsSrc = ['./src/js/*.js','!./src/js/*.min.js'],
		jsDst = './dist/js';

		gulp.src(jsSrc)
			.pipe(jshint())
			.pipe(jshint.reporter('default'))
			.pipe(uglify())
			.pipe(gulp.dest(jsDst))
})

//清空之前生成的css html js image 
gulp.task('clean',function(){
	gulp.src(['./dist/js','./dist/css/','./dis/img'],{read:false})
		.pipe(clean());
})

//监听任务
gulp.task('watch',function(){
	gulp.watch('./src/css/*.css',function(){
		gulp.run('css');
	})
	gulp.watch('./src/js/*.js',function(){
		gulp.run('js');
	})
	gulp.watch('./src/img/**/*',function(){
		gulp.run('image');
	})
})
//执行任务

gulp.task('default',['clean'],function(){
		gulp.run(['css','image','js']);
});

// gulp.task('default',['css','image','js']);
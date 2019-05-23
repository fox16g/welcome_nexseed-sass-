// 拾ってくる

// sass打った時にscssの拡張子をcssに吐き出す
// sass:watchiさせれば変更のタイミングで翻訳してくれる

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {//タスクの登録
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({outputStyle: 'expanded'}))//cssに出力したときのフォーマット 4種類ある
    .pipe(gulp.dest('./css'));
});

// コンパイル先をここで指定している(sassというフォルダ内しかコンパイルしない)
gulp.task('sass:watch', function() {
  gulp.watch('./sass/**/*.scss', gulp.task('sass'));
});
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var flash = require('connect-flash');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// app.use를 사용하는 코드들은 express에서 사용하는 미들웨어를 연결하는 부분.
// 요청과 응답의 중간에 위치해 미들웨어라고 함.


// sample middleware
app.use((req, res, next) => {
  console.log(req.url, 'it`s a middleware');
  next();   // next()를 실행하지 않으면 다음 미들웨어로 넘어가지 않음
})

// dev / short / common / combined 등의 인자를 줄 수 있음
// 개발시 dev / short 배포시 common / combined
// 보통은 winston 모듈을 더 많이 사용함.
app.use(logger('dev'));
// region body-parser 부분. express에 내장되어있음.
// 해석 방식에 따라 body-parser를 설치하고 추가 작업이 필요할 수 있음.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// endregion
// region static 미들웨어
// 정적 파일 제공. 자체적으로 정적 파일 라우터 기능을 수행하므로 위에다 두는게 좋음.
app.use(express.static(path.join(__dirname, 'public')));
// endregion

// region cookie-parser 부분.
// 해석된 쿠키는 req.cookies 객체에 들어감.
app.use(cookieParser('secret code'));
// endregion
// region express-session
// 세션 관리용 미들웨어. express-generator에서 함께 설치가 되지 않으므로 따로 설치해야 함.
// req.session 객체를 만들어 데이터 관리.
app.use(session({
  resave: false,                        // 세션에 수정사항이 생기지 않더라도 재 저장
  saveUninitialized: false,             // 세션에 저장할 내역이 없더라도 저장. 보통 방문자 추적
  secret: 'secret code',                // cookie-parser의 비밀키와 같은 역할. 같이 해줘야 함.
  cookie: {                             // 세션쿠키
    httpOnly: true,
    secure: false
  }
}));
// endregion

app.use(flash());
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
// 404 처리 미들웨어
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

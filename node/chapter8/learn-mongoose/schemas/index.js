const mongoose = require('mongoose');

module.exports = () => {
  const connect = () => {
    if (process.env.NODE_ENV !== 'production') {
      mongoose.set('debug', true);
    }

    mongoose.connect('mongodb://root:3xcnafagHenoti%40@localhost:27017/admin', {
      dbName: 'nodejs'
    }, (err) => {
      if (err) {
        console.log('몽고디비 연결 에러', err);
      } else {
        console.log('커넥션 성공');
      }
    });
  };

  connect();

  mongoose.connection.on('error', (error) => {
    console.error('몽고디비 연결 에러 ', error);
  })

  mongoose.connection.on('disconnected', () => {
    console.error('연결 끊김 재연결중');
  })

  require('./user')
  require('./comment')
}

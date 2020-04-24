const fs = require('fs');

fs.writeFile('./write.txt', '글 입력', (err) => {
  if (err) throw err;

  fs.readFile('./write.txt', (err2, data) => {
    console.log(data.toString());
  })
})

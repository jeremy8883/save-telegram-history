const fs = require('fs');

const writeJsonToStorage = (obj, dest) => new Promise((resolve, reject) => {
  fs.writeFile(dest, JSON.stringify(obj, null, 2), (err) => {
    if (err) {
      reject(err);
    } else {
      accept();
    }
  });
});

module.exports = writeJsonToStorage;

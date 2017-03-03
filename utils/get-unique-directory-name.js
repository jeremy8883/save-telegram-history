const path = require('path');

// Promise wrapped path.exists
const pathExists = (location) =>
  new Promise((resolve, reject) => {
    path.exists(location, function(exists) {
      resolve(exists);
    });
  });

async const getUniqueDirectoryName = (location, counter = 0) => {
  const newLocation = counter ? `${location} (${counter})` : location;
  if (await pathExists(newLocation)) {
    return await getUniqueDirectoryName(location, counter + 1);
  } else {
    return newLocation;
  }
};

module.exports = getUniqueDirectoryName;
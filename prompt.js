/**
 * Wrapper for the `prompt` library
 */

const prompt = require('prompt');

// Promise wrapper for prompt.get
const promptGet = (props) =>
  new Promise((resolve, reject) => {
    prompt.get(props, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });

module.exports = {
  get: promptGet,
  start: prompt.start,
};
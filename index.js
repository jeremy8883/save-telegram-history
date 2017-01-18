const prompt = require('prompt');
const R = require('ramda');
const telegramApi = require('./telegram-api');
const saveMessages = require('./save-messages');

prompt.start();

// Promise wrapper for prompt.get
const promptGet = (props) =>
  new Promise((resolve, reject) => {
    prompt.get(props, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });

R.pipeP(
  () => promptGet(['phoneNumber']),
  telegramApi.sendCode,
  () => promptGet(['code']),
  telegramApi.signIn,
  telegramApi.fetchContacts,
  R.map(telegramApi.fetchMessagesForContact),
  saveMessages
)();

const prompt = require('./prompt');
const R = require('ramda');
const telegramApi = require('./telegram-api');
const saveMessages = require('./save-messages');

prompt.start();

R.pipeP(
  () => prompt.get(['phoneNumber']),
  telegramApi.sendCode,
  () => prompt.get(['code']),
  telegramApi.signIn,
  telegramApi.fetchContacts,
  R.map(telegramApi.fetchMessagesForContact),
  saveMessages
)();

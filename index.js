const prompt = require('./prompt');
const R = require('ramda');
const telegramApi = require('./telegram-api');

prompt.init();
const telegram = telegramApi.init();

R.pipeP(
  () => prompt.get(['phoneNumber']),
  telegram.requestAuthCode,
  () => prompt.get(['phoneCode']),
  telegram.signIn
)();

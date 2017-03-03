const config = require('./.private/config.json');
const { Telegram, network } = require('telegram-mtproto');
const fileSchema = require('./schema/mtproto-57.json'); // ???

/**
 * Example usage:
 *   const telegram = telegramApi.init();
 *   telegram.requestAuthCode({ phoneNumber: * user's phone number * })
 *     .then( * request auth code from user * )
 *     .then(({ phoneCode }) => telegram.signIn({ phoneCode }))
 *     .then( * make any call that you would like * )
 */
const init = () => {
  const telegram = new Telegram(fileSchema);
  telegram.addPublicKey(key); // ???

  const connection = new network.http(server);
  const client = telegram.createClient();

  client.setConnection(connection);

  let _phoneNumber;
  let _phoneCodeHash;

  const requestAuthCode = ({ phoneNumber }) => {
    _phoneNumber = phoneNumber;
    return client.callApi('auth.sendCode', {
      phone_number: phoneNumber,
      current_number: false,
      api_id: config.api.id,
      api_hash: config.api.hash
    }).then(({ phone_code_hash }) => {
      _phoneCodeHash = phone_code_hash;
    });
  };

  const signIn = ({ phoneCode }) => {
    return client.callApi('auth.signIn', {
      phone_number: _phoneNumber,
      phone_code_hash: _phoneCodeHash,
      phone_code: phoneCode
    });
  };

  return {
    requestAuthCode,
    signIn,
  }
};

module.exports = {
  init,
};

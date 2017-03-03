const path = require('path');
const getUniqueDirectoryName = require('./utils/get-unique-directory-name');

const getRootPathName = () => {
  const now = new Date();
  return [
    'telegram-history - ',
    [now.getUTCFullYear(), now.getUTCMonth() + 1, now.getUTCDate()].join('-'),
    [now.getUTCHours(), now.getUTCMinutes() + 1, now.getUTCSeconds()].join('.'),
  ].join(' ');
};

async const getRootPath = () => {
  const rootName = getRootPathName();
  return await getUniqueDirectoryName(`./${rootName}`);
};

// TODO
const getContactPathName = (contact) => {
  return `${contact.id}-${contact.name}`;
};

const getConversationFileName = () => 'conversation.json';

const getMediaPathName = () => 'media';

module.exports = {
  getRootPath,
  getContactPathName,
  getConversationFileName,
};

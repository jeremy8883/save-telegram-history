const path = require('path');

const writeJsonToStorage = require('./utils/write-json-to-storage');
const downloadToStorage = require('./utils/download-to-storage');
const {
  getConversationFileName,
  getMediaPathName,
} = require('./file-locations');

async const saveMedia = (destPath, { contact, messages }) => {
  await downloadToStorage(contact.profileUrl, destPath);
  messages.forEach((message) => {
    if (message.imageUrl) {
      await downloadToStorage(message.imageUrl, destPath);
    }
  });
};

// TODO claen this up
async const saveConversation = (rootPath, conversation) => {
  const conversationPath = path.join(rootPath, getConversationPath());

  const conversationFileName = path.join(conversationPath, getConversationFileName());
  await writeJsonToStorage(conversationPath, conversation);

  const mediaPath = path.join(conversationPath, getMediaPathName());
  await saveMedia(mediaPath, conversation);
};

module.exports = saveConversation;

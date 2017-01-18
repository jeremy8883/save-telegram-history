const sendCode = ({ phoneNumber }) => {
  console.log('code sent');
};

const signIn = ({ code }) => {
  console.log(`signed in with code ${code}`);
};

const fetchContacts = () => {
  return [];
};

const fetchMessagesForContact = () => {
  return [];
};

module.exports = {
  sendCode,
  signIn,
  fetchContacts,
  fetchMessagesForContact,
};

const fetchContacts = async () => {
  const response = await fetch('https://server-contact-9txe.onrender.com/');
  const data = await response.json();
  return data;
};

export {fetchContacts};

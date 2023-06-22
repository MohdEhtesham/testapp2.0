import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import Contacts from 'react-native-contacts';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = () => {
    Contacts.getAll()
      .then((foundContacts) => {
        setContacts(foundContacts);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View>
      {contacts.map((contact) => (
        <Text key={contact.recordID}>{contact.displayName}</Text>
      ))}
    </View>
  );
};

export default ContactList;

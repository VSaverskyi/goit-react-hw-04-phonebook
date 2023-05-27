import React, {useState, useEffect} from "react";
import { Container, ContactsWrapper } from "./App.styled";
import ContactForm from "components/ContactForm/ContactForm";
import { nanoid } from "nanoid";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";

const App = () => {
  const [contacts, setContacts] = useState(getFromLocalStorage('savedContacts') || []);
  const [filter, setFilter] = useState('');

  function setToLocalStorage(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.log(err);
    }
  };

  function getFromLocalStorage(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (err) {
      console.log(err);
    }
  };
  
  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  const handleSubmit = (name, number) => {
    if (contacts.find((item) => item.name.toLowerCase() === name.toLowerCase())) {
      return alert(name + ' is already in contacts.');
    }
     
    setContacts((prevContacts) => {
      return prevContacts.concat({ name, number, id: nanoid() })
    }
    );
  };

  const handleDeleteBtnClick = id => {
    setContacts((prevContacts) => {
      return prevContacts.filter((item) => item.id !== id)
    })
  };

  const checkIncludesFilterInArray = item => {
    return item.name.toLowerCase().includes(filter.toLowerCase());
  };

  useEffect(() => {
    setToLocalStorage('savedContacts', contacts);
  }, [contacts]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit} />
      
      {contacts.length !== 0 && 
        <ContactsWrapper>
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={handleFilterChange}/>
          <ContactList
            contactsFilter={contacts.filter(checkIncludesFilterInArray)}
            onDeleteBtnClick={handleDeleteBtnClick}
          />
      </ContactsWrapper>
      }
    </Container>
  );
}

export default App;
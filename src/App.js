//import  { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css';
import ContactForm from './components/ContactForm';
import ContactsList from './components/ContactsList';
import Section from './components/Section';
import { useSelector } from 'react-redux';
import Filter from './components/Filter';
//import useLocalStorage from 'hooks/useLocalStorage';

function App() {

  const contacts = useSelector((state) => state.contacts.items);
  
  console.log(contacts)
//const [contacts, setContacts] = useLocalStorage('contacts', [])



    return (
      <>
        <Section>
          <h1 className="title">Phonebook</h1>
          <ContactForm />
        </Section>
        <Section title="Contacts">
          <Filter /> 
          { contacts && <ContactsList/> }
            
        
        </Section> 
         <ToastContainer />
      </>
    );
  
}


export default App;

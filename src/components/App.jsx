import React, {useEffect} from "react";
import {useSelector } from "react-redux";
import PhoneBookForm from "./PhoneBook/PBForm";
import List from "./PhoneBook/PBList";
import PBSearch from "./PhoneBook/PBSearch";
import Section from "./Section/Section";
import { ContentContainer, PageContainer } from "./styled-comp/styled";

const App = () => {
  const contacts = useSelector(store => store.contacts)
  const filter = useSelector(store => store.filter)


  useEffect(() => {
    const string = JSON.stringify(contacts)
    localStorage.setItem("contactlist", string)
  }, [contacts])

  const onFilter = () => {
    if (filter) {
      const filterredArray = contacts.filter(({ name }) => name.toLowerCase().indexOf(filter.toLowerCase()) > -1)
      return filterredArray
    } 
    return contacts
  }

  const isExist = (item) => {
    let exist = false
    if (contacts) {
      contacts.forEach(cont => {
        if (cont.name === item.name) {
          return exist = true
        }
      })
    }
    return exist
  }

  const array = onFilter()
    return (
    <PageContainer>
      <ContentContainer>
          <Section title="Phonebook">
            <PhoneBookForm
              isExist={isExist}
            />
          </Section>
          <Section title="Contacts">
            <PBSearch/>
            <List array={array}/>
          </Section>
        </ContentContainer>
      </PageContainer>
  );
}


export default App

import React, {useEffect} from "react";
import {useDispatch, useSelector } from "react-redux";
import { fetchContacts, addContact, removeContact} from "redux/requests";
import PhoneBookForm from "./PhoneBook/PBForm";
import List from "./PhoneBook/PBList";
import PBSearch from "./PhoneBook/PBSearch";
import Section from "./Section/Section";
import { ContentContainer, PageContainer } from "./styled-comp/styled";

const App = () => {
  const contacts = useSelector(store => store.contacts)
  const filter = useSelector(store => store.filter)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  const onFilter = () => {
    if (filter) {
      const filterredArray = contacts.items.filter(({ name }) => name.toLowerCase().indexOf(filter.toLowerCase()) > -1)
      return filterredArray
    } 
    return contacts.items
  }

  const onAddCont = (item) => {
    dispatch(addContact(item))
  }

  const onRemoveCont = (id) => {
    dispatch(removeContact(id))
  }

  const array = onFilter()
    return (
    <PageContainer>
      <ContentContainer>
          <Section title="Phonebook">
            <PhoneBookForm
              add = {onAddCont}
            />
          </Section>
          <Section title="Contacts">
            {!contacts.loading && <PBSearch array={array} /> />}
            {contacts.loading ? <h3>loading...</h3> : <List array={array} del={onRemoveCont} />}
          </Section>
        </ContentContainer>
      </PageContainer>
  );
}


export default App

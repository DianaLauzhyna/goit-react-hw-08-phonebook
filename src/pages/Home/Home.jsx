import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PhoneBookForm from 'components/PhoneBookForm/PhoneBookForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Section from 'components/UI/Section/Section';
import InputSearch from 'components/UI/InputSearch/InputSearch';
import {
  getContacts,
  getEditedContact,
  getFilter,
} from 'redux/contacts/contactsSelectors';
import { getAuth } from 'redux/auth/selectorsAuth';

import {
  fetchTasks,
  deleteContact,
  addContact,
  updateContact,
} from 'redux/contacts/contactsThunk';
import { Loader } from 'components/UI/Loader/Loader';
import { editContact, findByName } from 'redux/contacts/contactsSlice';

import {TitleDiv, MainStyle, DivIsAuth} from './Home.styled'

const HomePage = () => {
  const editedContact = useSelector(getEditedContact);

  const { items: contacts, isLoading, error } = useSelector(getContacts);
  const { isAuth } = useSelector(getAuth);
  let filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const onInputContact = user => {
    if (
      !editedContact &&
      contacts.some(contact => contact.name === user.name)
    ) {
      return alert(`${user.name} is already in contacts.`);
    }
    !editedContact && dispatch(addContact(user));
    editedContact && dispatch(updateContact({ id: editedContact.id, ...user }));
  };

  const findByNameFilter = value => {
    const name = value.trim().toLocaleLowerCase();
    if (!name) {
      filter = '';
    }
    filter = contacts.filter(el => el.name.toLocaleLowerCase().includes(name));
    dispatch(findByName(filter));
  };
  const onClickDelete = id => {
    dispatch(deleteContact(id));
  };
  const onClickEdit = id => {
    const contact = contacts.find(el => el.id === id);
    dispatch(editContact(contact));
  };
  return (
    <MainStyle
    >
      {isAuth && (
        <DivIsAuth

        >
          <Section title="PhoneBook">
            <PhoneBookForm onInputContact={onInputContact} />
          </Section>

          <Section title="Contacts">
            <InputSearch
              nameSearch="Find contacts by name"
              onSearchName={findByNameFilter}
            />
            <TitleDiv
            >
              {isLoading && <Loader />}
            </TitleDiv>
            <p>{error}</p>
            <ContactsList
              onClickDelete={onClickDelete}
              onClickEdit={onClickEdit}
              contacts={filter === '' ? contacts : filter}
            />
          </Section>
        </DivIsAuth>
      )}
    </MainStyle>
  );
};

export default HomePage;
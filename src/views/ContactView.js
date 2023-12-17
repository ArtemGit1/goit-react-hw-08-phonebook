import { useEffect } from 'react';
import { Container, Title, H2 } from './views.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useSelector, useDispatch } from 'react-redux'
import { contactsOperations, contactsSelector } from '../redux/contacts';


const ContactView = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(contactsSelector.selectIsLoading);
    const error = useSelector(contactsSelector.selectError);

    useEffect(() => {
        dispatch(contactsOperations.fetchContacts());
    }, [dispatch]);

    return (
        <Container>
            <Title>P H O N E BOOK</Title>
            <ContactForm />
            <H2>Contacts</H2>
            <Filter />
            {isLoading && !error && <b>Request in progress...</b>}
            <ContactList />
        </Container>
    )
}
export default ContactView;


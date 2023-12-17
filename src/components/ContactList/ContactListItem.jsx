import {  Button, Span,Li } from './ContactListItem.styled';
import { contactsOperations } from 'redux/contacts';
import { useDispatch } from 'react-redux';

export const ContactListItem = ({ id, name, number }) => {
    const dispatch = useDispatch();
        return (
        <Li>
                <Span><b>{name}</b></Span>
                <Span>{number}</Span>
                <Button type="button" onClick={()=> dispatch(contactsOperations.deleteContact(id))}>Delete</Button>
            
        </Li>
    )
}

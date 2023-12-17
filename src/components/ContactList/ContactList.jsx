import {ContactListItem} from "./ContactListItem";
import { Ul } from './ContactList.styled';
import { selectVisibleContacts } from "redux/contacts/selectors";
import { useSelector } from "react-redux";

export const ContactList = () => {
    const getVisibleContacts = useSelector(selectVisibleContacts);
    if(getVisibleContacts===0) return null
    return (
            <Ul>
                {getVisibleContacts.map(item => {
                    const { id } = item
                    return (
                        < ContactListItem
                            key={id}
                        {...item}
                     />)    
                })}
            </Ul>
    )}
    



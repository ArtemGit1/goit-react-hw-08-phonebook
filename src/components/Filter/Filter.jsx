import { Input, Label, Span, Div } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelector } from 'redux/contacts';
import { setFilter } from 'redux/contacts/createSlice';


export const Filter = () => {
     const filter = useSelector(contactsSelector.selectFilter);
    const dispatch = useDispatch();
        return (
            <Div>
                <Label>
                    <Span>Find contact by name:</Span>
                <Input type="text" 
                name='filter'
                value={filter}
                onChange={(e)  => dispatch(setFilter(e.target.value))}
                placeholder="Enter name for Search"/>
                </Label>
            </Div>
        )
    }

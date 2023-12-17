import React from 'react';
import { HOME_ROUTE } from 'constants/route';
import { Link } from 'react-router-dom';
import { Div, Span, Error } from './views.styled';

const NotFound = () => {
    return (
        <Div>
            <Error>Error 404. Sorry, page wasn`t found.{' '}</Error>
            <Link to={HOME_ROUTE}><Span>{`Back to the <<Home page<<.`}</Span></Link>
        </Div>
    )
}
export default NotFound;



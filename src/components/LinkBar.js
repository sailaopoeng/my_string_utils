import React from 'react';
import { Nav } from 'react-bootstrap';

const LinkBar = (props)=> {
    return (
        
        <Nav className={props.classDef}>
            <Nav.Link href="/json_to_string">JsonToEscapeString</Nav.Link>
            <Nav.Link href="/string_to_json">EscapeStringToJson</Nav.Link>
            <Nav.Link href="/json_to_urlparams">JsonToURLParameters</Nav.Link>
            <Nav.Link href="/urlparams_to_json">URLParametersToJson</Nav.Link>
        </Nav>
    )
}

export default LinkBar;
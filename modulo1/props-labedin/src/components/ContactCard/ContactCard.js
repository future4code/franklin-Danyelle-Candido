import React from 'react';
import './ContactCard.css'

function ContactCard(props) {
    return (
        <div className="contactcard-container">
            <img src={ props.imagem } />
            <div>
                <p><b>{props.contactType} </b>{ props.contactLog}</p>
            </div>
        </div>
    )
}

export default ContactCard;
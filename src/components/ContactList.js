import React from 'react'
import ContactCard from './ContactCard';

function ContactList(props) {
    const contactList = props.contacts.map((contact)=>{
        return (
            <ContactCard contact={contact} />
        ); 
    });
    return (
        <div className="ui celled list ">
         {contactList}
        </div>
    )
}

export default ContactList

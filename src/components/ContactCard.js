import React from 'react'

function ContactCard({contact}) {
        return (
            <div key={contact.id} className="item">
                <div className="content">
                    <div className="header">
                        {contact.name}
                    </div>
                    <div>
                        {contact.email}
                    </div>
                </div>
                    <i style={{color:"red", cursor:"pointer" , marginTop:"7px"}} 
                    className="trash alternate outline icon"/>
                
            </div>
        ); 
    
}

export default ContactCard

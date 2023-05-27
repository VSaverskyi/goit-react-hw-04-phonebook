import ContactListItem from "components/ContactListItem/ContactListItem";
import React from "react";
import PropTypes from "prop-types";
import { ContactListWrapper } from "./ContactList.styled";

const ContactList = ({contactsFilter, onDeleteBtnClick}) => {  
    return (
        <ContactListWrapper>
            {contactsFilter.length === 0 ? (<li>Contact don`t find</li>) : (contactsFilter
            .map((item) => (
                <ContactListItem key={item.id} item={item} onDeleteBtn={onDeleteBtnClick}/>
            )))}
        </ContactListWrapper>
    )
}

export default ContactList;

ContactList.propTypes = {
    contactsFilter: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    })),
    onDeleteBtnClick: PropTypes.func.isRequired,
}
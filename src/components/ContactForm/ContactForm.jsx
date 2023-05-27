import React, {useState} from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import { ButtonSubmit, FormWrapper } from "./ContactForm.styled";

const ContactForm = ({ onSubmit }) => {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const idForName = nanoid();
    const idForTel = nanoid();

    const clearState = () => {
        setName('');
        setNumber('');
    }

    const handleSubmit = e => {
        e.preventDefault();
        const { name, number } = e.target.elements;
        onSubmit(name.value, number.value);
        clearState();
    }

    const handleChange = e => {
        const { name, value } = e.target;

        switch (name) {
            case 'name':
                setName(value);
                break;
            
            case 'number':
                setNumber(value);
                break;
        
            default:
                console.warn(`Field type name - ${name} not processing!`);
        }
    }

    return (
        <FormWrapper onSubmit={handleSubmit}>
            <label htmlFor={idForName}>
                Name
            </label>
            <input
                id={idForName}
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
            <label htmlFor={idForTel}>
                Number
            </label>
            <input
                id={idForTel}
                type="tel"
                name="number"
                value={number}
                onChange={handleChange}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
            <ButtonSubmit type="submit">add contact</ButtonSubmit>
        </FormWrapper>
    )
}

export default ContactForm;

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}
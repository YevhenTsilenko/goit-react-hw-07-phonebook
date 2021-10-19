import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addContact } from '../../redux/operations';
import { getIsLoading, getContacts } from '../../redux/selectors';
import { Button } from '../Button/Button';
import styles from './ContactForm.module.css';
import { Loader } from '../Loader/Loader';

function ContactForm({ contacts, onSubmit, isLoading }) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    
    const addNewContact = (name, number) => {
        const names = contacts.map((contact) => contact.name.toLowerCase());
        const currentName = name.toLowerCase()
        console.log(currentName)
        if(names.includes(currentName))  {
           return alert(`${name} is already exists`);
        }

        onSubmit(name, number);
    }

    const hendleSubmit = (e) => {
        e.preventDefault();
        addNewContact(name, number);
        reset();
    };
    
    const reset = () => {
        setName("");
        setNumber("");
    };
        return (
            <>
                <form onSubmit={hendleSubmit} className={styles.form}>
                    
                    <label className={styles.label}>
                    Name
                        <input 
                            className={styles.form_input}
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                            required
                            value={name}
                            onChange={(e) => {
                                setName(e.currentTarget.value);
                            }}/>
                    </label>
                    <label className={styles.label}>
                    Number
                        <input 
                            className={styles.form_input}
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                            required
                            value={number}
                            onChange={(e) => {
                                setNumber(e.currentTarget.value);
                            }}/>
                    </label>
                    <Button type="submit" btnName="Add contact" disabled={!(name && number)} className={styles.form_btn} />
                </form>
                {isLoading && <Loader />}
            </>
        )
}

const mapStateToProps = state => ({
    isLoading: getIsLoading(state),
    contacts: getContacts(state),
})

const mapDispatchToProps = dispatch => ({
    onSubmit: (name, number) => dispatch(addContact(name, number)),
});

ContactForm.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
    onSubmit: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
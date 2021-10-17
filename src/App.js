import { getContacts } from './redux/selectors';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import './App.css';

function App({ contacts }) {
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm />
        {contacts.length > 0 && 
          <>
            <h2>Contacts</h2>
            <Filter />
          </>
        }
        <ContactList />
      </div>
    );
}

const mapStateToProps = (state) => ({
  contacts: getContacts(state),
});

App.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};

export default connect(mapStateToProps, null)(App);



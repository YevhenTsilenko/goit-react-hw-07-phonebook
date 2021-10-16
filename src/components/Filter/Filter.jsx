import { connect } from 'react-redux';
import { getFilter } from '../../redux/selectors';
import { filterContacts } from '../../redux/actions';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

function Filter({ value, onChange }) {
    return (
        <label className={styles.label}>
            Find contacts by name
                <input type="text" value={value} onChange={onChange} className={styles.input}/>
        </label>
    )
}

const mapStateToProps = state => ({
    value: getFilter(state),
});

const mapDispatchToProps = dispatch => ({
    onChange: evt => dispatch(filterContacts(evt.target.value)),
});

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
import styles from './Button.module.css';

function Button({ type, onClick, btnName, disabled }) {
    return (
      <button
        type={type}
        className={styles.button}
        onClick={onClick}
        disabled={disabled}
      >
        {btnName}
      </button>
    );
  }
  
  export { Button };
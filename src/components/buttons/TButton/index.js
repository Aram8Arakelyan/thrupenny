import styles from './index.module.css';

const TButton = ({ children, onClick, className = '', title = '', ...defaultButtonProps }) => {
  return (
    <>
      <button
        type="button"
        className={`${styles.button} ${className} `}
        onClick={onClick}
        title={title}
        {...defaultButtonProps}>
        {children}
      </button>
    </>
  );
};

export default TButton;

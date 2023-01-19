import PropTypes from 'prop-types';

import styles from './button.module.scss';


const Button = ({ children, type, onClick }) => {
    return (
        <>
            <button onClick={onClick} type={type} className={styles.btn}>{children}</button>
        </>
    );
}

export default Button;



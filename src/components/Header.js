import React from 'react';
import styles from './Header.module.css';
import PropTypes from 'prop-types';

export const Header = ({titulo, climaactual}) => {

    const { name, main } = climaactual;

    if(!name) return null;

    const kelvin = 273.15;

    return (
        <div className="navbar-fixed">
            <nav className="nav-wrapper teal lighten-1">
                <a href="#!" className="brand-logo center">{titulo}</a>
                <div className={styles.clima}>
                <h6 className="right">{name} <span> {parseFloat (main.temp - kelvin, 10).toFixed(1) } &#x2103;</span></h6>
                </div>
            </nav>
        </div>
    )
}

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}

import React from 'react';
import { useSelect } from '../hooks/useSelect';
import styles from './Formulario.module.css';
import PropTypes from 'prop-types';

export const Formulario = ( {guardarCategoria} ) => {

    const OPCIONES = [
        {value: 'general', label: 'General'},
        {value: 'business', label: 'Negocios'},
        {value: 'entertainment', label: 'Entretenimiento'},
        {value: 'health', label: 'Salud'},
        {value: 'science', label: 'Ciencia'},
        {value: 'sport', label: 'Deportes'},
        {value: 'technology', label: 'Tecnología'}
    ]

    const [categoria, SelectNoticias] = useSelect('general', OPCIONES);

    //Submit form

    const buscarNoticias = e => {
        e.preventDefault();

        guardarCategoria(categoria)
    }

    return (
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                onSubmit={buscarNoticias}
                >
                    <h2 className={styles.heading}>Busca tus noticias por categoria:</h2>

                    <SelectNoticias />

                    <div className="input-field col s12">
                        <input
                        type="submit"
                        className={`${styles.btn_block} btn-large blue-grey lighten-1`}
                        value="Buscar"
                        />
    
                    </div>
                </form>
            </div>
        </div>
    )
}


Formulario.propTypes = {
    guardarCategoria: PropTypes.func.isRequired
}


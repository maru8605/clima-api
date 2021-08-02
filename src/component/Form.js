import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'
import Error from './Error'


const Form = ({busqueda, guardarBusqueda, setConsulta}) => {


    const [error, setError] = useState(false)

    const {ciudad, pais} = busqueda 

    const handleChange = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }
//  al dar submit al form
    const handleSubmit = e => {
        e.preventDefault();
    // validar form
        if(ciudad.trim() === '' || pais.trim() === ''){
            setError(true)
            return
        }
        setError(false)

    // envio info a app
        setConsulta(true)
    }

    return (
        <form onSubmit={handleSubmit}>
        {error ? <Error mensaje='Todos los campos son obligatorios'/>: null}
            <div className='input-field col s12'>
                <input
                    type='text'
                    name='ciudad'
                    id='ciudad'
                    value={ciudad}
                    onChange={handleChange}
                />
                <label htmlFor='ciudad'>Ciudad:</label>
            </div>
            <div className='input-field col s12'>
                <select
                    name='pais'
                    id='pais'
                    value={pais}
                    onChange={handleChange}
                >
                    <option>-- Seleccione un país--</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor='pais'>Pais:</label>
            </div>

            <div className='input-field col s12'>
                <input
                    type='submit'
                    value='Buscar clima'
                    className='waves-effect waves-light btn-large btn-block yellow accent-4'
                />
            </div>
        </form>
    )
}

Form.propTypes = {
   busqueda : PropTypes.object.isRequired,
   guardarBusqueda : PropTypes.func.isRequired,
   setConsulta : PropTypes.func.isRequired
}

export default Form


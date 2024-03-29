import React from 'react';
import PropTypes from 'prop-types'

function Headliner({title, onSelect}) {
    return (
        <div className='headliner' onClick={onSelect}>
            <h3 className='headliner-title'>{title}</h3>
        </div>
    )
}

Headliner.propTypes = {
    backdrop: PropTypes.string ,
    title: PropTypes.string,
    onSelect: PropTypes.func,
}

export default Headliner
import React from 'react';
import PropTypes from 'prop-types'

function Headliner({ title, rating, release, onSelect, formatDate }) {
    return (
        <div className='headliner-pick'>
            <h3 className='headliner-label'>Today's Pick:</h3>
            <h3 className='headliner-title'>{title}</h3>
            <p className='headliner-date'><span>Release Date </span>{formatDate(release)}</p>
            <p className="headliner-rating"><span>Avg Rating </span> {rating < 5 ? '🤮 ' + rating : '🔥 ' + rating}</p>
            <nav>
                <button className="headliner-button" onClick={onSelect}>More Details</button>
            </nav>
        </div>
    )
}

Headliner.propTypes = {
    title: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    release: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
    formatDate: PropTypes.func.isRequired
}

export default Headliner
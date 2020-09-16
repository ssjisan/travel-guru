import React from 'react';
import './Hotel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'

const Hotel = () => {
    return (
        <div>
            Your Hotel <FontAwesomeIcon icon={faPowerOff} />
        </div>
    );
};

export default Hotel;
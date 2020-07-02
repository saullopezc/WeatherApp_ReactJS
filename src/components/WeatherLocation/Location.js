import React from 'react';
import './styles.css';

const Location = ({city}) => (
        <div className="LocationCont">
            <h1>{city}</h1>
        </div>
    );

export default Location;
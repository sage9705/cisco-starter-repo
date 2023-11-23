import React from 'react';
import './exhibit.css';

const Exhibit = ({ name, children }) => (
    <div className="Exhibit">
        <h2 className="ExhibitHeading">{name}</h2>
        <div className="ExhibitContent">{children}</div>
    </div>
);

export default Exhibit;

import React from 'react';
import './filter.css';

export default function Filter({title, items}) {
    return(
        <div className='filter'>
            <h1>{title}</h1>
            {items.map(i => <h2>{i}</h2>)}
        </div>
    );
};

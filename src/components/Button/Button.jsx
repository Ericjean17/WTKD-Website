import React from 'react';
import './Button.scss';
import { Link } from 'react-router-dom';

export default function Button({ page, name }) {
    return (
        <Link to={page}>
            <button className="btn--primary">{name}</button>
        </Link>
    )
}
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

function SearchBar({ onSearch }) {
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        //Prevents the default browser action for the event
        e.preventDefault();
        onSearch(city);
    };

    return (
        <form onSubmit={handleSubmit} className="SearchBar" >
            <input

                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city"
            />
            <Button type="submit">Search</Button>
        </form>
    )
}

export default SearchBar;
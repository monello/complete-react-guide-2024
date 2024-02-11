import { useState, useEffect } from 'react';
import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
    const [isLoading, setIsLoading] = useState(false);
    const [availablePlaces, setAvailablePlaces] = useState([]);

    useEffect(() => {
        const fetchPlaces = async () => {
            setIsLoading(true);
            const response = await fetch('http://localhost:3000/places');
            const resData = await response.json();
            setAvailablePlaces(resData.places);
            setIsLoading(false);
        };
        fetchPlaces();
    }, []);
    return (
        <Places
            title="Available Places"
            places={availablePlaces}
            isLoading={isLoading}
            fallbackText="No places available."
            loadingText="Fetching place data ..."
            onSelectPlace={onSelectPlace}
        />
    );
}

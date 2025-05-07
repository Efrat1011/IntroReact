import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

export default function FlightList() {
    const [loading, setLoading] = useState(true);
    const [flights, setFlights] = useState([]);
    const navigate = useNavigate();

    const mockFlights = [
        { id: 1, from: 'Almaty', to: 'New-York', price: 859000, time: '10:00', airline: 'Air Astana', seats: 15 },
        { id: 2, from: 'Almaty', to: 'Barcelona', price: 400000, time: '14:30', airline: 'Turkish Airlines', seats: 23 },
        { id: 3, from: 'Astana', to: 'Abu-Dabi', price: 280000, time: '16:00', airline: 'Qatar AirWeirs', seats: 54 },
    ];

    const fetchFlights = async () => {
        setTimeout(() => {
            setFlights(mockFlights);
            setLoading(false);
        }, 1000);
    };

    useEffect(() => {
        fetchFlights();
    }, []);
return(
    <div>
        
    </div>
)
}
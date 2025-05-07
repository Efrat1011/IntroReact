import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../index.css';

export default function FlightBooking() {
    const { flightId } = useParams();
    const navigate = useNavigate();

    const [flight, setFlight] = useState(null);
    const [formData, setFormData] = useState({
        passengerName: '',
        selectedDate: '',
        seat: '',
    });
    const [bookings, setBookings] = useState([]);

    const mockFlights = [
        { id: 1, from: 'Almaty', to: 'New-York', price: 859000, time: '10:00', airline: 'Air Astana', seats: 15 },
        { id: 2, from: 'Almaty', to: 'Barcelona', price: 400000, time: '14:30', airline: 'Turkish Airlines', seats: 23 },
        { id: 3, from: 'Astana', to: 'Abu-Dabi', price: 280000, time: '16:00', airline: 'Qatar AirWeirs', seats: 54 },
    ];

    useEffect(() => {
        const selectedFlight = mockFlights.find(f => f.id === parseInt(flightId));
        setFlight(selectedFlight);
    }, [flightId]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleBooking = (e) => {
        e.preventDefault();
        if (!formData.passengerName || !formData.selectedDate || !formData.seat) {
            alert('Барлық өрістерді толтырыңыз!');
            return;
        }

        const bookingData = {
            flightId: flight.id,
            ...formData,
            bookingDate: new Date().toISOString(),
        };

        setBookings([...bookings, bookingData]);
        alert('Брондау сәтті жасалды!');
        navigate('/');
    };

    if (!flight) return <div className="text-center mt-10">Ұшақ ақпараты жүктелуде...</div>;


    return(
        <div>
            
        </div>
    )
}
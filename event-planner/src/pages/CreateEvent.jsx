import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEvents } from '../context/EventContext';
import EventForm from '../components/events/EventForm';


const CreateEvent = () => {
  const { addEvent } = useEvents();
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    location: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      ...formData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    };
    addEvent(newEvent);
    setIsSuccess(true);
    
    // Redirect after 2 seconds
    setTimeout(() => {
      navigate('/dashboard');
    }, 2000);
  };

  return (
    <div className="create-event-container">
      <h1>Create New Event</h1>
      
      {isSuccess ? (
        <div className="success-message">
          Event created successfully! Redirecting...
        </div>
      ) : (
        <EventForm 
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default CreateEvent;
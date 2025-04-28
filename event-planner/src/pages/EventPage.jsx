import { useParams } from 'react-router-dom';
import { useEvents } from '../context/EventContext';
import { Link } from 'react-router-dom';
import './EventPage.css';


const EventPage = () => {
  const { id } = useParams();
  const { events } = useEvents();
  const event = events.find(e => e.id === id);

  if (!event) {
    return (
      <div className="event-not-found">
        <h2>Event not found</h2>
        <p>We couldn't find an event with ID: {id}</p>
        <Link to="/dashboard" className="back-button">
          Return to Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="event-details">
      <h1>{event.title}</h1>
      <div className="event-meta">
        <span>📅 {new Date(event.date).toLocaleString()}</span>
        <span>📍 {event.location}</span>
      </div>
      <p className="event-description">{event.description}</p>
      <Link to="/dashboard" className="back-button">
        Back to Events
      </Link>
    </div>
  );
};

export default EventPage;
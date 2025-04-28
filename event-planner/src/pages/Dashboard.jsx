import { useEvents } from '../context/EventContext.jsx';
import EventCard from '../components/events/EventCard.jsx';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const { events } = useEvents();

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Your Events</h2>
        <Link to="/create" className="button">
          + New Event
        </Link>
      </div>
      <div className="events-list">
        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
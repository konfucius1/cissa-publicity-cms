import PropTypes from 'prop-types';

const EventCard = ({ event }) => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-md rounded-md">
      <figure>
        <img src={event.image} alt={event.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{event.title}</h2>
        <div className="flex justify-between">
          <p>{event.date}</p>
          <p>{event.time}</p>
          <p>{event.location}</p>
        </div>
        <p>{event.description}</p>
        <a href={event.link} className="link">
          Event Link
        </a>
      </div>
    </div>
  );
};

EventCard.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string,
  }).isRequired,
};

export default EventCard;

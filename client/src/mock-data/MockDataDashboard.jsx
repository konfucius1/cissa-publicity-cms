import EventCard from '../components/EventCard';
import IndustryConnect from '../assets/mock-graphics/industry-connect.png';
import DevOps from '../assets/mock-graphics/devops-cissa.png';
import DebunkingTutorial from '../assets/mock-graphics/debunkingtutormyths.png';

const Projects = () => {
  let mockEvents = [
    {
      id: 1,
      title: 'Event 1',
      description: 'Description 1',
      date: '2021-01-01',
      time: '12:00',
      location: 'Location 1',
      image: IndustryConnect,
      link: '',
    },
    {
      id: 2,
      title: 'Event 2',
      description: 'Description 2',
      date: '2021-01-01',
      time: '12:00',
      location: 'Location 2',
      image: DevOps,
      link: '',
    },
    {
      id: 3,
      title: 'Event 3',
      description: 'Description 3',
      date: '2021-01-01',
      time: '12:00',
      location: 'Location 3',
      image: DebunkingTutorial,
      link: '',
    },
    {
      id: 4,
      title: 'Event 3',
      description: 'Description 3',
      date: '2021-01-01',
      time: '12:00',
      location: 'Location 3',
      image: DebunkingTutorial,
      link: '',
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-8 pt-4">
      {mockEvents.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default Projects;

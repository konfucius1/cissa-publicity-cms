import CreateIcon from '../assets/create-icon.svg';

const CreateNewEvent = () => {
  return (
    <div className="flex justify-center items-center rounded-lg bg-base-100 outline outline-1 outline-gray-300 w-96">
      <figure className="pl-4">
        <img src={CreateIcon} alt="Movie" />
      </figure>
      <div className="p-4">
        <h2 className="text-lg font-semibold">Create a new event</h2>
        <p className="text-sm">Start creating and managing content</p>
      </div>
    </div>
  );
};

export default CreateNewEvent;

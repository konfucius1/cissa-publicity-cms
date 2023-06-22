import PropTypes from 'prop-types';

const FilterByDaysButton = ({ value }) => {
  FilterByDaysButton.propTypes = {
    value: PropTypes.number.isRequired,
  };

  return <button className="btn join-item bg-white">{value} days</button>;
};

export default FilterByDaysButton;

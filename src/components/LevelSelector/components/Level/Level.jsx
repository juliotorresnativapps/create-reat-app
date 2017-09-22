import React from 'react';
import PropTypes from 'prop-types';

const Level = ({ levelName, changeLevel }) => (
  <li onClick={() => changeLevel()}>
    {levelName}
  </li>
);

Level.propTypes = {
  changeLevel: PropTypes.func.isRequired,
  levelName: PropTypes.string.isRequired
};

export default Level;

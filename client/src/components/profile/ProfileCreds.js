import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProfileCreds extends Component {
  render() {
    return <div>ProfileCreds</div>;
  }
}

ProfileCreds.propTypes = {
  education: PropTypes.array.isRequired,
  experience: PropTypes.array.isRequired
};

export default ProfileCreds;

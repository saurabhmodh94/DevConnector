import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProfileAbout extends Component {
  render() {
    return <div>ProfileAbout</div>;
  }
}

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;

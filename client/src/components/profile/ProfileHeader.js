import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProfileHeader extends Component {
  render() {
    return <div>ProfileHeader</div>;
  }
}

ProfileHeader.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileHeader;

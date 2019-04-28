import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExperience } from '../../actions/profileActions';
import formatDate from './../../utils/moment';
import isEmpty from '../../validation/is-empty';

class Experience extends Component {
  onDeleteClick = id => {
    this.props.deleteExperience(id);
  };

  render() {
    const expData = this.props.experience;
    const experience = expData.map(exp => (
      <tr key={exp._id}>
        <td>{exp.company}</td>
        <td>{exp.title}</td>
        <td>
          {formatDate(exp.from, 'YYYY/MM/DD')}-
          {exp.to === null ? ' Now' : formatDate(exp.to, 'YYYY/MM/DD')}
        </td>
        <td>
          <button
            onClick={() => this.onDeleteClick(exp._id)} // tip
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    ));
    return (
      <div>
        <h4 className="mb-4">Experience Credentials</h4>
        {!isEmpty(expData) ? (
          <table className="table">
            <thead>
              <tr>
                <th>Company</th>
                <th>Title</th>
                <th>Years</th>
                <th />
              </tr>
              {experience}
            </thead>
          </table>
        ) : (
          <div className="jumbotron"> No Details Found.</div>
        )}
      </div>
    );
  }
}

Experience.propTypes = {
  deleteExperience: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteExperience }
)(Experience);

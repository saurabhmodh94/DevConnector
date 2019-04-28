import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteEducation } from '../../actions/profileActions';
import formatDate from './../../utils/moment';
import isEmpty from '../../validation/is-empty';

class Education extends Component {
  onDeleteClick = id => {
    this.props.deleteEducation(id);
  };

  render() {
    const eduData = this.props.education;
    const education = eduData.map(edu => (
      <tr key={edu._id}>
        <td>{edu.school}</td>
        <td>{edu.degree}</td>
        <td>
          {formatDate(edu.from, 'YYYY/MM/DD')} -
          {edu.to === null ? ' Now' : formatDate(edu.to, 'YYYY/MM/DD')}
        </td>
        <td>
          <button
            onClick={() => this.onDeleteClick(edu._id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    ));

    return (
      <div>
        <h4 className="mb-4">Education Credentials</h4>
        {!isEmpty(eduData) ? (
          <table className="table">
            <thead>
              <tr>
                <th>School</th>
                <th>Degree</th>
                <th>Years</th>
                <th />
              </tr>
            </thead>
            {education}
          </table>
        ) : (
          <div> No Details Found.</div>
        )}
      </div>
    );
  }
}

Education.propTypes = {
  deleteEducation: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteEducation }
)(Education);

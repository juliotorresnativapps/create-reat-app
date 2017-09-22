import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../_PatientSearchBar.scss';

export default class PatientList extends Component {

  static propTypes = {
    patientSearchList: PropTypes.array.isRequired,
    selectNode: PropTypes.func.isRequired,
    setDropdownTableInfo: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  handlePatientListClick(patient){
    const { setDropdownTableInfo, selectNode} = this.props;
    selectNode(patient.node);
    setDropdownTableInfo(patient.node.id);
  }

  renderPatientListRows (){
    const { patientSearchList } = this.props;

    return patientSearchList.map((patient) =>
      (<li className="patient-search-bar__list-item" key={`${patient.node.id}`}>
        <a key={`${patient.node.id}`} onClick={() => this.handlePatientListClick(patient)}>{patient.first_name}{" "}{patient.last_name}</a>
      </li>)

    );
  }

  render() {
    return (
      <div className="row">
        {this.renderPatientListRows()}
      </div>

    );
  }

}

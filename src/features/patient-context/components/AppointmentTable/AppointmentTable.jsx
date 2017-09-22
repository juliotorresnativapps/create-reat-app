import React, { Component } from 'react';
import './_AppointmentTable.scss';
import PropTypes from 'prop-types';

export default class AppointmentTable extends Component {

  static propTypes = {
    dropwdownTableInfo: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  getAppointmentTableData() {
    const { dropwdownTableInfo } = this.props;

    var patient = dropwdownTableInfo;

    return patient;
  }

  render() {

    const patient = this.getAppointmentTableData();
    //patient = selectedNode;


    return (
      <div className="" id="appointmentTableAccordion" role="tablist" aria-multiselectable="true">
        <div id="collapseAppointmentTable" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
          <table className="table appointment-table">

            <tbody>
              <tr className="appointment-table__upper-row">
                <td className="text_blue appointment-table__upper-row-cell">Medical record number</td>
                <td className="text_blue appointment-table__upper-row-cell">Date of birth</td>
                <td className="text_blue appointment-table__upper-row-cell">Phone number</td>
                <td className="text_blue appointment-table__upper-row-cell">Attributed Provider</td>
                <td className="text_blue appointment-table__upper-row-cell">Payer</td>
              </tr>
              <tr className="appointment-table__upper-row">
                <td className="text_gray appointment-table__upper-row-cell">{patient.medical_record_number}</td>
                <td className="text_gray appointment-table__upper-row-cell">{patient.birthdate}</td>
                <td className="text_gray appointment-table__upper-row-cell">{patient.phone_number}</td>
                <td className="text_gray appointment-table__upper-row-cell">{patient.attributed_provider}</td>
                <td className="text_gray appointment-table__upper-row-cell">{patient.payer}</td>
              </tr>
            </tbody>
          </table>
          <table className="table appointment-table">
            <tbody>

              <tr>
                <td className="text_blue appointment-table__lower-row-cell_w11p">Next visit</td>
                <td className="text_black appointment-table__lower-row-cell_w5">Date:</td>
                <td className="text_gray appointment-table__lower-row-cell_w11">{patient.next_visit.date}</td>
                <td className="text_black appointment-table__lower-row-cell_w10">Rendering:</td>
                <td className="text_gray appointment-table__lower-row-cell_w11">{patient.next_visit.rendering}</td>
                <td className="text_black appointment-table__lower-row-cell_w10">Location:</td>
                <td className="text_gray appointment-table__lower-row-cell_w11">{patient.next_visit.location}</td>
                <td className="text_black appointment-table__lower-row-cell_w10">Speciality:</td>
                <td className="text_gray appointment-table__lower-row-cell_w11">{patient.next_visit.speciality}</td>
                <td className="text_black appointment-table__lower-row-cell_w5">Status:</td>
                <td className="text_gray appointment-table__lower-row-cell">{patient.next_visit.status}</td>
              </tr>
              <tr>
                <td className="text_blue appointment-table__lower-row-cell_w11p">Last visit</td>
                <td className="text_black appointment-table__lower-row-cell_w5">Date:</td>
                <td className="text_gray appointment-table__lower-row-cell_w11">{patient.last_visit.date}</td>
                <td className="text_black appointment-table__lower-row-cell_w10">Rendering:</td>
                <td className="text_gray appointment-table__lower-row-cell_w11">{patient.last_visit.rendering}</td>
                <td className="text_black appointment-table__lower-row-cell_w10">Location:</td>
                <td className="text_gray appointment-table__lower-row-cell_w11">{patient.last_visit.location}</td>
                <td className="text_black appointment-table__lower-row-cell_w10">Speciality:</td>
                <td className="text_gray appointment-table__lower-row-cell_w11">{patient.last_visit.speciality}</td>
                <td className="text_black appointment-table__lower-row-cell_w5">Status:</td>
                <td className="text_gray appointment-table__lower-row-cell">{patient.last_visit.status}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    );
  }

}

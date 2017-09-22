import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Paginator } from '../../../../../../components/Pagination';
import NestedTable from '../../../../../../components/DisplayTable/NestedTable/NestedTable';

export default class PatientSectionTableLayout extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    columns: PropTypes.array.isRequired,
    currentPage: PropTypes.number.isRequired,
    history: PropTypes.object.isRequired,
    pageSize: PropTypes.number.isRequired,
    resource: PropTypes.string.isRequired,
    selectedColumn: PropTypes.string.isRequired,
    selectedColumnModifier: PropTypes.string.isRequired,
    session: PropTypes.object.isRequired,
    subcolumns: PropTypes.array.isRequired,
    tableInfo: PropTypes.array.isRequired,
    totalNumberOfEntities: PropTypes.number.isRequired
  }

  constructor(props) {
    super(props);

    this.orderResults = this.orderResults.bind(this);
    this.getPage = this.getPage.bind(this);
  }

  componentDidMount() {
    const resource = this.props.resource;
    const { actions, currentPage, session } = this.props;
    actions.setTableInfo(session, resource, { page: currentPage, selectedColumn: undefined, selectedColumnModifier: undefined });
  }

  orderResults(modifier) {
    return (order_by) => {
      const { actions, session, resource } = this.props;
      actions.setTableInfo(session.auth_token, resource, { page: 0, selectedColumn: order_by, selectedColumnModifier: modifier });
    };
  }

  getPage(resource, page, order_by, modifier) {
    const { actions, session } = this.props;
    actions.setTableInfo(session.auth_token, resource, { page: page, selectedColumn: order_by, selectedColumnModifier: modifier });
  }

  render() {
    const { history, resource, actions, tableInfo, currentPage, columns, subcolumns,
      totalNumberOfEntities, pageSize, selectedColumn, selectedColumnModifier } = this.props;

    return (

      <div className="panel panel-default panel-box_tabbed ">
        <div className='overflow-scroll' >
          <div className="panel-body">
            <NestedTable columns={columns} subColumns={subcolumns} tableInfo={tableInfo} currentPage={currentPage}
              totalNumberOfEntities={totalNumberOfEntities} setTableInfo={actions.setTableInfo}
              orderAsc={this.orderResults('asc')} orderDesc={this.orderResults('desc')} orderSubTableInfo={actions.orderSubTableInfo} />
          </div>
        </div>

        <Paginator
          resource={resource}
          totalNumberOfEntities={totalNumberOfEntities}
          currentPage={currentPage}
          pageSize={pageSize}
          getPage={this.getPage}
          selectedColumn={selectedColumn}
          selectedColumnModifier={selectedColumnModifier}

        />

      </div>

    );
  }
}

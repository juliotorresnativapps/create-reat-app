import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EntityTable from './EntityTable';
import EntityCRUDHeader from './EntityCRUDHeader';
import EntityForm from './EntityForm';
import AssureStatusChange from '../../AssureStatusChange';
import { Paginator } from '../../Pagination';
import './_EntityCRUDLayout.scss';

export default class EntityCRUDLayout extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    authToken: PropTypes.string.isRequired,
    entityCRUD: PropTypes.object.isRequired,
    entityName: PropTypes.string.isRequired,
    fields: PropTypes.array.isRequired,
    headers: PropTypes.array.isRequired,
    resources: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.getPage = this.getPage.bind(this);
    this.orderResultsAsc = this.orderResults('asc');
    this.orderResultsDesc = this.orderResults('desc');
  }

  componentDidMount() {
    const { actions, resources, authToken } = this.props;
    actions.getEntityCrudPage(authToken, resources.GET);
  }

  getPage(resource, page, order_by, modifier) {
    const { actions, authToken } = this.props;

    actions.getEntityCrudPage(authToken, resource, { page, order_by, modifier });
  }

  orderResults(modifier) {
    return (order_by) => {
      const { actions, authToken, resources } = this.props;

      actions.getEntityCrudPage(authToken, resources.GET, { page: 1, order_by, modifier });
    };
  }

  render() {
    const { actions, entityName, entityCRUD, resources, headers, fields, authToken } = this.props;
    const { entities, selectedEntity, selectedOperation, currentPage, pageSize, totalNumberOfEntities, selectedColumn, selectedColumnModifier } = entityCRUD;
    const { getPage, orderResultsAsc, orderResultsDesc } = this;

    return (
      <section>
        <div className="panel-container">
          <div className="panel-box_tabbed">
            <div className="panel-body">
              <EntityCRUDHeader
                entityName={entityName}
                searchEntity={actions.searchEntity}
                resource={resources.SEARCH}
                displayEntityModal={actions.displayEntityModal}
              />
              {
                !entityCRUD.isLoadingEntities ? (
                  <EntityTable
                    entityName={entityName}
                    entities={entities}
                    changeStatusResource={resources.CHANGE_STATUS}
                    headers={headers}
                    fields={fields}
                    changeEntityStatus={actions.changeEntityStatus}
                    displayEntityModal={actions.displayEntityModal}
                    orderResultsAsc={orderResultsAsc}
                    orderResultsDesc={orderResultsDesc}
                  />
                ) : 'Loading...'
              }
              <Paginator
                resource={resources.GET}
                totalNumberOfEntities={totalNumberOfEntities}
                currentPage={currentPage}
                pageSize={pageSize}
                getPage={getPage}
                selectedColumn={selectedColumn}
                selectedColumnModifier={selectedColumnModifier}
              />
            </div>
          </div>
        </div>
        <EntityForm
          entityName={entityName}
          entity={selectedEntity}
          operation={selectedOperation}
          createEntity={actions.createEntity}
          updateEntity={actions.updateEntity}
          resources={resources}
          onClose={actions.hideEntityModal}
          authToken={authToken}
        />
        <AssureStatusChange
          authToken={authToken}
          entityName={entityName}
          selectedEntity={selectedEntity}
          changeEntityStatus={actions.changeEntityStatus}
          resource={resources.CHANGE_STATUS}
          onAffirmation={actions.changeEntityStatus}
          onCancel={actions.hideEntityModal}
        />
      </section>
    );
  }
}

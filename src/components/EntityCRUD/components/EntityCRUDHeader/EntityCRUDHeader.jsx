import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { SearchInput } from '../../../Pagination';
import { ModalToggler } from '../../../Modal';
import { NAME as ENTITY_FORM_NAME } from '../EntityForm';
import { OPERATIONS } from '../../definitions';
import './_EntityCRUDHeader.scss';

export default class EntityCRUDHeader extends Component {
  static propTypes = {
    displayEntityModal: PropTypes.func.isRequired,
    entityName: PropTypes.string.isRequired,
    resource: PropTypes.string.isRequired,
    searchEntity: PropTypes.func.isRequired
  }

  render() {
    const { entityName, displayEntityModal, searchEntity, resource } = this.props;
    const entity = _.lowerCase(entityName);
    const buttonText = _.lowerCase(entityName.substring(0, entity.length-1));

    return (
      <header className="display-table__search clearfix">
          <h2 hidden>{_.upperFirst(entity)} CRUD</h2>
          <SearchInput
            resource={resource}
            search={searchEntity}
            target={entity}
            className="display-table__input"
          />
          <div className="display-table__toggler">
            <ModalToggler
              tag="button"
              modal={ENTITY_FORM_NAME}
              onClick={() => displayEntityModal(OPERATIONS.CREATE)}
              className="anlt-btn anlt-btn--crud">
                Create {buttonText}
            </ModalToggler>
          </div>
      </header>
    );
  }
}

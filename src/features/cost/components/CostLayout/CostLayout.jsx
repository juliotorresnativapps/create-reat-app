import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Breakdown from '../BreakdownView';
import Cost from '../CostView';
import Score from '../ScoreView';

import { Route, Switch } from 'react-router-dom';

export default class CostLayout extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    authToken: PropTypes.string.isRequired,
    history: PropTypes.object.isRequired,
    medications: PropTypes.array,
    parts: PropTypes.array,
    partsHistory: PropTypes.array,
    trends: PropTypes.array,
    watchingD: PropTypes.bool
  };

  componentDidMount() {
    const node = '59c2672d14e9a2262dd71a16';
    this.props.actions.getCosts(this.props.authToken, node);
  }

  render() {
    const { history, actions, parts, trends, medications, partsHistory, watchingD } = this.props;

    return (
      <Switch>
        <Route path="/dashboard/analytics/cost/score" render={() => (
          <Score history={history}
            filterByName={actions.filterByName}
            parts={parts} />
        )} />
        <Route path="/dashboard/analytics/cost/breakdown" render={() => (
          <Breakdown
            addMedications={actions.addMedications}
            filterByName={actions.filterByName}
            history={history}
            parts={parts} />
        )} />
        <Route path="/dashboard/analytics/cost" render={() => (
          <Cost history={history}
            addMedications={actions.addMedications}
            parts={parts}
            partsHistory={partsHistory}
            trends={trends}
            medications={medications}
            filterByName={actions.filterByName}
            undo={actions.undo}
            watchingD={watchingD} />
        )} />;
      </Switch>
    );
  }
}

/**
 * 
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import 'react-date-picker/index.css';
import FilterByPeriod from '../../../../components/FilterByPeriod';
import FilterByPlayer from './FilterByPlayer';
import Export from '../../../../components/Export';
import Share from '../../../../components/Share';
import Subscribe from '../../../../components/Subscribe';
import DropdownMenu from '../../../../components/DropdownMenu';
import ToolbarComponent from '../../../../components/ToolbarComponent';

/**
 * 
 */
export default class Toolbar extends React.Component {

    /**
     * 
     */
    static propTypes = {
        benchmarkList: PropTypes.array,
        networkList: PropTypes.array,
        parientStatusList: PropTypes.array,
        periodOfTimeList: PropTypes.array,
        scoresList: PropTypes.array
    }

    /**
     * 
     */
    state = {
        openFilterPeriod: false,
        openFilterPlayer: false,

        openExport: false,
        openShare: false,
        openSubscribe: false,

        parientStatus: '',
        benchmark: '',
        scores: '',
    }

    /**
     * 
     * 
     * @param {*} keyName
     * @param {*} value
     * @param {*} e
     */
    handleFilter = (keyName, value, onClick) => (e) => {
        e.preventDefault();
        if (typeof onClick === 'function') {
            if (onClick() === false) {
                return;
            }
        }
        this.setState({
            [keyName]: value
        });
    }

    /**
     * 
     * 
     * @param {*} keyName
     * @param {*} displayName
     * @param {*} List
     */
    RenderMenuItem = (keyName, displayName, List) => (
        <li className="dropdown">
            <a href="" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                {displayName} <span className="caret" />
            </a>
            <ul className="dropdown-menu">
                {List.map((v, i) => (
                    <li className={classnames({active: this.state[keyName] === v.value})} key={i}>
                        <a
                            href=""
                            onClick={this.handleFilter(keyName, v)}>
                            {v.displayName}
                        </a>
                    </li>
                ))}
            </ul>
        </li>
    );

    /**
     * 
     */
    handleClose = () => {
        this.setState({
            openFilterPeriod: false,
            openFilterPlayer: false,

            openExport: false,
            openShare: false,
            openSuscribe: false
        });
    }

    /**
     * 
     */
    handleCloseFilterPeriod = () => {
        this.setState({
            openFilterPeriod: false,
            periodOfTime: 'custom'
        });
    }

    /**
     * 
     * 
     * @param {*} e
     */
    handleFilterPeriodOfTime = (e) => {
        e.preventDefault();
        this.setState({ openFilterPeriod: true });
    }

    /**
     * 
     * 
     * @param {*} e
     */
    handleFilterPlayer = (e) => {
        e.preventDefault();
        this.setState({ openFilterPlayer: true });
    }

    /**
     * 
     * 
     * @param {*} e
     */
    handleFilters = (e) => e.preventDefault();
    
    /**
     * 
     * 
     * @param {*} e
     */
    handleSaveFavorites = (e) => e.preventDefault();

    /**
     * 
     * 
     * @param {*} e
     */
    handleLoadFavorites = (e) => e.preventDefault();

    /**
     * 
     * 
     * @param {*} e
     */
    handleExport = (e) => {
        e.preventDefault();
        this.setState({openExport: true});
    }

    /**
     * 
     * 
     * @param {*} e
     */
    handleShare = (e) => {
        e.preventDefault();
        this.setState({openShare: true});
    }

    /**
     * 
     * 
     * @param {*} e
     */
    handleSuscribe = (e) => {
        e.preventDefault();
        this.setState({openSuscribe: true});
    }

    /**
     * 
     */
    render() {
        const { parientStatusList, benchmarkList, scoresList, periodOfTimeList } = this.props;
        const _periodOfTimeList = [
            ...periodOfTimeList, 
            {
                value: 'custom',
                displayName: 'Custom',
                onClick: () => {
                    this.setState({openFilterPeriod: true});
                    return false;
                }
            }
        ];
        return (
            <ToolbarComponent>
                <ul className="nav navbar-nav">
                    <li><a href="" onClick={this.handleFilterPlayer}>Player</a></li>
                    {<DropdownMenu
                        active={this.state['parientStatus']}
                        keyName='parientStatus'
                        displayName='Parient status'
                        list={parientStatusList}
                        onChange={this.handleFilter}
                    />}

                    {<DropdownMenu
                        active={this.state['benchmark']}
                        keyName='benchmark'
                        displayName='Benchmark'
                        list={benchmarkList}
                        onChange={this.handleFilter}
                    />}

                    {<DropdownMenu
                        active={this.state['scores']}
                        keyName='scores'
                        displayName='Scores'
                        list={scoresList}
                        onChange={this.handleFilter}
                    />}

                    {<DropdownMenu
                        active={this.state['periodOfTime']}
                        keyName='periodOfTime'
                        displayName='Period of time'
                        list={_periodOfTimeList}
                        onChange={this.handleFilter}
                    />}
                </ul>

                <ul className="nav navbar-nav navbar-right">
                    <li className="dropdown">
                        <a href="" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                            ...
                        </a>
                        <ul className="dropdown-menu">
                            <li><a href="" onClick={this.handleFilters}>Filters</a></li>
                            <li><a href="" onClick={this.handleSaveFavorites}>Save Favorites</a></li>
                            <li><a href="" onClick={this.handleLoadFavorites}>Load Favorites</a></li>
                            <li><a href="" onClick={this.handleExport}>Export</a></li>
                            <li><a href="" onClick={this.handleShare}>Share</a></li>
                            <li><a href="" onClick={this.handleSuscribe}>Suscribe</a></li>
                        </ul>
                    </li>
                </ul>
                <FilterByPeriod open={this.state.openFilterPeriod} onClose={this.handleCloseFilterPeriod} {...this.props} />
                <FilterByPlayer open={this.state.openFilterPlayer} onClose={this.handleClose} {...this.props} />
                <Export open={this.state.openExport} onClose={this.handleClose} {...this.props} />
                <Share open={this.state.openShare} onClose={this.handleClose} {...this.props} />
                <Subscribe open={this.state.openSubscribe} onClose={this.handleClose} {...this.props} />
            </ToolbarComponent>
        );
    }
}
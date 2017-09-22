/**
 * 
 */
import React from 'react';
import classnames from 'classnames';
import 'react-date-picker/index.css';
import Export from '../../../../components/Export';
import Share from '../../../../components/Share';
import Subscribe from '../../../../components/Subscribe';
import Filter from '../../../../components/Filter';
import ToolbarComponent from '../../../../components/ToolbarComponent';
import DropdownMenu from '../../../../components/DropdownMenu';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { fetch as diagnosisCategoriesFetch } from '../../../../app/actions/diagnosisCategories';
import { fetch as diagnosisFetch } from '../../../../app/actions/diagnosis';
import { fetch as procedureCategoriesFetch } from '../../../../app/actions/procedureCategories';
import { fetch as procedureFetch } from '../../../../app/actions/procedure';

import { levelComponentsList, claimTypeList } from './data';

/**
 * 
 */
export default class Toolbar extends React.Component {

    /**
     * 
     */
    static propTypes = {
        benchmarkList: PropTypes.array,
        medicationsList: PropTypes.array,
        parientStatusList: PropTypes.array,
        pharmaciesList: PropTypes.array,
    }

    /**
     * 
     */
    state = {
        openFilterPeriod: false,
        openFilterPlayer: false,
        openDiagnosis: false,
        openProcedure: false,

        openExport: false,
        openShare: false,
        openSubscribe: false,
        openTop: false,

        top: 0,
        parientStatus: '',
        benchmark: '',
        scores: '',
        medication: '',
        node: PropTypes.string,

        levelComponentsList: [],
        benchmarkList: [],
        medicationsList: []
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
            openDiagnosis: false,
            openProcedure: false,

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

    handleDiagnosis = (e) => {
        e.preventDefault();
        this.setState({openDiagnosis: true});
    }

    handleProcedure = (e) => {
        e.preventDefault();
        this.setState({openProcedure: true});
    }

    handleOpenTop = (e) => {
        e.preventDefault();
        this.setState({openTop: !this.state.openTop});
    }

    handleTopChange = (value) => {
        this.setState({
            top: value
        });
    }

    handleAfterChange = () => setTimeout(() => this.setState({openTop: !this.state.openTop}), 1000);

    /**
     * 
     */
    render() {
        const { benchmarkList, pharmaciesList, medicationsList, parientStatusList, node } = this.props;
        const { openTop, top } = this.state;
        return (
            <ToolbarComponent>
                <ul className="nav navbar-nav">
                    {<DropdownMenu
                        active={this.state['levelComponents']}
                        keyName='levelComponents'
                        displayName='Level Components'
                        list={levelComponentsList}
                        onChange={this.handleFilter}
                    />}

                    {<DropdownMenu
                        active={this.state['claimType']}
                        keyName='claimType'
                        displayName='Claim Type'
                        list={claimTypeList}
                        onChange={this.handleFilter}
                    />}

                    {<DropdownMenu
                        active={this.state['parientStatus']}
                        keyName='parientStatus'
                        displayName='Parient status'
                        list={parientStatusList}
                        onChange={this.handleFilter}
                    />}

                    <li><a href="" onClick={this.handleFilterPlayer}>Player</a></li>
                    <li><a href="" onClick={this.handleDiagnosis}>Diagnosis</a></li>
                    <li><a href="" onClick={this.handleProcedure}>Procedure</a></li>

                    <li className="dropdown">
                        <a onClick={this.handleOpenTop} href="" className="dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false">
                            Top <span className="caret" />
                        </a>
                        <ul style={{display: openTop ? 'block': 'none'}} className="dropdown-menu">
                            <li className={classnames({open: openTop})}>
                                <div style={{padding: 10}}>
                                    <Slider min={1} max={1000} value={top} onAfterChange={this.handleAfterChange} onChange={this.handleTopChange} />
                                    {top}
                                </div>
                            </li>
                        </ul>
                    </li>

                    {<DropdownMenu
                        active={this.state['benchmark']}
                        keyName='benchmark'
                        displayName='Benchmark'
                        list={benchmarkList}
                        onChange={this.handleFilter}
                    />}

                    {<DropdownMenu
                        active={this.state['pharmacy']}
                        keyName='pharmacy'
                        displayName='Pharmacy'
                        list={pharmaciesList}
                        onChange={this.handleFilter}
                        displayValue='name'
                        keyValue='npi'
                    />}

                    {<DropdownMenu
                        active={this.state['medication']}
                        keyName='medication'
                        displayName='Medication'
                        list={medicationsList}
                        onChange={this.handleFilter}
                        displayValue='cat'
                        keyValue='ndc'
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

                <Export open={this.state.openExport} onClose={this.handleClose} {...this.props} />
                <Share open={this.state.openShare} onClose={this.handleClose} {...this.props} />
                <Subscribe open={this.state.openSubscribe} onClose={this.handleClose} {...this.props} />
                <Filter
                    categoryFetch={diagnosisCategoriesFetch}
                    detailsFetch={diagnosisFetch}
                    open={this.state.openDiagnosis}
                    onClose={this.handleClose}
                    category={{ display: 'category', code: 'code' }}
                    detail={{ display: 'description' }}
                    {...this.props} />
                <Filter
                    categoryFetch={procedureCategoriesFetch}
                    detailsFetch={procedureFetch}
                    open={this.state.openProcedure}
                    onClose={this.handleClose} node={node}
                    category={{ display: 'cat', code: 'code' }}
                    detail={{ display: 'description_abbrv' }}
                    {...this.props} />
            </ToolbarComponent>
        );
    }
}

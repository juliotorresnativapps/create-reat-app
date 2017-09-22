
import React from 'react';
import { ModalContainer, ModalDialog } from 'react-modal-dialog';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './index.css';

const detailExists = (details, category, value) => {
    for (let i = 0; i < details.length; i++) {
        if (details[i].category === category && details[i].details === value) {
            return i;
        }
    }
    return -1;
};

const search = (data = [], column = 'id', value) => {
    const _value = value.replace(/\s+/i, ' ').trim().split(' ');
    const searchs = [];
    for (let i = 0; i < _value.length; i++) {
        searchs.push(new RegExp(`.*(${_value[i]}).*`, 'i'));
    }
    const result = [];
    for(let i = 0; i < data.length; i++) {
        let found = 0;
        for (var j = 0; j < searchs.length; j++) {
            if (searchs[j].test(data[i][column])) {
                found++;
            }
        }
        if (found === searchs.length) {
            result.push(data[i]);
        }
    }
    return result;
};

export default class details extends React.Component {

    /**
     * 
     */
    static propTypes = {
        authToken: PropTypes.string,
        category: PropTypes.object,
        categoryFetch: PropTypes.func,
        detail: PropTypes.object,
        detailsFetch: PropTypes.func,
        dispatch: PropTypes.func,
        node: PropTypes.string,
        onClose: PropTypes.func,
        onSuccess: PropTypes.func,
        open: PropTypes.bool
    }

    /**
     * 
     */
    state = {
        categorySelect: -1,
        detailsSelect: [],
        categories: [],
        details: [],
    }

    componentWillMount() {
        const {dispatch,authToken,categoryFetch,node} = this.props;
        dispatch(categoryFetch({authToken: authToken, node}))
            .then((result) => {
                this.cacheCategories = result;
                this.setState({categories: result});
            })
            .catch((err) => {
            });
    }

    cacheCategories = [];
    cacheDetails = {};

    /**
     * 
     */
    handleClose = () => {
        const { onClose } = this.props;
        if (typeof onClose === 'function') {
            onClose();
        }
    }

    handleSelectCategory = (value) => () => {
        const {dispatch,authToken,detailsFetch,node, category} = this.props;
        this.setState({
            categorySelect: value
        });
        if (this.cacheDetails[value] === undefined) {
            this.setState({
                details: []
            });
            let oid;
            const select = this.cacheCategories[value];
            if (category.code !== undefined) {
                oid = select[category.code];
            } else {
                oid = select._id.$oid;
            }            
            dispatch(detailsFetch({authToken: authToken, category: oid, node: node}))
                .then((result) => {
                    this.cacheDetails[value] = result;
                    this.setState({
                        details: result
                    });
                })
                .catch((err) => {
                    console.log(err)
                });
                
        } else {
            this.setState({
                details: this.cacheDetails[value]
            });
        }
    }

    handleSelectdetails = (category, value) => () => {
        const detailsSelect = this.state.detailsSelect;
        const pos = detailExists(detailsSelect, category, value);
        if (pos === -1) {
            this.setState({
                detailsSelect: [
                    ...detailsSelect, 
                    {
                        category: category, 
                        details: value
                    }
                ]
            });
        } else {
            detailsSelect.splice(pos, 1);
            this.setState({
                detailsSelect: detailsSelect
            });
        }
    }

    handleRemove = (category, details) => (e) => {
        e.preventDefault();
        const detailsSelect = this.state.detailsSelect;
        for (let i = 0; i < detailsSelect.length; i++) {
            if (detailsSelect[i].category === category && detailsSelect[i].details === details) {
                detailsSelect.splice(i, 1);
                this.setState({
                    detailsSelect: detailsSelect
                });
                return;
            }
        }
    }

    handlePressEnter = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    }

    handleSearchCategory = (e) => {
        const value = e.target.value;
        const data = this.cacheCategories;
        this.setState({
            categories: search(data, 'category', value)
        });
    }

    handleSearchdetails = (e) => {
        const value = e.target.value;
        const { categorySelect } = this.state;
        const data = this.cacheDetails[categorySelect];
        this.setState({
            details: search(data, 'description', value)
        });
    }

    renderdetails = ({categorySelect, details}) => {
        const { category, detail } = this.props;
        const data = this.cacheDetails[categorySelect]||[];
        return (
            <li className='list-group-item' style={{borderLeft: 'none', borderRight: 'none', display: 'flex'}}>
                <div style={{flex: 1, display: 'inline'}}>
                    <div onClick={this.handleSelectCategory(categorySelect)} style={{display: 'inline-block', width: '50%', verticalAlign: 'top'}}>
                        {this.cacheCategories[categorySelect][category.display]}
                    </div>
                    <div style={{display: 'inline-block', width: '50%', verticalAlign: 'top'}}>
                        {data[details][detail.display]}
                    </div>
                </div>
                <div style={{float: 'right'}}>
                    <a href='' onClick={this.handleRemove(categorySelect, details)} style={{margin: 5, fontWeight: 'bold', color: 'black'}}>&times;</a>
                </div>
            </li>
        );
    };

    handleApply = () => {
        const { onSuccess } = this.props;
        if (typeof onSuccess === 'function') {
            const { detailsSelect } = this.state;
            this.props.onSuccess(detailsSelect);
        }
        this.handleClose();
    }

    render() {
        const { open, category, detail } = this.props;
        const { categories, categorySelect } = this.state;
        const details = this.cacheDetails[categorySelect]||[];
        return (
            <div>
                {open ? <ModalContainer onClose={this.handleClose}>
                    <ModalDialog onClose={this.handleClose}>
                        <div className="row" style={{height: 600, maxWidth: 1000, margin: '-20px -20px -20px -20px', padding: 0, cursor: 'pointer',overflowY: 'none'}}>
                            <div className="col col-lg-3" style={{backgroundColor: '#f5f6ff', height: '100%', padding: '25px 5px 5px 20px', margin: '0 0 -20px 0'}}>
                                <form className="bd-search d-flex align-items-center">
                                    <input
                                        onKeyPress={this.handlePressEnter}
                                        onChange={this.handleSearchCategory}
                                        className="form-control ds-input"
                                        placeholder="Search Category"
                                        style={{position: 'relative', verticalAlign: 'top', backgroundColor: 'rgba(0,0,0,0)'}}
                                        type="search" />
                                </form>
                                <br />
                                <ul className="list-group" style={{overflowY: 'scroll', height: 500}}>
                                    {categories.map((v, i) => {
                                        const classNames = classnames({'list-group-item': true, active: categorySelect === i});
                                        return (
                                            <li style={{borderLeft: 'none', borderRight: 'none', backgroundColor: 'rgba(0, 0, 0, 0)'}} onClick={this.handleSelectCategory(i)} className={classNames} key={i}>
                                                {v[category.display]} {(v.icd||{}).code_id}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                            <div className="col col-lg-3" style={{height: '100%', padding: '25px 5px 5px 20px', margin: '0 0 -20px 0'}}>
                                <form className="bd-search d-flex align-items-center">
                                    <input
                                        onKeyPress={this.handlePressEnter}
                                        onChange={this.handleSearchdetails}
                                        className="form-control ds-input"
                                        placeholder="Search details"
                                        style={{position: 'relative', verticalAlign: 'top'}}
                                        type="search" />
                                </form>
                                <br />
                                {this.state.categorySelect >= 0 ?
                                <ul className="list-group" style={{overflowY: 'scroll', height: 500}}>
                                    {details.map((v, i) => {
                                        const classNames = classnames({
                                            'list-group-item': true, 
                                            active: detailExists(this.state.detailsSelect, categorySelect, i) >= 0
                                        });
                                        return (
                                            <li style={{borderLeft: 'none', borderRight: 'none'}} onClick={this.handleSelectdetails(categorySelect, i)} className={classNames} key={i}>
                                                {v[detail.display]}
                                            </li>
                                        );
                                    })}
                                </ul>: false}
                            </div>
                            <div className="col col-lg-6" style={{height: '100%', margin: '0 0 -20px 0'}}>
                                <h3 style={{margin: '30px 0 32px 0'}}>Selected details</h3>
                                <ul style={{overflowY: 'auto', height: 450}}>
                                    {this.state.detailsSelect.map((v, i) => (
                                        <this.renderdetails key={i} categorySelect={v.category} details={v.details} />
                                    ))}
                                </ul>
                                <div style={{float: 'right'}}>
                                    <button className='btn btn-primary' onClick={this.handleApply}>
                                        Apply
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                    </ModalDialog>
                </ModalContainer> : false}
            </div>
        );
    }
}
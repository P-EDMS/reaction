import React, {Component, PropTypes} from 'react';
import ReactDOM, {findDOMNode} from 'react-dom';
import {VisibilityFilters, VisibilityMapFilters} from './actions';

export default class Footer extends Component{

    renderFilter(filter, filterText, index, length) {
        return <span key={index} >
            <a onClick={()=>this.props.onFilterChange(filter)} href='#'>{filterText}</a>
            {(index+1 === length)? '': ', '}
        </span>
    }

    render() {

        const filterDOM = VisibilityMapFilters.map((fm, index)=>
            this.renderFilter(fm[0], fm[1], index, length)
        );


        return (
            <div>
                Show:<span>{filterDOM}</span>
            </div>
        );
    }
};

Footer.propTypes = {
    onFilterChange: PropTypes.func.isRequired,
    filter: PropTypes.oneOf([
        VisibilityFilters.SHOW_ALL,
        VisibilityFilters.SHOW_COMPLETED,
        VisibilityFilters.SHOW_ACTIVE
    ]).isRequired
};
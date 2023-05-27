import React from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import { FilterWrapper } from "./Filter.styled";

const Filter = ({filter, onChange}) => {
    const idForFilter = nanoid();
        
    return (
        <FilterWrapper>
            <label htmlFor={idForFilter}>Find contacts by name</label>
            <input id={idForFilter}
                type="text"
                name="filter"
                value={filter}
                onChange={onChange}
            />
        </FilterWrapper>
    )
}

export default Filter;

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}
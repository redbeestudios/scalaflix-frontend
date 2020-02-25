import { LEAST_VIEWED, MOST_VIEWED } from '../../constants/feed/filterHeader';
import React from 'react';
import Container from '@material-ui/core/Container';
import FilterButtonContainer from '../../containers/feed/FilterButtonContainer';

const FilterHeader = () => {
    return (
        <Container maxWidth="sm">
            <FilterButtonContainer filter={MOST_VIEWED}>Most Viewed</FilterButtonContainer>
            <FilterButtonContainer filter={LEAST_VIEWED}>Least Viewed</FilterButtonContainer>
        </Container>
    );
};

export default FilterHeader;

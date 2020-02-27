import { LEAST_VIEWED, MOST_VIEWED } from '../../constants/feed/filterHeader';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import FilterButtonContainer from '../../containers/feed/FilterButtonContainer';

const FilterHeader = () => {
    return (
        <Grid container justify="center" spacing={2}>
            <Grid item xs={5}>
                <FilterButtonContainer filter={MOST_VIEWED}>Most Viewed</FilterButtonContainer>
            </Grid>
            <Grid item xs={5}> 
                <FilterButtonContainer filter={LEAST_VIEWED}>Least Viewed</FilterButtonContainer>
            </Grid>
        </Grid>
    );
};

export default FilterHeader;

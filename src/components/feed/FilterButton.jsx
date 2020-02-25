import Button from '@material-ui/core/Button';
import React from 'react';

const FilterButton = ({
    active,
    children,
    onClick
  }) => { return (
        <Button
            variant={active ? "contained" : "outlined"}
            color="secondary"
            onClick={ e => {
                e.preventDefault();
                onClick();
              }}
        >{children}</Button>
    )
};

export default FilterButton;

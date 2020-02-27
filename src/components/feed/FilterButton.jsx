import Button from '@material-ui/core/Button';
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    grid: {
      background: theme.palette.background.default,
      color: theme.palette.background.default,
    },
    button: {
      margin: theme.spacing(2)
    }
  }));

const FilterButton = ({
    active,
    children,
    onClick
  }) => { 
      const classes = useStyles();
      return (
        <Button className={classes.button}
            variant={active ? "contained" : "outlined"}
            color="secondary"
            onClick={ e => {
                e.preventDefault();
                onClick();
              }}
        >
            {children}
        </Button>
    )
};

export default FilterButton;

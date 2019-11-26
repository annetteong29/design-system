import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import ListItemText from '@material-ui/core/ListItemText'
import Select from '@material-ui/core/Select'
import Checkbox from '@material-ui/core/Checkbox'
import Chip from '@material-ui/core/Chip'

const ALEX_ORANGE = "#f15625"

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    "data-testid": "state-filter-options",
    style: {
      marginTop: 60,
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      minWidth: 180,
    },
  },
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
    '& label.Mui-focused': {
      color: ALEX_ORANGE,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: ALEX_ORANGE,
    }
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    marginLeft: 5,
    height: 19
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
  checkbox: {
    color: ALEX_ORANGE,
    '&$checked': {
      color: ALEX_ORANGE,
    }
  },
  menuItem: {
    '&.Mui-selected': {
      backgroundColor: "rgb(0,0,0,0)"
    }
  }
}))

const onChange = handleChange => event => {
  handleChange(event.target.value)
}

export default function MultiValueEnumField (props) {
  const classes = useStyles()
  const { value, options, handleChange, label, ...rest } = props

  return (
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="select-multiple-chip">{label}</InputLabel>
      <Select
        {...rest}
        multiple
        value={value}
        onChange={onChange(handleChange)}
        input={<Input id="select-multiple-chip" />}
        renderValue={selected => (
          <div className={classes.chips}>
            {selected.map(value => (
              <Chip key={value} label={value} className={classes.chip} />
            ))}
          </div>
        )}
        MenuProps={MenuProps}
      >
        {options.map(item => (
          <MenuItem
            data-testid={`option-${item.toLowerCase()}`}
            key={item}
            value={item}
            selected={false}
            className={classes.menuItem}
          >
            <Checkbox
              data-testid="checkbox"
              className={classes.checkbox}
              color="default"
              checked={value.indexOf(item) > -1}
            />
            <ListItemText
              primary={item}
              primaryTypographyProps={{variant: "body2"}}
            />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

// MultiValueEnumField.displayName = 'MultiValueEnumField';

MultiValueEnumField.propTypes = {
  options: PropTypes.array.isRequired,
  value: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
}

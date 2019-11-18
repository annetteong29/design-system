import React from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types'
import EditIcon from '@material-ui/icons/Edit';
import AccountTreeOutlinedIcon from '@material-ui/icons/AccountTreeOutlined';
import IconButton from '@material-ui/core/IconButton';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';
import Stop from '@material-ui/icons/Stop';
import { withStyles } from '@material-ui/styles';
import ToolTip from '@material-ui/core/Tooltip'
import { Link as RouterLink } from 'react-router-dom'
import CloseIcon from '@material-ui/icons/Close'

const BUTTON_TYPES = {
  SAVE: 'SAVE',
  EDIT: 'EDIT',
  CLEAR: 'CLEAR',
  CLEAR_SELECTED: 'CLEAR_SELECTED',
  VIEW: 'VIEW',
  STOP_WORKFLOW: 'STOP_WORKFLOW',
  DIAGRAM: 'DIAGRAM',
  INFO: 'INFO',
  CLOSE: 'CLOSE',
}
const ORANGE_FULL = "rgba(241, 86, 37, 1.0)"
const ORANGE_HOVER = "rgba(241, 86, 37, 0.5)"
const NO_COLOUR = "rgba(0, 0, 0, 0)"
const GREY_HOVER = "rgba(0, 0, 0, 0.08)"
const GREY_FULL = "rgba(0, 0, 0, 0.20)"
const GREY_ARROW = "rgba(0, 0, 0, 0.54)"

//TODO: Need to move this css to a separate file.

const styles = {
  leftIcon: {
    marginRight: "8px"
  },
  rightIcon: {
    marginLeft: "8px",
  },
  iconClear: {
    color: ORANGE_FULL,
    marginLeft: "5px",
    padding: "0px",
    '&:focus': {
      backgroundColor: NO_COLOUR,
      color: ORANGE_FULL,
    },
    '&:hover': {
      backgroundColor: NO_COLOUR,
      color: ORANGE_HOVER,
    },
    '&:active': {
      backgroundColor: NO_COLOUR,
      color: ORANGE_FULL,
    }
  },
  iconInfo: {
    color: GREY_FULL,
    marginLeft: "5px",
    padding: "0px",
    '&:focus': {
      backgroundColor: NO_COLOUR,
      color: GREY_FULL,
    },
    '&:hover': {
      backgroundColor: NO_COLOUR,
      color: GREY_HOVER,
    },
    '&:active': {
      backgroundColor: NO_COLOUR,
      color: GREY_FULL,
    }
  },
  iconView: {
    padding: "2px 5px 2px 8px;",
    borderRadius: "10%",
    backgroundColor: GREY_FULL,
    '&:hover': {
      backgroundColor: GREY_HOVER,
    },
    '&:active': {
      backgroundColor: GREY_FULL,
    },
    '&:focus': {
      backgroundColor: GREY_FULL,
      color: GREY_ARROW,
    },
  },
  iconDiagram: {
    padding: "2px 6.5px 2px 6.5px;",
    marginLeft: "5px",
    borderRadius: "10%",
    backgroundColor: GREY_FULL,
    '&:hover': {
      backgroundColor: GREY_HOVER,
    },
    '&:active': {
      backgroundColor: GREY_FULL,
    },
    '&:focus': {
      backgroundColor: GREY_FULL,
      color: GREY_ARROW,
    },
  },
  iconClose: {
    width: 24,
    height: 24,
    verticalAlign: 'top',
    top: 0,
    right: 0,
    padding: 0
  },
  iconSmall: {
    fontSize: "1.125rem",
  },
  iconStop: {
    marginLeft: '10px',
    padding: "2px 5px 2px 5px;",
    borderRadius: "10%",
    backgroundColor: GREY_FULL,
    '&:hover': {
      backgroundColor: GREY_HOVER,
    },
    '&:active': {
      backgroundColor: GREY_FULL,
    },
    '&:focus': {
      backgroundColor: GREY_FULL,
      color: GREY_ARROW,
    },
  }
};

class ConfigButton extends React.Component {

  constructor(props) {
    super(props)
  }

  iconLabelButtons = () => {
    const { onClick, buttonName, buttonType, classes, toolTipText, to } = this.props;

    switch (buttonType) {
      case BUTTON_TYPES.SAVE:
      case BUTTON_TYPES.CLEAR:
        return (
          <Button
            variant="contained"
            size="small"
            className={classes.button}
            onClick={onClick}
          >
            {buttonName}
          </Button>
        )
      case BUTTON_TYPES.VIEW:
        return (
          <ToolTip title={toolTipText}>
            <IconButton
              data-testid="view"
              className={classes.iconView}
              onClick={onClick}
              component={RouterLink}
              to={to}
            >
              <SubdirectoryArrowRightIcon/>
            </IconButton>
          </ToolTip>
        )
      case BUTTON_TYPES.EDIT:
        return (
          <Button
            variant="contained"
            size="small"
            className={classes.button}
            onClick={onClick}
            data-testid={'edit-button'}
          >
            <EditIcon className={clsx(classes.leftIcon, classes.iconSmall)} />
            {buttonName}
          </Button>
        )
      case BUTTON_TYPES.CLEAR_SELECTED:
        return (
          <ToolTip title={toolTipText}>
            <IconButton
              data-testid="clear-selected"
              className={classes.iconClear}
              onClick={onClick}
              disableRipple
              size="small"
            >
              <HighlightOffIcon
                className={classes.iconSmall}
              />
            </IconButton>
          </ToolTip>
        )
      case BUTTON_TYPES.STOP_WORKFLOW:
        return (
          <ToolTip title={toolTipText}>
            <IconButton
              data-testid="stop-workflow"
              className={classes.iconStop}
              onClick={onClick}
            >
              <Stop/>
            </IconButton>
          </ToolTip>
        )
      case BUTTON_TYPES.DIAGRAM:
        return (
          <ToolTip title={toolTipText}>
            <IconButton
              className={classes.iconDiagram}
              onClick={onClick}
              disableRipple
              size="small"
            >
              <AccountTreeOutlinedIcon/>
            </IconButton>
          </ToolTip>
        )
      case BUTTON_TYPES.INFO:
        return (
          <ToolTip title={toolTipText}>
            <IconButton
              className={classes.iconInfo}
              onClick={onClick}
              disableRipple
              size="small"
            >
              <InfoOutlinedIcon/>
            </IconButton>
          </ToolTip>
        )
      case BUTTON_TYPES.CLOSE:
        return (
          <ToolTip title={toolTipText}>
            <IconButton
              className={classes.iconClose}
              onClick={onClick}
              disableRipple
            >
              <CloseIcon/>
            </IconButton>
          </ToolTip>
        )
      default:
        return ''
    }
  }

  render() {
    const button = this.iconLabelButtons()

    return button
  }
}

ConfigButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ConfigButton);

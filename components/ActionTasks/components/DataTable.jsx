/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, TablePagination, Button, CircularProgress, withStyles } from '@material-ui/core';
import Refresh from '@material-ui/icons/Refresh';
import TablePaginationActionsWrapped from '@material-ui/core/TablePagination/TablePaginationActions';
import css from '../tasks.css';
import PropTypes from 'prop-types';

const styles = theme => ({
  padded: {
    padding: '30px',
    color: '#f15625',
  },
  clickable: {
    cursor: 'pointer',
  },
})

class DataTable extends Component {
  constructor(props) {
    super(props)

    this.state = {
      rowsPerPage: 10,
      page: 0,
    }
  }

  /**
   * Handle click on row, executes handleClick passed in props (if passed), then highlights row.
   */
  handleClick = (task) => {
    this.props.handleClick(task)
  }

  /**
   * Sets new page in state.
   */
  handleChangePage = (e, page) => {
    this.setState({ page })
  }

  /**
   * Sets new rowsPerPage value in state.
   * Also changes the page so that the current top record remains visible
   * This fixes behaviour where on the last page, changing the rowsPerPage
   * would show no rows and have a strange current first row displayed (ie. 11-8 of 8)
   */
  handleChangeRowsPerPage = (e) => {
    const newRowsPerPage = parseInt(e.target.value, 10)
    this.setState((state) => {
      const currentFirstRow = (state.rowsPerPage * state.page) + 1
      const newPage = Math.trunc(currentFirstRow / newRowsPerPage)
      return {
        rowsPerPage: newRowsPerPage,
        page: newPage,
      }
    })
  }

  /**
   * Refreshes data in table (passed down as prop along with data)
   */
  handleRefresh = () => {
    this.props.refresh()
  }

  render() {
    const { classes, headers, id } = this.props
    const { data, error, loading } = this.props.data

    const { rowsPerPage, page } = this.state

    const taskRow = task =>
      (
        <TableRow
          key={task.id}
          className={classes.clickable}
          onClick={() => this.handleClick(task)}
          hover
        >
          <TableCell />
          {headers.map(header =>
            (<TableCell
              align="left"
              style={{ paddingTop: '8px', paddingBottom: '8px' }}
              key={header.key}
            >
              {task[header.key]}
            </TableCell>))}
        </TableRow>
      )

    // adds empty rows to fill a table for an even look when switching through pages
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - (page * rowsPerPage))

    return (
      <div>
        <Table data-testid="table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Button onClick={this.handleRefresh} style={{ minWidth: 'initial' }}>
                  <Refresh align="center" />
                </Button>
              </TableCell>
              {headers.map(header =>
                (<TableCell
                  align="left"
                  key={header.key}
                >
                  {header.label}
                 </TableCell>))}
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ?
              <TableRow>
                <TableCell
                  colSpan={headers.length + 1}
                  align="center"
                >
                  <CircularProgress className={`${classes.padded} loadingDataProvider`} size={100} />
                </TableCell>
              </TableRow> :
              data.length ?
              // Row structure is declared above in taskRow
              data.slice(page * rowsPerPage, (page * rowsPerPage) + rowsPerPage).map(taskRow) :
              <TableRow>
                <TableCell colSpan={headers.length + 1} align="center">
                  {error || this.props.noDataMessage}
                </TableCell>
              </TableRow>
            }
            {emptyRows > 0 && (
            <TableRow style={{ height: 48 * emptyRows, backgroundColor: 'initital' }}>
              <TableCell colSpan={headers.length + 1} />
            </TableRow>
            )}
          </TableBody>
        </Table>
        <TablePagination
          data-testid="pagination"
          className="mui-pagination"
          component="div"
          rowsPerPageOptions={[10, 20, 30]}
          colSpan={3}
          count={data.length}
          rowsPerPage={this.state.rowsPerPage}
          page={this.state.page}
          SelectProps={{
            native: true,
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
          ActionsComponent={TablePaginationActionsWrapped}
        />
        {this.props.children}
      </div>
    )
  }
}

DataTable.displayName = 'DataTable';

DataTable.propTypes = {
    classes: PropTypes.object,
    // data
    // headers
    handleClick: PropTypes.func,
    noDataMessage: PropTypes.string.isRequired,
    error: PropTypes.bool.isRequired,
    refresh: PropTypes.func.isRequired
}

export default withStyles(styles)(DataTable)

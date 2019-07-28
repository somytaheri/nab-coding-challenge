import React from "react";
import PropTypes from "prop-types";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import { formatDate, formatAMPM } from "../../utilities/timeFormatter";

const DataTable = props => {
  const useStyles = makeStyles(theme => ({
    root: {
      width: "100%",
      marginTop: theme.spacing(3),
      overflowX: "auto",
      boxShadow: "none"
    },
    table: {
      width: "100%"
    }
  }));

  const classes = useStyles();
  const StyledTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white
    },
    body: {
      fontSize: 14
    }
  }))(TableCell);
  const StyledTableRow = withStyles(theme => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.background.default
      }
    }
  }))(TableRow);
  const currencies = props.data.map(item =>
    item.quotes.map(quote => (
      <StyledTableRow key={quote.time}>
        <TableCell> {item.currency}</TableCell>
        <TableCell>{formatDate(item.date)}</TableCell>
        <TableCell>{formatAMPM(quote.time)}</TableCell>
        <TableCell>{quote.price}</TableCell>
      </StyledTableRow>
    ))
  );

  return (
    <Table className={classes.table} size="small">
      <TableHead>
        <TableRow>
          <StyledTableCell>Currency</StyledTableCell>
          <StyledTableCell>Date</StyledTableCell>
          <StyledTableCell>Time</StyledTableCell>
          <StyledTableCell>Price</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>{currencies}</TableBody>
    </Table>
  );
};

DataTable.propTypes = {
  handleProfitCalculate: PropTypes.func,
  data: PropTypes.array
};

export default DataTable;

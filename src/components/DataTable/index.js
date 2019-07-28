import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import formatDate from "../../utilities/dateFormatter";

const DataTable = props => {
  const useStyles = makeStyles(theme => ({
    root: {
      width: "100%",
      marginTop: theme.spacing(3),
      overflowX: "auto",
      boxShadow: "none"
    },
    table: {
      maxWidth: 650
    }
  }));
  const classes = useStyles();
  const currencies = props.data.map(item =>
    item.quotes.map(quote => (
      <TableRow key={quote.time}>
        <TableCell> {item.currency}</TableCell>
        <TableCell>{formatDate(item.date)}</TableCell>
        <TableCell>{quote.time}</TableCell>
        <TableCell>{quote.price}</TableCell>
      </TableRow>
    ))
  );

  return (
    <div>
      <Table className={classes.table} size="small">
        <TableHead>
          <TableRow>
            <TableCell>Currency</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{currencies}</TableBody>
      </Table>

      <button onClick={props.handleProfitCalculate}>
        Calculate best profit
      </button>
    </div>
  );
};

DataTable.propTypes = {
  handleProfitCalculate: PropTypes.func,
  data: PropTypes.array
};

export default DataTable;

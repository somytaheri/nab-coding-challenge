import React from "react";
import PropTypes from "prop-types";

import formatDate from "../../utilities/dateFormatter";

class DataTable extends React.Component {
  render() {
    const currencies = this.props.data.map(item =>
      item.quotes.map(quote => (
        <tr key={quote.time}>
          <td> {item.currency}</td>
          <td>{formatDate(item.date)}</td>
          <td>{quote.time}</td>
          <td>{quote.price}</td>
        </tr>
      ))
    );

    return (
      <div>
        <table>
          <tbody>{currencies}</tbody>
        </table>
        <button onClick={this.props.handleProfitCalculate}>
          Calculate best profit
        </button>
      </div>
    );
  }
}

DataTable.propTypes = {
  handleProfitCalculate: PropTypes.func,
  data: PropTypes.array
};

export default DataTable;

import React from "react";

import formatDate from "../../utilities/dateFormatter";

class DataTable extends React.Component {
  render() {
    let profit = this.props.result.map(item => {
      if (item.lowest) {
        return (
          <div key={item.currency}>
            <p>{formatDate(item.date)} - </p>
            <p>{item.currency} - </p>
            <p>
              <span>{item.lowest.time} - </span>
              <span>${item.lowest.price}</span>
            </p>
            <p>
              <span>{item.highest.time} - </span>
              <span>${item.highest.price}</span>
            </p>
            <p>${(item.highest.price - item.lowest.price).toFixed(2)}</p>
          </div>
        );
      } else {
        return (
          <div key={item.currency}>
            <p>{formatDate(item.date)} - </p>
            <p>{item.currency} - </p>
            <p>
              oh no! there is no profit for today but tomorow is another day
              stay positive
            </p>
          </div>
        );
      }
    });

    return (
      <div>
        <div>{profit}</div>
      </div>
    );
  }
}

export default DataTable;

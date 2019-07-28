import React from "react";
import axios from "axios";

import DataTable from "../DataTable";
import ProfitTable from "../ProfitTable";
import calculateProfit from "./logic";

class Panel extends React.Component {
  state = {
    currencies: [],
    profit: []
  };

  handleProfitCalculate = () => {
    const profit = calculateProfit(this.state.currencies);
    this.setState({
      profit
    });
  };

  async componentDidMount() {
    let { data: currencies } = await axios.get("data.json");
    this.setState({ currencies });
  }

  render() {
    const { currencies, profit } = this.state;
    return (
      <div>
        <DataTable
          data={currencies}
          handleProfitCalculate={this.handleProfitCalculate}
        />
        <ProfitTable result={profit} />
      </div>
    );
  }
}

export default Panel;

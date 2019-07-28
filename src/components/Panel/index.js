import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
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
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={8} md={6}>
            <Paper boxShadow={0}>
              {" "}
              <DataTable
                data={currencies}
                handleProfitCalculate={this.handleProfitCalculate}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Paper boxShadow={0}>
              <ProfitTable result={profit} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Panel;

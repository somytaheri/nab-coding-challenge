import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import axios from "axios";

import DataTable from "../DataTable";
import ProfitTable from "../ProfitTable";
import calculateProfit from "./logic";
const Panel = () => {
  const [currencies, setCurrencies] = useState([]);
  const [profit, setProfit] = useState([]);
  const handleProfitCalculate = currency => {
    let selectedCurrency = currencies.filter(
      item => item.currency === currency
    );
    let profit = calculateProfit(selectedCurrency);
    setProfit(profit);
  };

  useEffect(async () => {
    let { data: currencies } = await axios.get("data.json");
    setCurrencies(currencies);
  }, []);

  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8} md={6}>
          <Paper>
            <DataTable
              data={currencies}
              handleProfitCalculate={handleProfitCalculate}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Paper>
            <ProfitTable result={profit} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Panel;

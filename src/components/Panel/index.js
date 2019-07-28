import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import axios from "axios";

import DataTable from "../DataTable";
import ProfitTable from "../ProfitTable";
import calculateProfit from "./logic";
import SelectForm from "../selectForm/SelectForm";

const Panel = () => {
  const theme = useTheme();
  const useStyles = makeStyles({
    DataTable: {
      [theme.breakpoints.down("xs")]: {
        order: 3
      }
    }
  });
  const classes = useStyles();
  const [currencies, setCurrencies] = useState([]);
  const [profit, setProfit] = useState([]);

  const handleProfitCalculate = currency => {
    let selectedCurrency;
    if (currency !== "All Currencies") {
      selectedCurrency = currencies.filter(item => item.currency === currency);
    } else {
      selectedCurrency = currencies;
    }
    let profit = calculateProfit(selectedCurrency);
    setProfit(profit);
  };

  useEffect(() => {
    async function fetchData() {
      let { data: currencies } = await axios.get("data.json");
      setCurrencies(currencies);
    }
    fetchData();
  }, []);

  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <SelectForm
            data={currencies}
            handleProfitCalculate={handleProfitCalculate}
          />
        </Grid>
        <Grid item xs={12} sm={8} md={6} className={classes.DataTable}>
          <Paper>
            <DataTable data={currencies} />
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

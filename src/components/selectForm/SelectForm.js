import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  select: {
    minWidth: "200px"
  }
}));
const SelectForm = props => {
  const [values, setValues] = useState({
    currency: ""
  });
  function handleChange(e) {
    setValues(oldValues => ({
      ...oldValues,
      [e.target.name]: e.target.value
    }));

    props.handleProfitCalculate(e.target.value);
  }
  const classes = useStyles();
  const currencyOptions = props.data.map(item => (
    <MenuItem value={item.currency} key={item.currency}>
      {item.currency}
    </MenuItem>
  ));
  return (
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="currency">Select a currency</InputLabel>
      <Select
        value={values.currency}
        className={classes.select}
        onChange={handleChange}
        inputProps={{
          name: "currency",
          id: "currency"
        }}
      >
        <MenuItem value="All Currencies">All Currencies</MenuItem>
        {currencyOptions}
      </Select>
    </FormControl>
  );
};

export default SelectForm;

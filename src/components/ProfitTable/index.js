import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import { red } from "@material-ui/core/colors";
import Divider from "@material-ui/core/Divider";

import { formatDate, formatAMPM } from "../../utilities/timeFormatter";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto",
    boxShadow: "none"
  },
  card: {
    marginBottom: "10px"
  },
  avatar: {
    backgroundColor: red[500]
  },
  CardContent: {
    display: "flex",
    justifyContent: "space-between"
  },
  divider: {
    marginTop: "5px",
    marginBottom: "10px"
  },
  title: {
    fontWeight: "bold",
    fontSize: "16px"
  }
}));
const DataTable = props => {
  const classes = useStyles();
  let profit = props.result.map(item => {
    return (
      <Card className={classes.card} key={item.currency} mb={2}>
        <CardHeader
          classes={{
            title: classes.title
          }}
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {item.currency}
            </Avatar>
          }
          title={`Profit: $${
            item.lowest
              ? (item.highest.price - item.lowest.price).toFixed(2)
              : 0
          }`}
          subheader={formatDate(item.date)}
        />
        <Divider />
        <CardContent>
          <div variant="body2" color="textSecondary">
            {item.lowest ? (
              <div>
                <div className={classes.CardContent}>
                  <span>
                    <b>Buy</b>
                  </span>
                  <span>{formatAMPM(item.lowest.time)}</span>
                  <span>${item.lowest.price}</span>
                </div>
                <Divider light className={classes.divider} />
                <div className={classes.CardContent}>
                  <span>
                    <b>Sell</b>
                  </span>
                  <span>{formatAMPM(item.highest.time)}</span>
                  <span>${item.highest.price}</span>
                </div>
              </div>
            ) : (
              <p>
                Ohh no! There is no profit for today.
                <br />
                But tomorow is another day. Stay positive.
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    );
  });

  return <React.Fragment>{profit}</React.Fragment>;
};

export default DataTable;

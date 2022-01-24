import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import React from "react";
import { Paper } from "@material-ui/core";
import TokenCard from "./TokenCard";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

interface GridItemProps {
  note: string;
  classes: any;
}
const GridItem = ({ note, classes }: GridItemProps) => {
  return (
    // From 0 to 600px wide (smart-phones), I take up 12 columns, or the whole device width!
    // From 600-690px wide (tablets), I take up 6 out of 12 columns, so 2 columns fit the screen.
    // From 960px wide and above, I take up 25% of the device (3/12), so 4 columns fit the screen.
    <Grid item xs={12} sm={6} md={3}>
      <TokenCard note={note} />
      {/* <Paper className={classes.paper}>item</Paper> */}
    </Grid>
  );
};

interface TokenCardGridProp {
  notes: string[];
}
const TokenCardGrid = ({ notes }: TokenCardGridProp) => {
  const classes = useStyles();
  return (
    <div className="greenTextBlackBackground">
      <Grid container spacing={1}>
        {notes.map((note) => (
          <GridItem note={note} classes={classes} />
        ))}
      </Grid>
    </div>
  );
};
export default TokenCardGrid;
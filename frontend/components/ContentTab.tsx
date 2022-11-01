import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab/Tab";
import Tabs from "@material-ui/core/Tabs/Tabs";
import React, { useEffect, useState } from "react";
import ContentCardGrid from "./ContentCardGrid";

const useStyles = makeStyles({
  tab: {
    fontSize: "16px",
    fontWeight: 500,
  },
});

interface ContentTabProps {
  creator: string;
  onCreatorProfile: boolean;
}

const ContentTab = ({ creator, onCreatorProfile }: ContentTabProps) => {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let tabs_array = [
    <ContentCardGrid
      creator={creator}
      onCreatorProfile={onCreatorProfile}
      category="Videos"
      key={1}
    />,
    <ContentCardGrid
      creator={creator}
      onCreatorProfile={onCreatorProfile}
      category="Series"
      key={2}
    />,
  ];

  return (
    <div
      style={{
        backgroundColor: "black",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          TabIndicatorProps={{
            style: { backgroundColor: "#3B82F6" },
          }}
          className="nftTabs"
          orientation="vertical"
        >
          <Tab label="Videos" className={classes.tab} />
          <Tab label="Series" className={classes.tab} />
        </Tabs>
      </div>
      <div style={{ width: "90vw" }}>
        <Paper>{tabs_array[value]}</Paper>
      </div>
    </div>
  );
};

export default ContentTab;

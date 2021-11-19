import * as React from "react";
import "./style.scss";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function OurWorkTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="ourWorkTabs__container">
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 2, borderColor: "#e74c3c" }}>
          <Tabs
            variant="scrollable"
            scrollButtons="auto"
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Natural Calamities" {...a11yProps(0)} />
            <Tab label="Animal Welfare" {...a11yProps(1)} />
            <Tab label="Shelter" {...a11yProps(2)} />
            <Tab label="Child Education" {...a11yProps(3)} />
            <Tab label="Pregnant Woman Rescue" {...a11yProps(4)} />
          </Tabs>
        </Box>
        <TabPanel
          className="ourWorkTabs__container__items"
          value={value}
          index={0}
        >
          <div className="images">
            <div className="column">
              <img
                src="https://images.unsplash.com/photo-1633114128814-11fac33f707b?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1637270868031-b28f517e152e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1636886519725-6a048800b5b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=928&q=80"
                alt=""
              />
            </div>
            <div className="column">
              <img
                src="https://images.unsplash.com/photo-1637140548016-882a3f9a819b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1637139500424-2bd66d5edd23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1633114128814-11fac33f707b?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80"
                alt=""
              />
            </div>
            <div className="column">
              <img
                src="https://images.unsplash.com/photo-1637285051313-5316119f852e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1574307469860-7ad5a52e2686?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1637275769153-b5fb9e5647f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80"
                alt=""
              />
            </div>
          </div>
        </TabPanel>
        <TabPanel
          className="ourWorkTabs__container__items"
          value={value}
          index={1}
        >
          <div className="images">
            <div className="column">
              <img
                src="https://images.unsplash.com/photo-1633114128814-11fac33f707b?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1637270868031-b28f517e152e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1636886519725-6a048800b5b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=928&q=80"
                alt=""
              />
            </div>
            <div className="column">
              <img
                src="https://images.unsplash.com/photo-1637140548016-882a3f9a819b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1637139500424-2bd66d5edd23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1633114128814-11fac33f707b?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80"
                alt=""
              />
            </div>
            <div className="column">
              <img
                src="https://images.unsplash.com/photo-1637285051313-5316119f852e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1574307469860-7ad5a52e2686?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1637275769153-b5fb9e5647f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80"
                alt=""
              />
            </div>
          </div>
        </TabPanel>
        <TabPanel
          className="ourWorkTabs__container__items"
          value={value}
          index={2}
        >
          <div className="images">
            <div className="column">
              <img
                src="https://images.unsplash.com/photo-1633114128814-11fac33f707b?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1637270868031-b28f517e152e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1636886519725-6a048800b5b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=928&q=80"
                alt=""
              />
            </div>
            <div className="column">
              <img
                src="https://images.unsplash.com/photo-1637140548016-882a3f9a819b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1637139500424-2bd66d5edd23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1633114128814-11fac33f707b?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80"
                alt=""
              />
            </div>
            <div className="column">
              <img
                src="https://images.unsplash.com/photo-1637285051313-5316119f852e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1574307469860-7ad5a52e2686?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1637275769153-b5fb9e5647f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80"
                alt=""
              />
            </div>
          </div>
        </TabPanel>
        <TabPanel
          className="ourWorkTabs__container__items"
          value={value}
          index={3}
        >
          <div className="images">
            <div className="column">
              <img
                src="https://images.unsplash.com/photo-1633114128814-11fac33f707b?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1637270868031-b28f517e152e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1636886519725-6a048800b5b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=928&q=80"
                alt=""
              />
            </div>
            <div className="column">
              <img
                src="https://images.unsplash.com/photo-1637140548016-882a3f9a819b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1637139500424-2bd66d5edd23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1633114128814-11fac33f707b?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80"
                alt=""
              />
            </div>
            <div className="column">
              <img
                src="https://images.unsplash.com/photo-1637285051313-5316119f852e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1574307469860-7ad5a52e2686?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1637275769153-b5fb9e5647f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80"
                alt=""
              />
            </div>
          </div>
        </TabPanel>
        <TabPanel
          className="ourWorkTabs__container__items"
          value={value}
          index={4}
        >
          <div className="images">
            <div className="column">
              <img
                src="https://images.unsplash.com/photo-1633114128814-11fac33f707b?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1637270868031-b28f517e152e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1636886519725-6a048800b5b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=928&q=80"
                alt=""
              />
            </div>
            <div className="column">
              <img
                src="https://images.unsplash.com/photo-1637140548016-882a3f9a819b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1637139500424-2bd66d5edd23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1633114128814-11fac33f707b?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80"
                alt=""
              />
            </div>
            <div className="column">
              <img
                src="https://images.unsplash.com/photo-1637285051313-5316119f852e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1574307469860-7ad5a52e2686?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1637275769153-b5fb9e5647f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80"
                alt=""
              />
            </div>
          </div>
        </TabPanel>
      </Box>
    </div>
  );
}

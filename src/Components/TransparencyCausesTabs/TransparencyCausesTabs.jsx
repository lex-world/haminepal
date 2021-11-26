import * as React from "react";
import "./style.scss";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

import { Link } from "react-location";

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

export default function TransparencyCausesTabs() {
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return (
        <div className="transparencyCausesTabs__container">
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
        <TabPanel className="events__container__items" value={value} index={0}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <Link className="item" to="/event-focused/?id=1234" key={item}>
              <img
                src="https://images.unsplash.com/photo-1617817546276-80b86dd60151?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="item__image"
                alt="project"
              />
              <div className="item__info">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptate itaque dignissimos provident earum porro eius nesciunt
                dolores quo laudantium! Facere quod consectetur debitis hic
                dignissimos molestiae accusamus quos ipsa magni.
              </div>
              <Button>Donate</Button>
            </Link>
          ))}
        </TabPanel>
        <TabPanel className="events__container__items" value={value} index={1}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <Link className="item" to="/event-focused/?id=1234" key={item}>
              <img
                src="https://images.unsplash.com/photo-1617817546276-80b86dd60151?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="item__image"
                alt="project"
              />
              <div className="item__info">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptate itaque dignissimos provident earum porro eius nesciunt
                dolores quo laudantium! Facere quod consectetur debitis hic
                dignissimos molestiae accusamus quos ipsa magni.
              </div>
              <Button>Donate</Button>
            </Link>
          ))}
        </TabPanel>
        <TabPanel className="events__container__items" value={value} index={2}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <Link className="item" to="/event-focused/?id=1234" key={item}>
              <img
                src="https://images.unsplash.com/photo-1617817546276-80b86dd60151?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="item__image"
                alt="project"
              />
              <div className="item__info">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptate itaque dignissimos provident earum porro eius nesciunt
                dolores quo laudantium! Facere quod consectetur debitis hic
                dignissimos molestiae accusamus quos ipsa magni.
              </div>
              <Button>Donate</Button>
            </Link>
          ))}
        </TabPanel>
        <TabPanel className="events__container__items" value={value} index={3}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <Link className="item" to="/event-focused/?id=1234" key={item}>
              <img
                src="https://images.unsplash.com/photo-1617817546276-80b86dd60151?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="item__image"
                alt="project"
              />
              <div className="item__info">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptate itaque dignissimos provident earum porro eius nesciunt
                dolores quo laudantium! Facere quod consectetur debitis hic
                dignissimos molestiae accusamus quos ipsa magni.
              </div>
              <Button>Donate</Button>
            </Link>
          ))}
        </TabPanel>
        <TabPanel className="events__container__items" value={value} index={4}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <Link className="item" to="/event-focused/?id=1234" key={item}>
              <img
                src="https://images.unsplash.com/photo-1617817546276-80b86dd60151?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="item__image"
                alt="project"
              />
              <div className="item__info">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptate itaque dignissimos provident earum porro eius nesciunt
                dolores quo laudantium! Facere quod consectetur debitis hic
                dignissimos molestiae accusamus quos ipsa magni.
              </div>
              <Button>Donate</Button>
            </Link>
          ))}
        </TabPanel>
      </Box>
        </div>
    )
}

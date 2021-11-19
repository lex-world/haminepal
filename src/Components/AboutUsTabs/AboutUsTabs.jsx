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

export default function AboutUsTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="aboutUsTabs__container">
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 2, borderColor: "#e74c3c" }}>
          <Tabs
            variant="scrollable"
            scrollButtons="auto"
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Who we are" {...a11yProps(0)} />
            <Tab label="What we do" {...a11yProps(1)} />
            <Tab label="How we work" {...a11yProps(2)} />
            <Tab label="Team" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <TabPanel
          className="aboutUsTabs__container__whoWeAre"
          value={value}
          index={0}
        >
          <img
            src="https://images.unsplash.com/photo-1559131397-f94da358f7ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80"
            alt="banner"
          />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            explicabo magni officiis repellat harum repudiandae vero,
            reprehenderit placeat eaque fuga? Excepturi voluptatem pariatur quam
            consectetur quo. Esse ipsam nobis recusandae.
          </p>
        </TabPanel>

        <TabPanel
          className="aboutUsTabs__container__whatWeDo"
          value={value}
          index={1}
        >
          <img
            src="https://images.unsplash.com/photo-1529539795054-3c162aab037a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80"
            alt="banner"
          />

          <h2>Our Mission</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            error unde ut sed sit nesciunt officiis laudantium cum accusantium
            expedita iusto, blanditiis praesentium, dicta quis repudiandae
            placeat minima! Sint, omnis?
          </p>
          <h2>Our Vision</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            error unde ut sed sit nesciunt officiis laudantium cum accusantium
            expedita iusto, blanditiis praesentium, dicta quis repudiandae
            placeat minima! Sint, omnis?
          </p>
          <h2>Our Objectives</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            error unde ut sed sit nesciunt officiis laudantium cum accusantium
            expedita iusto, blanditiis praesentium, dicta quis repudiandae
            placeat minima! Sint, omnis?
            <ul>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nostrum modi adipisci inventore dolorum, placeat veniam
                veritatis dicta minima! Rem laboriosam cupiditate facere totam
                architecto, modi fugiat perferendis unde laudantium quam!
              </li>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nostrum modi adipisci inventore dolorum, placeat veniam
                veritatis dicta minima! Rem laboriosam cupiditate facere totam
                architecto, modi fugiat perferendis unde laudantium quam!
              </li>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nostrum modi adipisci inventore dolorum, placeat veniam
                veritatis dicta minima! Rem laboriosam cupiditate facere totam
                architecto, modi fugiat perferendis unde laudantium quam!
              </li>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nostrum modi adipisci inventore dolorum, placeat veniam
                veritatis dicta minima! Rem laboriosam cupiditate facere totam
                architecto, modi fugiat perferendis unde laudantium quam!
              </li>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nostrum modi adipisci inventore dolorum, placeat veniam
                veritatis dicta minima! Rem laboriosam cupiditate facere totam
                architecto, modi fugiat perferendis unde laudantium quam!
              </li>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nostrum modi adipisci inventore dolorum, placeat veniam
                veritatis dicta minima! Rem laboriosam cupiditate facere totam
                architecto, modi fugiat perferendis unde laudantium quam!
              </li>
            </ul>
          </p>
        </TabPanel>
        <TabPanel
          className="aboutUsTabs__container__howWeWork"
          value={value}
          index={2}
        >
          <img
            src="https://images.unsplash.com/photo-1559131397-f94da358f7ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80"
            alt="banner"
          />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            explicabo magni officiis repellat harum repudiandae vero,
            reprehenderit placeat eaque fuga? Excepturi voluptatem pariatur quam
            consectetur quo. Esse ipsam nobis recusandae.
          </p>
        </TabPanel>
        <TabPanel
          className="aboutUsTabs__container__team"
          value={value}
          index={3}
        >
          {[0, 1, 2, 3, 4, 5].map((item, index) => (
            <div className="item" key={index}>
              <img
                src="https://avatars.githubusercontent.com/u/93444253?s=400&u=389a238cf991d86adcc03166270d30241e94a95b&v=4"
                alt=""
              />

              <h4>Deekshya Shahi</h4>
              <div className="position">President</div>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                tenetur aperiam nesciunt sed ratione doloribus optio iure,
                quisquam animi consectetur architecto laborum placeat vitae
                fugiat praesentium harum sunt dignissimos velit!
              </p>
            </div>
          ))}
        </TabPanel>
      </Box>
    </div>
  );
}

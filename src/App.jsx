import React from 'react'

/**
 * @packages
 */
 import {
  ReactLocation,
  Router,
} from "react-location";
import 'antd/dist/antd.less'
import 'remixicon/fonts/remixicon.css'

/** @pages */
import Home from './Pages/Home/Home';
import Volunteer from './Pages/Volunteer/Volunteer';

const location = new ReactLocation();

export default function App() {
  return (
    <>
      <Router
        location={location}
        routes={[
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/be_a_volunteer",
            element: <Volunteer />,
          },
        ]}
      />
    </>
  )
}

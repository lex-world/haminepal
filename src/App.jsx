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
import NewVolunteer from './Pages/NewVolunteer/NewVolunteer';
import VolunteerProfile from './Pages/VolunteerProfile/VolunteerProfile';
import Causes from './Pages/Causes/Causes';
import CauseFocused from './Pages/CauseFocused/CauseFocused';
import Events from './Pages/Events/Events';
import EventFocused from './Pages/EventFocused/EventFocused';
import CreateEvent from './Pages/CreateEvent/CreateEvent';
import OurWork from './Pages/OurWork/OurWork';

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
            path: "/volunteer",
            element: <Volunteer />,
          },
          {
            path: "/new-volunteer",
            element: <NewVolunteer />,
          },
          {
            path: "/volunteer-profile",
            element: <VolunteerProfile />,
          },
          {
            path: "/causes",
            element: <Causes />,
          },
          {
            path: "/cause-focused",
            element: <CauseFocused />,
          },
          {
            path: "/events",
            element: <Events />,
          },
          {
            path: "/event-focused",
            element: <EventFocused />,
          },
          {
            path: "/new-event",
            element: <CreateEvent />,
          },
          {
            path: "/our-work",
            element: <OurWork />,
          },
        ]}
      />
    </>
  )
}

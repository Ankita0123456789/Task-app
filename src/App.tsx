import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalContextProvider from "./contexts/GlobalContext";
import {Meeting, Tasks, User, Rooms, MeetingForm, RoomForm} from './modules/index';

const App = () => {

  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/meetings" element={<MeetingForm />} />
          <Route path="/meeting/:id" element={<Meeting />} />
          <Route path="/rooms" element={<RoomForm />} />
        </Routes>
      </BrowserRouter>
    </GlobalContextProvider>
  );
}

export default App;

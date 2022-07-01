import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalContextProvider from "./contexts/GlobalContext";
import {Meeting, Task, TaskForm, User, MeetingForm, Rooms} from './modules/index';

const App = () => {

  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/tasks" element={<Task />} />
          <Route path="/task/:id" element={<TaskForm />} />
          <Route path="/meetings" element={<MeetingForm />} />
          <Route path="/meeting/:id" element={<Meeting />} />
          <Route path="/rooms" element={<Rooms />} />
        </Routes>
      </BrowserRouter>
    </GlobalContextProvider>
  );
}

export default App;

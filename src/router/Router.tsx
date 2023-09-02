import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Display from "../components/Display";

import "../App.css";

const Router = () => (
  <Routes>
    <Route path="/" element={<Display />} />
  </Routes>
);

export default Router;

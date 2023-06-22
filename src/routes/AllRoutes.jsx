import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HRAForm from '../components/HRAForm';
import TAXForm from '../components/AdvanceTaxCalculator';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HRAForm />} />
        <Route path="/tax" element={<TAXForm />} />
    </Routes>
  )
}

export default AllRoutes
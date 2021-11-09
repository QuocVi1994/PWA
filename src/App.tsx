import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom';
import YueKangCode from './pages/YueKangeCode';
import About from './pages/About';
import { baseURL } from '../configs/constants';

const App = () => {
  return (
    <Suspense fallback={<span>loading</span>}>
      <Routes>
        <Route path={baseURL} element={<YueKangCode />} />
        <Route path={`${baseURL}/yuekangcode`} element={<YueKangCode />} />
        <Route path={`${baseURL}/about`} element={<About />} />
      </Routes>
    </Suspense>
  )
}

export default App

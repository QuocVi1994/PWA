import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom';
import YueKangCode from './pages/YueKangeCode';
import About from './pages/About';
import { buildBaseURL } from '../configs/constants';

const App = () => {
  return (
    <Suspense fallback={<span>loading</span>}>
      <Routes>
        <Route path={buildBaseURL} element={<YueKangCode />} />
        <Route path={`${buildBaseURL}/yuekangcode`} element={<YueKangCode />} />
        <Route path={`${buildBaseURL}/about`} element={<About />} />
      </Routes>
    </Suspense>
  )
}

export default App

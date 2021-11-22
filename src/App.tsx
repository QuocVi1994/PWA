import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom';

const YueKangCode = lazy(() => import('./pages/YueKangeCode'));
const About = lazy(() => import('./pages/About'));

const App = () => {
  return (
    <Suspense fallback={<span>loading</span>}>
      <Routes>
        <Route path="/" element={<YueKangCode />} />
        <Route path={`/yuekangcode`} element={<YueKangCode />} />
        <Route path={`/about`} element={<About />} />
      </Routes>
    </Suspense>
  )
}

export default App

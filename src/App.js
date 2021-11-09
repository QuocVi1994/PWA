import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom';
import YueKangCode from './pages/YueKangCode';
import About from './pages/About';
// import { buildBaseURL } from '../configs/constants';
const genPath = (path) => {
  return (process.env.NODE_ENV === 'development' ? '' : process.env.PUBLIC_URL) + path;
}
const App = () => {
  return (
    <Suspense fallback={<span>loading</span>}>
      <Routes>
        <Route path={genPath('/')} element={<YueKangCode />} />
        <Route path={genPath('/yuekangcode')} element={<YueKangCode />} />
        <Route path={genPath('/about')} element={<About />} />
      </Routes>
    </Suspense>
  )
}

export default App
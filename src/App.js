import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom';
import YueKangCode from './pages/YueKangCode';
import About from './pages/About';

const App = () => {
  return (
    <Suspense fallback={<span>loading</span>}>
      <Routes>
        <Route path='/' element={<YueKangCode />} />
        <Route path='/yuekangcode' element={<YueKangCode />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Suspense>
  )
}

export default App
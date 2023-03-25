import { Route, Routes } from 'react-router-dom';

import Wrapper from './Wrapper';
import Header from './Header';
import Main from './Main';
import About from './About';
import Resume from './Resume';
import Works from './Works';
import Hyundai from './Hyundai';
import Footer from './Footer';



import './css/basic.scss';

function App() {
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/about' element={<About />} />
        <Route path='/works' element={<Works />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/hyundai' element={<Hyundai />} />
      </Routes>

    </Wrapper>
  );
}

export default App;

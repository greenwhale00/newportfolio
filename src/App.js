import { Route, Routes } from 'react-router-dom';



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

      <Footer />
    </Wrapper>
  );
}

export default App;

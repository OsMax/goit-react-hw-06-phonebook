import { Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="*" element={<h1>WRONG PAGE</h1>} />
      </Routes>
    </>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CalenderWeekly from "./CalenderWeekly";
import Login from "./Login"
import Register from './Register'
import EditEvent from './EditEvent';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/CalenderWeekly" element={<CalenderWeekly />} />
      <Route path='/EditEvent' element={<EditEvent/>}/>
      <Route path="/Register" element={<Register />} />

    </ Routes>
  </BrowserRouter>
);


export default App;

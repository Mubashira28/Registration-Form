
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Demopage from './components/Admin/Demopage'; 
import EditForm from './components/Admin/EditForm'; 



function App() {
  // const initialState = ''; // Define your initial state value
  // const [state, setState] = React.useState(initialState);
  return (
    <div className="App">
      <Router>
        <Routes>
          
          <Route path="/" element={<Demopage />} /> 
          <Route path="EditForm" element={<EditForm />} /> 

          </Routes>
      </Router>
    </div>
  );
}

export default App;



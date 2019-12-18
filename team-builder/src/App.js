import React, {useState} from 'react';


import './App.css';

function App() {
  const [teamMember, setTeamMember] = useState([
    {
      name: 'Default Name',
      email: 'default@email.com',
      role: 'default role'
    }
  ]);

  return (
    <div className="App">
      <h1>Team Member List</h1>
      
    </div>
  );
}

export default App;

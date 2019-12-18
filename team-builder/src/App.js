import React, {useState} from 'react';
import TeamMember from './components/TeamMember';
import Form from './components/form';

import './App.css';

function App(props) {
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
      <Form />
      <TeamMember teamMember={teamMember}/>
    </div>
  );
}

export default App;

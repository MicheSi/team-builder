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

  const addTeamMember = person => {
    const newTeamMember = {
      name: person.name,
      email: person.email,
      role: person.role
    };
    setTeamMember([...teamMember, newTeamMember]);
  };

  return (
    <div className="App">
      <h1>Team Member List</h1>
      <Form addTeamMember={addTeamMember}/>
      <TeamMember teamMember={teamMember}/>
    </div>
  );
}

export default App;

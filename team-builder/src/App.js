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
  const [currentUser, setCurrentUser] = useState({
    name: '',
    email: '',
    role: ''
  });
  const [editing, setEditing] = useState(false);

  const addTeamMember = person => {
    const newTeamMember = {
      name: person.name,
      email: person.email,
      role: person.role
    };
    setTeamMember([...teamMember, newTeamMember]);
  };

  const memberToEdit = person => {
    setEditing(true)
    setCurrentUser({name: person.name, email: person.email, role: person.role})
  }

  const updateMember = (name, updatedMember) => {
    setEditing(true);

    setTeamMember(teamMember.map(person => (person.name === name ? updatedMember : person)))
  }
  

  return (
    <div className="App">
      <h1>Team Member List</h1>
      <Form addTeamMember={addTeamMember}/>
      <TeamMember teamMember={teamMember} memberToEdit={memberToEdit}/>
    </div>
  );
}

export default App;

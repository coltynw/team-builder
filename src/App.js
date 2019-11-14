import React, { useState } from 'react';
import './App.css';
import ListComponent from './List.js'
import Box from './Box.js'

function App() {
 const [teamMember, setTeamMember] = useState([
   {
     Name: 'Name',
     Email: 'Email',
     Role: 'Role'
   }
 ])

 const addMember = member => {
  const newTeamMember = setTeamMember([...teamMember, member]);
};

  return (
    <div className='App'>
      <h1>Add new member here</h1>
     <ListComponent addMember={addMember}/>
     <h1>Team member list</h1>
     <Box teamMember={teamMember} />
    </div>
  );
}

export default App;
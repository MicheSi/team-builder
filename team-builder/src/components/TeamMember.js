import React from 'react';

const TeamMember = props => {
    const {teamMember} = props;

    return (
        <div className='team-list'>
            {props.teamMember.map(person => (
                <div className='team-member' key={teamMember.id}>
                    <h2>Name: {person.name}</h2>
                    <p>Email: {person.email}</p>
                    <p>Role: {person.role}</p>
                </div>
            ))}
        </div>
    );
};

export default TeamMember;
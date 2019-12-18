import React from 'react';

const TeamMember = props => {
    return (
        <div className='team-list'>
            {props.teamMember.map(person => (
                <div className='team-member'>
                    <h1>{person.name}</h1>
                    <p>{person.email}</p>
                    <p>{person.role}</p>
                </div>
            ))}
        </div>
    );
};

export default TeamMember;
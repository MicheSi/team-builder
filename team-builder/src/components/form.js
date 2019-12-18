import React, {useState} from 'react';

const Form = props => {
    const [teamMember, setTeamMember] = useState({
        name: '',
        email: '',
        role: ''
    });

    const handleChange = e => {
        setTeamMember({...teamMember, [e.target.name]: e.target.value});
    };

    return (
        <form>
            <label htmlFor='name'>Name</label>
            <input
             id='name'
             type='text'
             name='name'
             placeholder='Enter Name'
             value={teamMember.name}
             onChange={handleChange}
            />
        </form>
    )
}

export default Form;
import { TextField, Button } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://rocky-dawn-87593.herokuapp.com/user/admin', {
            method: 'PUT',
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                console.log(data);
                alert("admin is added successfully")
               }
            })
        e.preventDefault();
    }
    return (
        <div>
            <h2>Make admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField id="outlined-basic"
                    label="email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="outlined" /> <br />
                <Button type="submit" style={{marginTop:20}} variant="contained">Make Admin</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;
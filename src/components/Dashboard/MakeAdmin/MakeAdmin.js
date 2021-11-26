import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react'

const MakeAdmin = () => {
     const [ email, setEmail ] = useState('');
     const [ adminSuccess, setAdminSuccess ] = useState(false);

     const handleOnBlur = (e) => {
          setEmail(e.target.value);
     }

     const handleAdminSubmit = (e) => {
          const user = { email };
          fetch('https://agile-oasis-71318.herokuapp.com/users/admin' ,{
               method: 'PUT',
               headers: {
                    'content-type':'application/json'
               },
               body: JSON.stringify(user)
          })
          .then(res => res.json())
          .then(data => {
               if(data.modifiedCount) {
                    setAdminSuccess(true);
               }
          })

          e.preventDefault();
     }

     return (
          <div>
               <h1 className="text-primary mt-4 mb-5">Make an Admin</h1>
               <form onSubmit={handleAdminSubmit}>
                    <TextField 
                         sx={{ width: '40%' }}
                         label="Enter Email" 
                         variant="standard"
                         onBlur={ handleOnBlur } 
                         type="email"
                    />
                    <Button type="submit" variant="contained">Make Admin</Button>
               </form>
               { adminSuccess && <Alert severity="success"> Make Admin Successfully </Alert> }
          </div>
     )
}

export default MakeAdmin

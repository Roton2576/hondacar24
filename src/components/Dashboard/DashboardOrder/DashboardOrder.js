import React, { useEffect, useState } from 'react'
import useAuth from '../../../hooks/useAuth'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


const DashboardOrder = () => {
     const { user } = useAuth();
     const [ carOrder, setCarOrder ] = useState([]);

     useEffect(() => {
          const url = `https://agile-oasis-71318.herokuapp.com/order?email=${user.email}`
          fetch(url)
          .then(res => res.json())
          .then(data => setCarOrder(data))
     },[]);

     //Delete an user
     const handleDeleteMethod = (id) => {
          const procced = window.confirm('Are You Sure, You Want to Delete This Order ?');
          if(procced) {
               const url = `https://agile-oasis-71318.herokuapp.com/order/${id}`
               fetch(url, {
                    method: 'DELETE'
               })
               .then(res => res.json())
               .then(data => {
                    if(data.deletedCount > 0) {
                         alert('deleted Successfully');
                         const remainingUser = carOrder.filter(order => order._id !== id)
                         setCarOrder(remainingUser);
                    }
               });
          }
     }

     return (
          <div>
               <h2 className="mt-3 mb-4 text-primary">This Is Your Order</h2>
               <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="Car Order table">
                    <TableHead>
                         <TableRow>
                         <TableCell align="center" sx={{fontWeight: 600, fontSize: '20px'}}> Car Image </TableCell>
                         <TableCell align="center" sx={{fontWeight: 600, fontSize: '20px'}}> Car Name </TableCell>
                         <TableCell align="center" sx={{fontWeight: 600, fontSize: '20px'}}>User Name</TableCell>
                         <TableCell align="center" sx={{fontWeight: 600, fontSize: '20px'}}>User Email</TableCell>
                         <TableCell align="center" sx={{fontWeight: 600, fontSize: '20px'}}>Car Price</TableCell>
                         <TableCell align="center" sx={{fontWeight: 600, fontSize: '20px'}}>Action</TableCell>
                         <TableCell align="center" sx={{fontWeight: 600, fontSize: '20px'}}>Payment</TableCell>
                         </TableRow>
                    </TableHead>
                    <TableBody>
                         {carOrder.map((row) => (
                         <TableRow
                         key={row._id}
                         sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                         >
                         <TableCell align="center"> <img src={row.img} className="rounded-circle img-fluid adminCarImageH" /></TableCell>
                         <TableCell align="center">{row.serviceName}</TableCell>
                         <TableCell align="center" component="th" scope="row">{row.displayName}</TableCell>
                         <TableCell align="center">{row.email}</TableCell>
                         <TableCell align="center">{row.price}</TableCell>
                         <TableCell align="center"> <Button onClick={() => handleDeleteMethod(row._id)} variant="contained"> <i className="fas fa-trash-alt pe-2"></i> Delete </Button> </TableCell>
                         <TableCell align="center">{row.payment ? 'Paid' :
                              <Link to={`/dashboard/payment/${row._id}`}> <Button variant="contained">Pay</Button> </Link>
                         }</TableCell>
                         </TableRow>
                         ))}
                    </TableBody>
                    </Table>
               </TableContainer>
          </div>
     )
}

export default DashboardOrder

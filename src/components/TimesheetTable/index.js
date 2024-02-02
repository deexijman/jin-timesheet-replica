import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

function TimesheetTable() {
    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">

                    <TableHead sx={{ backgroundColor:"#19105b" }}>
                        <TableRow>
                            <TableCell sx={{ backgroundColor:"#19105b", color:'#ffe5ee' }}>Timesheet Table</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableHead sx={{backgroundColor:"#ffe5ee"}}>
                        <TableRow>
                            <TableCell  sx={{fontWeight:"bold", color:"#19105b"}}>Project Type</TableCell>
                            <TableCell  sx={{fontWeight:"bold", color:"#19105b"}}>Project Name</TableCell>
                            <TableCell  sx={{fontWeight:"bold", color:"#19105b"}}>Comment</TableCell>
                            <TableCell  sx={{fontWeight:"bold", color:"#19105b"}}>Mon</TableCell>
                            <TableCell  sx={{fontWeight:"bold", color:"#19105b"}}>Tue</TableCell>
                            <TableCell  sx={{fontWeight:"bold", color:"#19105b"}}>Wed</TableCell>
                            <TableCell  sx={{fontWeight:"bold", color:"#19105b"}}>Thu</TableCell>
                            <TableCell  sx={{fontWeight:"bold", color:"#19105b"}}>Fri</TableCell>
                            <TableCell  sx={{fontWeight:"bold", color:"#19105b"}}>Sat</TableCell>
                            <TableCell  sx={{fontWeight:"bold", color:"#19105b"}}>Sun</TableCell>
                            <TableCell  sx={{fontWeight:"bold", color:"#19105b"}}>Total</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                            </TableRow>

                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default TimesheetTable
// Makes storage of the 
import React, { useState } from 'react'
import {
    Box,
    Grid
} from '@mui/material';
import TimesheetTable from '../../components/TimesheetTable';

function TimesheetContainer() {

    const [totalHours, setTotalHours] = useState(0);

    return (
        <div>
            {/* Timesheet title, total hours, timesheet container*/}
            <Grid container spacing={2}>

                {/* Timestamp title container */}
                <Grid item xs={12} md={12} lg={12}>
                    <Box sx={{ fontSize: 'h4.fontSize', m: 1, textAlign: "left", color: "#19105b" }}>
                        Timesheet
                    </Box>
                </Grid>

                {/* Total hours and date */}
                <Grid item xs={12} md={12} lg={12}>

                    <div style={{ color: "#19105b", display: 'flex', flexDirection:'row' , justifyContent: "space-between", alignItems: 'center' }}>
                        <Box sx={{ fontSize: 'h6.fontSize', m: 1, textAlign: "left", color: "#19105b" }}>
                            Total Hours : {totalHours}
                        </Box>
                        <Box sx={{ fontSize: 'h6.fontSize', m: 1, textAlign: "left", color: "#19105b" }}>
                            22 Jan 2024 - 28 Jan 2024
                        </Box>
                    </div>

                </Grid>

                {/* Timestamp container : Holds the table */}
                <Grid item xs={12} md={12} lg={12}>

                    <TimesheetTable />
                    
                </Grid>
            </Grid>
        </div>
    )
}

export default TimesheetContainer
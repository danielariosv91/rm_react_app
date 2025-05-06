import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Paper } from "../libraries/MUI"

const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name', width: 250 },
    { field: 'gender', headerName: 'Gender', width: 150 },
    { field: 'status', headerName: 'Status', width: 150 },
];

const paginationModel = { page: 0, pageSize: 5 };



export default function DataTable({ data }) {
    return (
        <>
            {data.length > 0 ? (
                <Paper sx={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={data}
                        columns={columns}
                        initialState={{ pagination: { paginationModel } }}
                        pageSizeOptions={[5, 10]}
                        sx={{ border: 0 }}
                    />
                </Paper>

            ) : (<p> Sin data</p>)}

        </>
    );
}

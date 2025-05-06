import { useMemo } from "react"
import { DataGrid } from '@mui/x-data-grid';
import { Paper } from "../libraries/MUI"


const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable({ data }) {

    const columns = useMemo(() => {
        if (!data || data.length === 0) return [];

        return Object.keys(data[0]).map((key) => ({
            field: key,
            headerName: key.toUpperCase(),
            width: 150,
        }));
    }, [data]);

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

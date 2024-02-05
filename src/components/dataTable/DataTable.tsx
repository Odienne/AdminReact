import "./dataTable.scss"
import {DataGrid, GridColDef, GridToolbar} from "@mui/x-data-grid";
import {Link} from "react-router-dom";


type Props = {
    columns: GridColDef[],
    rows: object[],
    slug: string
}

const handleDelete = (id:number) => {
    //delete item
    console.log(`delete ${id}`)
}

const DataTable = (props: Props) => {
    const actionColumns: GridColDef = {
        field: "actions", headerName: "Actions", width: 200,
        renderCell: (params) => {
            return (
                <div className="action">
                    <Link to={`/${props.slug}/${params.row.id}`}><img src="/view.svg" alt="view"/></Link>
                    <div className="delete" onClick={() => handleDelete(params.row.id)}>
                        <img src="/delete.svg" alt="view"/>
                    </div>
                </div>
            )
        }
    }

    return (
        <div className="dataTable">
            <DataGrid
                className="dataGrid"
                rows={props.rows}
                columns={[...props.columns, actionColumns]}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                slots={{toolbar: GridToolbar}}
                slotProps={
                    {
                        toolbar: {
                            showQuickFilter: true,
                            quickFilterProps: {debounceMs: 500}
                        }
                    }
                }
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
                disableColumnFilter={true}
                disableColumnSelector={true}
                disableDensitySelector={true}
            />
        </div>
    )
}
export default DataTable;

import "./users.scss"
import DataTable from "../../components/dataTable/DataTable";
import {GridColDef, GridValueGetterParams} from "@mui/x-data-grid";
import {userRows} from "../../data";
import {useState} from "react";
import Add from "../../components/add/Add";

const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 90},

    {
        field: 'img', headerName: 'Avatar', width: 100,
        renderCell: (params => {
            return <img src={params.row.img || "/noavatar.png"} alt="avatar"/>
        })
    },
    {
        field: 'actions', headerName: 'Actions', width: 100,
        renderCell: (params => {
            return <div className="action">
                <div className="view">View</div>
                <div className="delete">Delete</div>
            </div>
        })
    },
    {
        field: 'firstName',
        type: "string",
        headerName: 'First name',
        width: 150,
        editable: true,
    },
    {
        field: 'lastName',
        type: "string",
        headerName: 'Last name',
        width: 150,
        editable: true,
    },
    {
        field: 'email',
        type: "email",
        headerName: 'Email',
        width: 250,
    },
    {
        field: 'phone',
        headerName: 'Phone',
        type: 'string',
        width: 150,
        editable: true,
    },
    {
        field: 'createdAt',
        headerName: 'CreatedAt',
        width: 160,
        type: 'string',
    },
    {
        field: 'status', headerName: 'Verified', width: 100,
        type: "boolean"
    },
];

const Users = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className="users">
            <div className="info">
                <h1>Users</h1>
                <button onClick={() => setOpen(true)}>
                    Add new user
                </button>
            </div>

        <DataTable slug="users" columns={columns} rows={userRows}/>

            {open && <Add slug="user" columns={columns} setOpen={setOpen}/>}
        </div>
    )
}
export default Users;

import "./products.scss"
import {useState} from "react";
import DataTable from "../../components/dataTable/DataTable";
import {products} from "../../data";
import Add from "../../components/add/Add";
import {GridColDef, GridValueGetterParams} from "@mui/x-data-grid";

const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 90},

    {
        field: 'img', headerName: 'Image', width: 100,
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
        field: 'title',
        type: "string",
        headerName: 'Title',
        width: 250,
    },
    {
        field: 'color',
        type: "string",
        headerName: 'Color',
        width: 150,
    },
    {
        field: 'price',
        headerName: 'Price',
        type: 'string',
        width: 200,
    },
    {
        field: 'producer',
        headerName: 'Producer',
        type: "string",
        width: 200,
    },
    {
        field: 'createdAt',
        headerName: 'CreatedAt',
        type: "string",
        width: 200,
    },
    {
        field: 'inStock', headerName: 'In Stock', width: 150,
        type: "boolean"
    },
];


const Products = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className="products">
            <div className="info">
                <h1>Products</h1>
                <button onClick={() => setOpen(true)}>
                    Add new product
                </button>
            </div>

            <DataTable slug="products" columns={columns} rows={products}/>

            {open && <Add slug="product" columns={columns} setOpen={setOpen}/>}
        </div>
    )
}
export default Products;

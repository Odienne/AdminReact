import "./product.scss"
import DataTable from "../../components/dataTable/DataTable";
import {GridColDef, GridValueGetterParams} from "@mui/x-data-grid";
import {singleProduct, userRows} from "../../data";
import {useState} from "react";
import Add from "../../components/add/Add";
import Single from "../../components/single/Single";

const Product = () => {

    //fetch data and send to single component
    return (
        <div className="product">
            <Single {...singleProduct}/>
        </div>
    )
}
export default Product;

import "./user.scss"
import DataTable from "../../components/dataTable/DataTable";
import {GridColDef, GridValueGetterParams} from "@mui/x-data-grid";
import {singleUser, userRows} from "../../data";
import {useState} from "react";
import Add from "../../components/add/Add";
import Single from "../../components/single/Single";

const User = () => {
    //fetch data and send it
   return (
        <div className="user">
            <Single {...singleUser}/>
        </div>
    )
}
export default User;

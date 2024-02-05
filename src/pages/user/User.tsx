import "./user.scss"
import {singleUser} from "../../data";
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

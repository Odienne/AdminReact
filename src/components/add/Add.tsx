import "./add.scss"
import {GridColDef} from "@mui/x-data-grid";

type Props = {
    slug: string;
    columns: GridColDef[];
    setOpen: React.Dispatch<any>
}

const Add = (props: Props) => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        //add new item

        props.setOpen(false);
    }

    return (
        <div className="add">
            <div className="modal">
                <span className="close" onClick={() => props.setOpen(false)}>X</span>
                <h1>Add new {props.slug}</h1>
                <form onSubmit={handleSubmit}>
                    {props.columns.filter(item => item.field !== "id" && item.field !== "img" && item.field !== "actions")
                        .map(column => (
                            <div className="item">
                                <label>
                                    {column.headerName}
                                </label>
                                <input type={column.type} placeholder={column.field}/>
                            </div>
                        ))}
                    <button>Send</button>
                </form>
            </div>
        </div>
    )
}
export default Add;

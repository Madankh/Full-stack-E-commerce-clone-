import "./userList.css";
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../pages/dummydata";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function UserList() {
  const [data, setdata] = useState(userRows);

  const handleDelete = (id)=>{
    setdata(data.filter((item)=> item.id !== id))
  }

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'username',
    headerName: 'Username',
    width: 150,
    renderCell: (params) => {
      return (
        <div className="userListUser">
          <img src={params.row.avatar} alt="" className="userLISTimg" />
          {params.row.username}
        </div>
      )
    }
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 250,
    editable: false,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 120,
    editable: false,
  },
  {
    field: 'transaction',
    headerName: 'Transaction',
    width: 160,
    editable: false,
  },
  {
    field: "action",
    headerName: "Active",
    width: 150,
    renderCell: (params) => {
      return (
        <>
          <Link to={"/user/" + params.row.id}>
            <button className="userListEdit">Edit</button>
          </Link>
          <DeleteOutline className="userListDelete" onClick={()=>handleDelete(params.row.id)}/>
        </>
      )
    }
  }
];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}

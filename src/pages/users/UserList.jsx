import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { userRows } from "../../datas";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useTheme } from "../../contexts/ThemeContext";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import "./UserList.css";

export default function UserLIst() {
  const { isDarkMode } = useTheme();
  const [userDatas, setUserDatas] = useState(userRows);

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
    components: {
      MuiDataGrid: {
        styleOverrides: {
          columnHeaders: {
            backgroundColor: isDarkMode ? '#2d2d2d' : '#f5f5f5',
            color: isDarkMode ? '#fff' : '#333',
          },
        },
      },
    },
  });

  const userDelete = (userID) => {
    setUserDatas(userDatas.filter((user) => user.id !== userID));
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to="/" className="link">
            <div className="userListUser">
              <img
                src={process.env.PUBLIC_URL + "/" + params.row.avatar}
                className="userListImg"
                alt="hichi"
              />
              {params.row.username}
            </div>
          </Link>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row.id}`} className="link">
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="userListDelete"
              onClick={() => userDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className={`userList ${isDarkMode ? "dark" : "light"}`}>
      <ThemeProvider theme={theme}>
      <DataGrid
        rows={userDatas}
        columns={columns}
        disableSelectionOnClick
        pageSize={4}
        sx={{
          color: isDarkMode ? "#fff" : "#333",
          backgroundColor: isDarkMode ? "#1e1e1e" : "#fff",
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: isDarkMode ? "#2d2d2d" : "#f5f5f5",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: isDarkMode ? "1px solid #333" : "1px solid #f0f0f0",
          },
        }}
      />
      </ThemeProvider>
    </div>
  );
}

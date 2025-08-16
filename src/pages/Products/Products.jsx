import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { products } from "../../datas";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useTheme } from "../../contexts/ThemeContext";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "./Products.css";

export default function Products() {
  const { isDarkMode } = useTheme();
  const [productsData, setProductsData] = useState(products);

  const productDelete = (productID) => {
    setProductsData(productsData.filter((product) => product.id !== productID));
  };

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
    },
    components: {
      MuiDataGrid: {
        styleOverrides: {
          columnHeaders: {
            backgroundColor: isDarkMode ? "#2d2d2d" : "#f5f5f5",
            color: isDarkMode ? "#fff" : "#333",
          },
        },
      },
    },
  });

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "title",
      headerName: "Name",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to={`/product/${params.row.id}`} className="link">
            <div className="userListUser">
              <img
                src={process.env.PUBLIC_URL + "/" + params.row.avatar}
                className="userListImg"
                alt="haaa"
              />
              {params.row.title}
            </div>
          </Link>
        );
      },
    },
    {
      field: "price",
      headerName: "Price",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.row.id}`} className="link">
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="userListDelete"
              onClick={() => productDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <ThemeProvider theme={theme}>
        <DataGrid
          rows={productsData}
          columns={columns}
          disableSelectionOnClick
          pageSize={3}
          checkboxSelection
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

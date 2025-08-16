import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { userRows } from "../../datas";
import { Link, NavLink } from "react-router-dom";
import {
  DeleteOutline,
  Search,
  FilterList,
  Edit,
  Add,
  Person,
} from "@mui/icons-material";
import { useTheme } from "../../contexts/ThemeContext";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./UserList.css";

export default function UserList() {
  const { isDarkMode } = useTheme();
  const [userDatas, setUserDatas] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate data loading
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 800));
      setUserDatas(userRows);
      setFilteredUsers(userRows);
      setIsLoading(false);
    };

    loadData();
  }, []);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredUsers(userDatas);
      return;
    }

    const results = userDatas.filter(
      (user) =>
        user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(results);
  }, [searchTerm, userDatas]);

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
    },
    components: {
      MuiDataGrid: {
        styleOverrides: {
          root: {
            border: "none",
            borderRadius: "12px",
            overflow: "hidden",
            fontFamily: "inherit",
          },
          columnHeaders: {
            backgroundColor: isDarkMode
              ? "var(--table-header-bg)"
              : "var(--table-header-bg)",
            color: isDarkMode ? "var(--primary-text)" : "var(--primary-text)",
            borderBottom: isDarkMode
              ? "1px solid var(--border-color)"
              : "1px solid var(--border-color)",
          },
          columnHeaderTitle: {
            fontWeight: 600,
            fontSize: "0.9rem",
          },
          cell: {
            borderBottom: isDarkMode
              ? "1px solid var(--border-color)"
              : "1px solid var(--border-color)",
            fontSize: "0.9rem",
          },
          footerContainer: {
            borderTop: "none",
          },
          virtualScroller: {
            backgroundColor: isDarkMode
              ? "var(--primary-bg)"
              : "var(--primary-bg)",
          },
          row: {
            "&:hover": {
              backgroundColor: isDarkMode
                ? "var(--table-row-hover)"
                : "var(--table-row-hover)",
            },
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
      width: 70,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "user",
      headerName: "User",
      minWidth: 220,
      flex: 1,
      renderCell: (params) => {
        return (
          <Link to={`/user/${params.row.id}`} className="link">
            <div className="userListUser">
              {params.row.avatar ? (
                <img
                  src={process.env.PUBLIC_URL + "/" + params.row.avatar}
                  className="userListImg"
                  alt={params.row.username}
                />
              ) : (
                <div className="avatarPlaceholder">
                  <Person />
                </div>
              )}
              <span className="userListName">{params.row.username}</span>
            </div>
          </Link>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      minWidth: 120,
      renderCell: (params) => (
        <div
          className={`statusCell ${
            params.value === "active" ? "active" : "inactive"
          }`}
        >
          {params.value}
        </div>
      ),
    },
    {
      field: "transaction",
      headerName: "Transaction",
      minWidth: 140,
      headerAlign: "right",
      align: "right",
      renderCell: (params) => (
        <div className="transactionCell">{params.value}</div>
      ),
    },
    {
  field: "action",
  headerName: "Actions",
  minWidth: 120, 
  headerAlign: 'center',
  align: 'center',
  renderCell: (params) => {
    return (
      <div className="actionCell">
        <Link to={`/user/${params.row.id}`} className="link">
          <button className="userListEdit" title="Edit">
            <Edit fontSize="small" />
          </button>
        </Link>
        <button 
          className="userListDelete"
          onClick={() => userDelete(params.row.id)}
          title="Delete"
        >
          <DeleteOutline fontSize="small" />
        </button>
      </div>
    );
  },
},
  ];

  // Calculate total transactions
  const totalTransactions = userDatas
    .reduce((sum, user) => {
      const amount = parseFloat(user.transaction.replace("$", "")) || 0;
      return sum + amount;
    }, 0)
    .toFixed(2);

  return (
    <div className={`userList ${isDarkMode ? "dark" : "light"}`}>
      <div className="userListHeader">
        <h2 className="userListTitle">User Management</h2>
        <div className="userListActions">
          <NavLink to="/newUsers" className="link">
            <button className="addUserBtn">
              <Add />
              <span>Add New User</span>
            </button>
          </NavLink>
        </div>
      </div>

      <div className="userListFilters">
        <div className="searchContainer">
          <Search className="searchIcon" />
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="searchInput"
          />
        </div>
        <button className="filterBtn">
          <FilterList />
          <span>Filters</span>
        </button>
      </div>

      <div className="userListStats">
        <div className="statCard">
          <span className="statNumber">{userDatas.length}</span>
          <span className="statLabel">Total Users</span>
        </div>
        <div className="statCard">
          <span className="statNumber">
            {userDatas.filter((u) => u.status === "active").length}
          </span>
          <span className="statLabel">Active Users</span>
        </div>
        <div className="statCard">
          <span className="statNumber">${totalTransactions}</span>
          <span className="statLabel">Total Transactions</span>
        </div>
      </div>

      <div className="dataGridContainer">
        <ThemeProvider theme={theme}>
          <DataGrid
            rows={filteredUsers}
            columns={columns}
            loading={isLoading}
            disableSelectionOnClick
            pageSize={5}
            rowsPerPageOptions={[5, 10, 20]}
            autoHeight
            sx={{
              "& .MuiDataGrid-cell:focus": {
                outline: "none",
              },
              "& .MuiDataGrid-virtualScroller::-webkit-scrollbar": {
                width: "8px",
                height: "8px",
              },
              "& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb": {
                backgroundColor: isDarkMode ? "#555" : "#ccc",
                borderRadius: "4px",
              },
            }}
            components={{
              NoRowsOverlay: () => (
                <div className="noRowsOverlay">
                  <div className="noRowsContent">
                    {searchTerm
                      ? "No matching users found"
                      : "No users available"}
                  </div>
                </div>
              ),
              LoadingOverlay: () => (
                <div className="loadingOverlay">
                  <div className="loadingSpinner"></div>
                  <span>Loading users...</span>
                </div>
              ),
            }}
          />
        </ThemeProvider>
      </div>
    </div>
  );
}

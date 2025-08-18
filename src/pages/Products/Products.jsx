import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { products as initialProducts } from "../../datas";
import { Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader/PageHeader";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import {
  DeleteOutline,
  Search,
  FilterList,
  Edit,
  Add,
  LocalOffer,
  Store,
  TrendingUp,
} from "@mui/icons-material";
import { useTheme } from "../../contexts/ThemeContext";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./Products.css";

export default function Products() {
  const { isDarkMode } = useTheme();
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 5,
  });

  // استفاده از state برای مدیریت محصولات
  const [productsData, setProductsData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // شبیه‌سازی بارگذاری داده
    setIsLoading(true);
    const timer = setTimeout(() => {
      // ایجاد کپی از محصولات اولیه برای امکان تغییر
      const productsCopy = [...initialProducts];
      setProductsData(productsCopy);
      setFilteredProducts(productsCopy);
      setIsLoading(false);
      console.log("Loaded products:", productsCopy);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredProducts(productsData);
      return;
    }

    const results = productsData.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(results);
  }, [searchTerm, productsData]);

  const productDelete = (productID) => {
    // به‌روزرسانی هر دو state
    const updatedProducts = productsData.filter(
      (product) => product.id !== productID
    );
    setProductsData(updatedProducts);

    if (!searchTerm) {
      setFilteredProducts(updatedProducts);
    } else {
      const results = updatedProducts.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(results);
    }
  };

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

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 70,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "product",
      headerName: "Product",
      minWidth: 250,
      flex: 1,
      renderCell: (params) => {
        return (
          <Link
            to={`/product/${params.row.id}`}
            className="link"
            style={{ display: "flex", width: "100%" }}
          >
            <div className="productItem">
              <div
                className="productImgContainer"
                style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "/" + params.row.avatar
                  })`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="productInfo">
                <span className="productTitle">{params.row.title}</span>
                <span className="productId">
                  SKU: PROD-{params.row.id.toString().padStart(3, "0")}
                </span>
              </div>
            </div>
          </Link>
        );
      },
    },
    {
      field: "price",
      headerName: "Price",
      minWidth: 120,
      headerAlign: "right",
      align: "right",
      renderCell: (params) => (
        <div className="priceCell">${params.value.toFixed(2)}</div>
      ),
    },
    {
      field: "stock",
      headerName: "Stock",
      minWidth: 120,
      headerAlign: "center",
      align: "center",
      renderCell: () => (
        <div className="stockCell">
          <span className="stockBadge">In Stock</span>
        </div>
      ),
    },
    {
      field: "action",
      headerName: "Actions",
      minWidth: 120,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        return (
          <div className="actionCell">
            <Link to={`/product/${params.row.id}`} className="link">
              <button className="productEdit" title="Edit">
                <Edit fontSize="small" />
              </button>
            </Link>
            <button
              className="productDelete"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                productDelete(params.row.id);
              }}
              title="Delete"
            >
              <DeleteOutline fontSize="small" />
            </button>
          </div>
        );
      },
    },
  ];

  // Calculate product statistics
  const totalProducts = filteredProducts.length;
  const totalValue = filteredProducts
    .reduce((sum, product) => sum + product.price, 0)
    .toFixed(2);
  const avgPrice =
    totalProducts > 0 ? (totalValue / totalProducts).toFixed(2) : "0.00";

  return (
    <div className={`productsPage ${isDarkMode ? "dark" : "light"}`}>
      <div className="productsHeader">
        <PageHeader
        title="Product Management"
        description="Manage your product inventory and listings"
        descriptionIcon={<ShoppingBagIcon className="description-icon" />}
        showTimeFilters={false}
      />
        <div className="productsActions">
          <Link to="/newProduct" className="link">
            <button className="addProductBtn">
              <Add />
            </button>
          </Link>
        </div>
      </div>

      <div className="productsFilters">
        <div className="searchContainer">
          <Search className="searchIcon" />
          <input
            type="text"
            placeholder="Search products..."
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

      <div className="productsStats">
        <div className="statCard">
          <div className="statIcon totalProducts">
            <Store />
          </div>
          <div className="statInfo">
            <span className="statNumber">{totalProducts}</span>
            <span className="statLabel">Total Products</span>
          </div>
        </div>
        <div className="statCard">
          <div className="statIcon totalValue">
            <TrendingUp />
          </div>
          <div className="statInfo">
            <span className="statNumber">${totalValue}</span>
            <span className="statLabel">Total Value</span>
          </div>
        </div>
        <div className="statCard">
          <div className="statIcon avgPrice">
            <LocalOffer />
          </div>
          <div className="statInfo">
            <span className="statNumber">${avgPrice}</span>
            <span className="statLabel">Avg. Price</span>
          </div>
        </div>
      </div>

      <div className="dataGridContainer">
        <ThemeProvider theme={theme}>
          <DataGrid
            rows={filteredProducts}
            columns={columns}
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            pageSizeOptions={[5, 10, 20]}
            loading={isLoading}
            disableSelectionOnClick
            autoHeight
            rowCount={filteredProducts.length}
            sx={{
              // حذف outline هنگام فوکوس
              "& .MuiDataGrid-cell:focus, & .MuiDataGrid-cell:focus-within": {
                outline: "none !important",
              },
              // استایل‌های اسکرول‌بار
              "& .MuiDataGrid-virtualScroller::-webkit-scrollbar": {
                width: "8px",
                height: "8px",
              },
              "& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb": {
                backgroundColor: isDarkMode ? "#555" : "#ccc",
                borderRadius: "4px",
              },
              // جلوگیری از انتخاب متن در سلول‌ها
              "& .MuiDataGrid-cell": {
                userSelect: "none",
              },
            }}
            components={{
              NoRowsOverlay: () => (
                <div className="noRowsOverlay">
                  <div className="noRowsContent">
                    {searchTerm
                      ? "No matching products found"
                      : "No products available"}
                  </div>
                </div>
              ),
              LoadingOverlay: () => (
                <div className="loadingOverlay">
                  <div className="loadingSpinner"></div>
                  <span>Loading products...</span>
                </div>
              ),
            }}
          />
        </ThemeProvider>
      </div>
    </div>
  );
}

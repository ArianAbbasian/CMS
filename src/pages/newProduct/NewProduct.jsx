import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import {
  Add,
  ArrowBack,
  CloudUpload,
  Description,
} from "@mui/icons-material";
import PageHeader from "../../components/PageHeader/PageHeader";
import "./NewProduct.css";

export default function NewProduct() {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    category: "Electronics",
    stock: "",
    description: "",
    image: null,
    imagePreview: "",
  });

  const categories = ["Electronics", "Computers", "Home", "Fashion", "Other"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          image: file,
          imagePreview: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product submitted:", formData);
  };

  const navigate = useNavigate();
  return (
    <div className={`newProductContainer ${isDarkMode ? "dark" : "light"}`}>
      <div className="newUserHeader">
        <button
          className="backButton"
          onClick={() => navigate("/products")}
          aria-label="Back to products list"
        >
          <ArrowBack />
        </button>
        <PageHeader
          title="Add New Product"
          description="Fill in the product details below"
          descriptionIcon={<Add className="description-icon" />}
          showTimeFilters={false}
        />
      </div>

      <div className="formContainer">
        <form onSubmit={handleSubmit} className="productForm">
          {/* Product Infos */}
          <div className="formSection">
            <h3 className="sectionTitle">
              <Description className="icon" />
              Product Details
            </h3>

            <div className="formGroup">
              <label>Product Name *</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g., MacBook Pro M2"
                required
              />
            </div>

            <div className="formRow">
              <div className="formGroup">
                <label>Price ($) *</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="0.00"
                  min="0"
                  step="0.01"
                  required
                />
              </div>

              <div className="formGroup">
                <label>Category *</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="formRow">
              <div className="formGroup">
                <label>Stock Quantity *</label>
                <input
                  type="number"
                  name="stock"
                  value={formData.stock}
                  onChange={handleChange}
                  placeholder="0"
                  min="0"
                  required
                />
              </div>
            </div>

            <div className="formGroup">
              <label>Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Product description..."
                rows="4"
              />
            </div>
          </div>

          {/* Upload Image */}
          <div className="imageUploadSection">
            <h3 className="sectionTitle">
              <CloudUpload className="icon" />
              Product Image
            </h3>
            <div className="imageUploadBox">
              {formData.imagePreview ? (
                <img
                  src={formData.imagePreview}
                  alt="Preview"
                  className="imagePreview"
                />
              ) : (
                <div className="imagePlaceholder">
                  <CloudUpload fontSize="large" />
                  <p>Click to upload product image</p>
                </div>
              )}
              <input
                type="file"
                id="productImage"
                accept="image/*"
                onChange={handleImageChange}
                className="fileInput"
              />
              <label htmlFor="productImage" className="uploadLabel">
                Choose File
              </label>
            </div>
          </div>

          {/* ACtion Button */}
          <div className="actionButtons">
            <Link to="/products" className="cancelButton">
              Cancel
            </Link>
            <button type="submit" className="submitButton">
              <Add />
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

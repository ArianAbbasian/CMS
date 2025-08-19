import { useParams, Link } from "react-router-dom";
import Chart from "../../components/Charts/Chart";
import { productsData, products } from "../../datas";
import PublishIcon from "@mui/icons-material/Publish";
import { useEffect, useState } from "react";
import "./Product.css";

export default function Product() {
  const { productID } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // شبیه‌سازی دریافت داده از API
    setLoading(true);
    const timer = setTimeout(() => {
      const foundProduct = products.find(p => p.id.toString() === productID);
      setProduct(foundProduct);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [productID]);

  if (loading) {
    return (
      <div className="product">
        <div className="productLoading">
          <div className="loadingSpinner"></div>
          <span>Loading product details...</span>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="product">
        <div className="productError">
          <h2>Product Not Found</h2>
          <p>The product you're looking for doesn't exist.</p>
          <Link to="/products">
            <button className="backButton">Back to Products</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="product">
      <div className="productTitleContainer">
        <div className="productHeader">
          <Link to="/products" className="backLink">
            ← Back to Products
          </Link>
          <h1 className="productTitle">Product Details</h1>
        </div>
        <Link to="/newProduct">
          <button className="productAddButton">Create New</button>
        </Link>
      </div>

      <div className="productTop">
        <div className="productTopLeft">
          <Chart title="Sales Performance (Monthly)" data={productsData} dataKey="sales" />
        </div>

        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src={process.env.PUBLIC_URL + "/" + product.avatar}
              alt={product.title}
              className="productInfoImg"
            />
            <span className="productName">{product.title}</span>
          </div>

          <div className="productInfoBottom">
            <div className="productInfoItem">
              <div className="productInfoKey">Product ID</div>
              <div className="productInfoValue">#{product.id}</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Name</div>
              <div className="productInfoValue">{product.title}</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Price</div>
              <div className="productInfoValue">${product.price.toFixed(2)}</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Total Sales</div>
              <div className="productInfoValue">${(product.price * 120).toLocaleString()}</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Status</div>
              <div className="productInfoValue" data-status="yes">Active</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Stock</div>
              <div className="productInfoValue" data-status="yes">In Stock</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Category</div>
              <div className="productInfoValue">Electronics</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Last Updated</div>
              <div className="productInfoValue">2025-06-15</div>
            </div>
          </div>
        </div>
      </div>

      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label htmlFor="productName">Product Name</label>
            <input 
              type="text" 
              id="productName"
              defaultValue={product.title}
              placeholder="Product name" 
            />

            <label htmlFor="productPrice">Price ($)</label>
            <input 
              type="number" 
              id="productPrice"
              defaultValue={product.price}
              placeholder="0.00" 
            />

            <label htmlFor="productCategory">Category</label>
            <select id="productCategory" defaultValue="electronics">
              <option value="laptops">Laptops</option>
              <option value="phones">Phones</option>
              <option value="tablets">Tablets</option>
              <option value="accessories">Accessories</option>
              <option value="electronics">Electronics</option>
            </select>

            <label htmlFor="inStock">Stock Status</label>
            <select id="inStock" defaultValue="yes">
              <option value="yes">In Stock</option>
              <option value="no">Out of Stock</option>
            </select>

            <label htmlFor="productStatus">Active Status</label>
            <select id="productStatus" defaultValue="yes">
              <option value="yes">Active</option>
              <option value="no">Inactive</option>
            </select>

            <label htmlFor="productDescription">Description</label>
            <textarea
              id="productDescription"
              defaultValue={`High-quality ${product.title} with excellent features. Perfect for daily use.`}
              placeholder="Enter product description..."
              rows="3"
            />
          </div>

          <div className="productFormRight">
            <div className="productUploader">
              <img
                src={process.env.PUBLIC_URL + "/" + product.avatar}
                alt="Product preview"
                className="productUploaderImg"
              />
              <label htmlFor="productImage">
                <PublishIcon />
                Change Image
              </label>
              <input type="file" id="productImage" style={{ display: "none" }} />
            </div>

            <div className="productActions">
              <button type="submit" className="productButton primary">
                Update Product
              </button>
              <button type="button" className="productButton secondary">
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
import React from 'react';
import './InventoryAlert.css';
import { ShoppingBag, Warning } from '@mui/icons-material';
import { useTheme } from '../../../contexts/ThemeContext';

const InventoryAlert = () => {
  const { isDarkMode } = useTheme();
  
  const lowStockProducts = [
    { id: 1, name: 'Wireless Headphones', stock: 8, min: 20 },
    { id: 2, name: 'Smart Watch', stock: 15, min: 25 },
    { id: 3, name: 'Bluetooth Speaker', stock: 5, min: 15 },
  ];

  return (
    <div className="InventoryAlert">
      <div className="InventoryAlertHeader">
        <h3 className="InventoryAlertTitle">Low Stock Alert</h3>
        <span className="InventoryAlertSubtitle">Products needing reorder</span>
      </div>
      
      <div className="InventoryAlertCardContainer">
        {lowStockProducts.map((product) => (
          <div key={product.id} className="InventoryAlertCard">
            <div className="InventoryAlertCardHeader">
              <div className="InventoryAlertProduct">
                <div className="InventoryAlertIcon">
                  <ShoppingBag />
                </div>
                <div className="InventoryAlertProductInfo">
                  <div className="InventoryAlertName">{product.name}</div>
                  <div className="InventoryAlertStock">Stock: {product.stock} (Min: {product.min})</div>
                </div>
              </div>
              <div className="InventoryAlertStatusBadge">
                <Warning style={{ fontSize: 16, marginRight: 5 }} />
                Low Stock
              </div>
            </div>
            
            <div className="InventoryAlertCardBody">
              <div className="InventoryAlertDetailItem">
                <span className="InventoryAlertDetailLabel">Product ID:</span>
                <span className="InventoryAlertDetailValue">#{product.id}</span>
              </div>
              <div className="InventoryAlertDetailItem">
                <span className="InventoryAlertDetailLabel">Reorder Qty:</span>
                <span className="InventoryAlertDetailValue">{product.min - product.stock} units</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InventoryAlert;
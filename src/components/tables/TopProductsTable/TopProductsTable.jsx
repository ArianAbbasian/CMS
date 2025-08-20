import React, { useEffect, useState } from 'react';
import './TopProductsTable.css';
import { products } from '../../../datas';
import { useTheme } from '../../../contexts/ThemeContext';

const TopProductsWidget = () => {
  const { isDarkMode } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [topProductsData, setTopProductsData] = useState([]);

  useEffect(() => {
    // Loading Similation
    const timer = setTimeout(() => {
      const data = products
        .map((product) => ({
          id: product.id,
          name: product.title,
          sales: Math.floor(Math.random() * 1000) + 500,
          revenue: Math.floor(product.price * (Math.random() * 100 + 50)),
          change:
            Math.random() > 0.5
              ? `+${(Math.random() * 15).toFixed(1)}%`
              : `-${(Math.random() * 5).toFixed(1)}%`,
          avatar: product.avatar,
        }))
        .sort((a, b) => b.sales - a.sales);

      setTopProductsData(data);
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="TopProductsWidget">
      <div className="TopProductsHeader">
        <h3 className="TopProductsTitle">Top Selling Products</h3>
        <span className="TopProductsSubtitle">Best performing items</span>
      </div>

      <table className="TopProductsTableContainer">
        <thead className="TopProductsTableHead">
          <tr>
            <th>Product</th>
            <th style={{ textAlign: 'right' }}>Units Sold</th>
            <th style={{ textAlign: 'right' }}>Revenue</th>
            <th style={{ textAlign: 'right' }}>Change</th>
          </tr>
        </thead>
        <tbody className="TopProductsTableBody">
          {isLoading
            ? // 🔹 Sceleton Loadinggggggg
              Array.from({ length: 5 }).map((_, i) => (
                <tr key={i}>
                  <td className="TopProductsTableCell">
                    <div className="TopProductsProductCell">
                      <div className="skeleton-avatar"></div>
                      <div className="skeleton-text short"></div>
                    </div>
                  </td>
                  <td className="TopProductsTableCell" style={{ textAlign: 'right' }}>
                    <div className="skeleton-text"></div>
                  </td>
                  <td className="TopProductsTableCell" style={{ textAlign: 'right' }}>
                    <div className="skeleton-text"></div>
                  </td>
                  <td className="TopProductsTableCell" style={{ textAlign: 'right' }}>
                    <div className="skeleton-text"></div>
                  </td>
                </tr>
              ))
            : // 🔹 DATA
              topProductsData.map((product) => {
                const isPositive = product.change.startsWith('+');
                return (
                  <tr key={product.id}>
                    <td className="TopProductsTableCell">
                      <div className="TopProductsProductCell">
                        <img
                          src={process.env.PUBLIC_URL + '/' + product.avatar}
                          className="TopProductsAvatar"
                          alt={product.name}
                        />
                        <span>{product.name}</span>
                      </div>
                    </td>
                    <td className="TopProductsTableCell" style={{ textAlign: 'right' }}>
                      {product.sales.toLocaleString()}
                    </td>
                    <td className="TopProductsTableCell" style={{ textAlign: 'right' }}>
                      ${product.revenue.toLocaleString()}
                    </td>
                    <td className="TopProductsTableCell" style={{ textAlign: 'right' }}>
                      <div
                        className={`TopProductsChange ${
                          isPositive ? 'positive' : 'negative'
                        }`}
                      >
                        {isPositive ? '↑' : '↓'} {product.change}
                      </div>
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </div>
  );
};

export default TopProductsWidget;

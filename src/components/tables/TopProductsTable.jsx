import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper,
  Typography,
  Box,
  Avatar,
  Card
} from '@mui/material';
import { 
  ArrowUpward,
  ArrowDownward
} from '@mui/icons-material';
import { useTheme } from '../../contexts/ThemeContext';

const TopProductsTable = () => {
  const { isDarkMode } = useTheme();
  
  // داده‌های نمونه
  const products = [
    { id: 1, name: 'MacBook Pro', sales: 1200, revenue: 144000, change: '+12.4%', avatar: 'images/macbook.jpg' },
    { id: 2, name: 'iPhone 13 Pro', sales: 980, revenue: 117600, change: '+8.2%', avatar: 'images/iphone.jpg' },
    { id: 3, name: 'Samsung Galaxy S22', sales: 850, revenue: 93500, change: '+5.3%', avatar: 'images/samsung.jpg' },
    { id: 4, name: 'Sony Headphones', sales: 750, revenue: 52500, change: '-2.1%', avatar: 'images/sony.jpg' },
    { id: 5, name: 'Dell XPS 13', sales: 680, revenue: 95200, change: '+3.7%', avatar: 'images/dell.jpg' },
  ];

  return (
    <Card sx={{ p: 2, height: '100%' }}>
      <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
        Top Selling Products
      </Typography>
      <TableContainer component={Paper} sx={{ 
        backgroundColor: isDarkMode ? 'var(--card-bg-dark)' : 'var(--card-bg)',
        boxShadow: 'none'
      }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="right">Units Sold</TableCell>
              <TableCell align="right">Revenue</TableCell>
              <TableCell align="right">Change</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => {
              const isPositive = product.change.startsWith('+');
              return (
                <TableRow
                  key={product.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar 
                        src={process.env.PUBLIC_URL + "/" + product.avatar} 
                        variant="rounded"
                        sx={{ width: 40, height: 40 }}
                      />
                      <Typography variant="body1">{product.name}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell align="right">{product.sales.toLocaleString()}</TableCell>
                  <TableCell align="right">${product.revenue.toLocaleString()}</TableCell>
                  <TableCell align="right">
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'flex-end',
                      color: isPositive ? '#4caf50' : '#f44336'
                    }}>
                      {isPositive ? 
                        <ArrowUpward sx={{ fontSize: 16, mr: 0.5 }} /> : 
                        <ArrowDownward sx={{ fontSize: 16, mr: 0.5 }} />
                      }
                      {product.change}
                    </Box>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default TopProductsTable;
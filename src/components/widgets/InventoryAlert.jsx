import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Box, 
  List, 
  ListItem, 
  ListItemAvatar, 
  ListItemText, 
  Avatar,
  Chip
} from '@mui/material';
import { 
  Warning,
  ShoppingBag
} from '@mui/icons-material';
import { useTheme } from '../../contexts/ThemeContext';

const InventoryAlert = () => {
  const { isDarkMode } = useTheme();
  
  const lowStockProducts = [
    { id: 1, name: 'Wireless Headphones', stock: 8, min: 20 },
    { id: 2, name: 'Smart Watch', stock: 15, min: 25 },
    { id: 3, name: 'Bluetooth Speaker', stock: 5, min: 15 },
  ];

  return (
    <Card sx={{ 
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
      height: '100%',
      borderLeft: '4px solid #ff9800'
    }}>
      <CardContent>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          mb: 2,
          gap: 1.5
        }}>
          <Warning sx={{ color: '#ff9800', fontSize: 28 }} />
          <Typography variant="h6">
            Low Stock Alert
          </Typography>
        </Box>
        
        <List>
          {lowStockProducts.map((product) => (
            <ListItem key={product.id} sx={{ py: 1.5 }}>
              <ListItemAvatar>
                <Avatar sx={{ 
                  bgcolor: 'primary.light', 
                  width: 40, 
                  height: 40 
                }}>
                  <ShoppingBag />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={product.name}
                secondary={`Stock: ${product.stock} (Min: ${product.min})`}
              />
              <Chip 
                label="Reorder" 
                color="warning" 
                size="small"
                sx={{ fontWeight: 500 }}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default InventoryAlert;
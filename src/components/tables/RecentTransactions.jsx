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
  Chip,
  Card
} from '@mui/material';
import { useTheme } from '../../contexts/ThemeContext';

const RecentTransactions = () => {
  const { isDarkMode } = useTheme();
  
  // داده‌های نمونه
  const transactions = [
    { id: 1, customer: 'John Doe', date: '12 Jun 2025', amount: 123, status: 'Completed', avatar: 'images/user1.jpg' },
    { id: 2, customer: 'Jane Smith', date: '11 Jun 2025', amount: 89, status: 'Pending', avatar: 'images/user2.jpg' },
    { id: 3, customer: 'Robert Johnson', date: '10 Jun 2025', amount: 245, status: 'Completed', avatar: 'images/user3.jpg' },
    { id: 4, customer: 'Emily Davis', date: '9 Jun 2025', amount: 67, status: 'Failed', avatar: 'images/user4.jpg' },
    { id: 5, customer: 'Michael Wilson', date: '8 Jun 2025', amount: 189, status: 'Completed', avatar: 'images/user5.jpg' },
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'Completed': return 'success';
      case 'Pending': return 'warning';
      case 'Failed': return 'error';
      default: return 'default';
    }
  };

  return (
    <Card sx={{ p: 2, height: '100%' }}>
      <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
        Recent Transactions
      </Typography>
      <TableContainer component={Paper} sx={{ 
        backgroundColor: isDarkMode ? 'var(--card-bg-dark)' : 'var(--card-bg)',
        boxShadow: 'none'
      }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Customer</TableCell>
              <TableCell align="center">Date</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="center">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow
                key={transaction.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar 
                      src={process.env.PUBLIC_URL + "/" + transaction.avatar} 
                      sx={{ width: 32, height: 32 }}
                    />
                    <Typography variant="body1">{transaction.customer}</Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">{transaction.date}</TableCell>
                <TableCell align="right">${transaction.amount}</TableCell>
                <TableCell align="center">
                  <Chip 
                    label={transaction.status} 
                    color={getStatusColor(transaction.status)}
                    size="small"
                    sx={{ 
                      fontWeight: 500,
                      minWidth: 90
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default RecentTransactions;
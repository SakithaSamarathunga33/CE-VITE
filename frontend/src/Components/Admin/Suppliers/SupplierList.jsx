/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, Paper, Divider, IconButton } from '@mui/material';
import { Edit } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const URL = "http://localhost:4000/api/suppliers";

function SupplierList() {
  const [supplierLists, setSupplierLists] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSupplierLists = async () => {
      try {
        const response = await axios.get(URL);
        setSupplierLists(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching supplier lists:', error);
        setLoading(false);
      }
    };

    fetchSupplierLists();
  }, []);

  const handleEdit = (supId) => {
    navigate(`/admindashboard/update-supplier/${supId}`);
  };

  if (loading) return <Typography>Loading...</Typography>;
  if (supplierLists.length === 0) return <Typography>No supplier lists found.</Typography>;

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Supplier Lists
      </Typography>
      <Divider sx={{ marginBottom: 2 }} />
      {supplierLists.map((supplierList) => (
        <Paper key={supplierList.SupId} sx={{ padding: 3, marginBottom: 2 }}>
          <Typography variant="h6">Supplier ID: {supplierList.SupId}</Typography>
          <Typography variant="h6">Supplier Name: {supplierList.SupName}</Typography>
          <Typography variant="h6">
            Items: {supplierList.items.length > 0 ? supplierList.items.join(', ') : 'No items listed'}
          </Typography>
          <Typography variant="h6">
            Description: {supplierList.description || 'No Description'}
          </Typography>
          <IconButton onClick={() => handleEdit(supplierList.SupId)} color="primary" sx={{ marginTop: 1 }}>
            <Edit />
          </IconButton>
        </Paper>
      ))}
    </Box>
  );
}

export default SupplierList;

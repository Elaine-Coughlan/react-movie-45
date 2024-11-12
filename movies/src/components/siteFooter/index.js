// Pagination.js
import React from 'react';
import {  Pagination } from '@mui/material';

const siteFooter = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (event, page) => {
    onPageChange(page); 
  };

  return (
  
        <Pagination
            count={totalPages}    
            page={currentPage}
            onChange={handlePageChange} 
            color="primary"
            variant="outlined"
            shape="rounded"
            showFirstButton="true"
        />
  )
};

export default siteFooter;

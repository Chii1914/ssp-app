import React from 'react';
import TableCell from '@mui/material/TableCell';

const CustomCell = ({ children }) => {
  return (
    <TableCell align = "center">
      {children}
    </TableCell>
  );
};

export default CustomCell;
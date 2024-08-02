import React from 'react';
import TableCell from '@mui/material/TableCell';

const CustomCell = ({ children , style }) => {
  return (
    <TableCell style = {style} align = "center">
      {children}
    </TableCell>
  );
};

export default CustomCell;
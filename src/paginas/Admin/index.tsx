import React, { useState } from 'react'
import IRestaurante from '../../interfaces/IRestaurante'
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'

function AdministracaoRestaurante() {
  const [restaurantes, setRestaurantes] = useState([]);


  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              Nome
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              Nome
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default AdministracaoRestaurante
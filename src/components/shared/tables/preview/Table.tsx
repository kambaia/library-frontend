import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./styles.css";

function createData(name: string, book: string | number, trackingId: string | number, date: string, status: string) {
  return { name, trackingId, book, date, status };
}

const rows = [
  createData("Lasania Chiken Fri", 18908424,  '1.092,00', "2 March 2022", "Recebido"),
  createData("Big Baza Bang ", 18908424,  '3.030,00', "2 March 2022", "Em processamento"),
  createData("Mouth Freshner", 18908424,  '500,00', "2 March 2022", "Anulado"),
  createData("Cupcake", 18908421,  '49,003.00',  "2 March 2022", "Recebido"),
  createData("Lasania Chiken Fri", 18908424,  '12.000,00', "2 March 2022", "Recebido"),
  createData("Big Baza Bang ", 18908424,  '900,00', "2 March 2022", "Pending"),
  createData("Mouth Freshner", 18908424,  '15.000,00', "2 March 2022", "Recebido"),
  createData("Cupcake", 18908421, '1493.00', "2 March 2022", "Delivered"),
  createData("Lasania Chiken Fri", 18908424,  '100,00', "2 March 2022", "Recebido"),
  createData("Big Baza Bang ", 18908424,  '600,00', "2 March 2022", "Pending"),
  createData("Mouth Freshner", 18908424,  '20.000,00', "2 March 2022", "Recebido"),
  createData("Cupcake", 18908421, '493.00', "2 March 2022", "Delivered"),
];


const makeStyle=(status: string)=>{
  if(status === 'Approved')
  {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    }
  }
  else if(status === 'Pending')
  {
    return{
      background: '#ffadad8f',
      color: 'red',
    }
  }
  else{
    return{
      background: '#59bfff',
      color: 'white',
    }
  }
}

export default function TablePreviw() {
  return (
      <div className="Table">
      <h3>Transferencias</h3>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Enviado por</TableCell>
                <TableCell align="left">Código da Transfêrencia</TableCell>
               
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                 
                  
                  
                  <TableCell align="left">{row.trackingId}</TableCell>
                  <TableCell align="left">{row.date}</TableCell>
                  <TableCell align="left">
                    <span className="status" style={makeStyle(row.status)}>{row.status}</span>
                  </TableCell>
                  <TableCell align="left" className="Details">Recebido</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
}
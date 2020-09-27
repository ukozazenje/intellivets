import React, { useState } from 'react';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import useTable from '../useTable';
import Search from '@material-ui/icons/Search';
import Toolbar from '@material-ui/core/Toolbar';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  searchInput: {
    width: '30%',
  },
  toolBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  toolBarHeading: {
    ...theme.typography.h4,
  },
  tableCell: {
    fontFamily: 'Roboto',
    fontWeight: 500,
    textTransform: 'none',
    fontSize: '1.125rem',
    color: `#444`,
  },
}));
const headCells = [
  { id: 'fullName', label: 'Date' },
  { id: 'email', label: 'Full name' },
  { id: 'mobile', label: 'Veterinarian' },
  { id: 'status', label: 'Status' },
  { id: 'details', label: 'Details', disableSorting: true },
];

const Specialist = () => {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('lg'));
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  const [open, setOpen] = React.useState(false);
  const [selectedVet, setSelectedVet] = useState(null);

  const [records, setRecords] = useState([
    {
      id: '18041985',
      date: '2020/07/02',
      fullName: 'Zoe',
      veterinarian: {
        id: 12345,
        name: 'Mr name',
        phone: '7817693011',
        email: 'dr_man@norwoodanimalhospital.com',
        address: '437 Walpole Street, Norwood 02062, MA, USA',
        licenseNumber: 'MA7601',
      },
      status: 'pending',
    },
    {
      id: '18041985',
      date: '2020/07/02',
      fullName: 'Zoe',
      veterinarian: {
        id: 123456,
        name: 'Mr name',
        phone: '7817693011',
        email: 'dr_man@norwoodanimalhospital.com',
        address: '437 Walpole Street, Norwood 02062, MA, USA',
        licenseNumber: 'MA7601',
      },
      status: 'pending',
    },
    {
      id: '18041985',
      date: '2020/07/02',
      fullName: 'Zoe',
      veterinarian: {
        id: 123457,
        name: 'Mr name',
        phone: '7817693011',
        email: 'dr_man@norwoodanimalhospital.com',
        address: '437 Walpole Street, Norwood 02062, MA, USA',
        licenseNumber: 'MA7601',
      },
      status: 'pending',
    },
  ]);
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting,
  } = useTable(records, headCells, filterFn);

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value == '') return items;
        else
          return items.filter((x) =>
            x.fullName.toLowerCase().includes(target.value),
          );
      },
    });
  };

  const handleClickOpen = (id) => {
    records.map((record) => setSelectedVet(record.veterinarian));
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <Dialog
        fullWidth={true}
        maxWidth="md"
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">Vet Info</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <TableContainer>
              <Table className={classes.table} aria-label="simple table">
                {/* <TableHead>
                  <TableRow>
                    <TableCell className={classes.tableCell}>Name</TableCell>
                    <TableCell className={classes.tableCell} align="left">Phone</TableCell>
                    <TableCell className={classes.tableCell} align="left">Email</TableCell>
                    <TableCell className={classes.tableCell} align="left">Address</TableCell>
                    <TableCell className={classes.tableCell} align="left">License Number</TableCell>
                  </TableRow>
                </TableHead> */}
                <TableBody>
                  <StyledTableRow>
                    <TableCell className={classes.tableCell} align="left">
                      Name
                    </TableCell>
                    <TableCell className={classes.tableCell} align="left">
                      {selectedVet && selectedVet.name}
                    </TableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <TableCell className={classes.tableCell} align="left">
                      Phone
                    </TableCell>
                    <TableCell className={classes.tableCell} align="left">
                      {selectedVet && selectedVet.phone}
                    </TableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <TableCell className={classes.tableCell} align="left">
                      Email
                    </TableCell>
                    <TableCell className={classes.tableCell} align="left">
                      {selectedVet && selectedVet.email}
                    </TableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <TableCell className={classes.tableCell} align="left">
                      Address
                    </TableCell>
                    <TableCell className={classes.tableCell} align="left">
                      {selectedVet && selectedVet.address}
                    </TableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <TableCell className={classes.tableCell} align="left">
                      License Number
                    </TableCell>
                    <TableCell className={classes.tableCell} align="left">
                      {selectedVet && selectedVet.licenseNumber}
                    </TableCell>
                  </StyledTableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <Container maxWidth="xl">
        <Paper className={classes.paper} elevation={2}>
          <Toolbar className={classes.toolBar}>
            <TextField
              variant="outlined"
              label="Search veterinarian"
              className={classes.searchInput}
              onChange={handleSearch}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
            <h4 className={classes.toolBarHeading}>Consults Pending</h4>
          </Toolbar>
          <TblContainer>
            <TblHead />
            <TableBody>
              {recordsAfterPagingAndSorting().map((item) => (
                <TableRow key={item.id}>
                  <TableCell className={classes.tableCell}>
                    {item.date}
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    {item.fullName}
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    <Link
                      onClick={() => handleClickOpen(item.id)}
                      color="inherit"
                    >
                      {item.veterinarian.name}
                    </Link>
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    {item.status}
                  </TableCell>
                  <TableCell className={classes.tableCell}>View</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </TblContainer>
          <TblPagination />
        </Paper>
        <Paper className={classes.paper}>
          <Toolbar className={classes.toolBar}>
            <TextField
              variant="outlined"
              label="Search veterinarian"
              className={classes.searchInput}
              onChange={handleSearch}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
            <h4 className={classes.toolBarHeading}>Consults Completed</h4>
          </Toolbar>
          <TblContainer>
            <TblHead />
            <TableBody>
              {recordsAfterPagingAndSorting().map((item) => (
                <TableRow key={item.id}>
                  <TableCell className={classes.tableCell}>
                    {item.date}
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    {item.fullName}
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    {item.veterinarian.name}
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    {item.status}
                  </TableCell>
                  <TableCell className={classes.tableCell}>View</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </TblContainer>
          <TblPagination />
        </Paper>
      </Container>
    </div>
  );
};

export default Specialist;

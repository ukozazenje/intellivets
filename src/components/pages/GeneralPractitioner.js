/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
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
    fontFamily: 'Open Sans',
    fontWeight: 600,
    textTransform: 'none',
    fontSize: '1.125rem',
    color: `#444`,
  },
}));
const headCells = [
  { id: 'DateRequestedConsult', label: 'Requested Consult' },
  { id: 'Patient', label: 'Patient name' },
  { id: 'Specialty', label: 'Specialty', disableSorting: true },
  {
    id: 'SpecialistRequested',
    label: 'Specialist Requested',
    disableSorting: true,
  },
  { id: 'Signalment', label: 'Signalment', disableSorting: true },
  { id: 'Inbox', label: 'Inbox', disableSorting: true },
  { id: 'referral-Form', label: 'Referral   Form', disableSorting: true },
  { id: 'Consultation', label: 'Consultation form', disableSorting: true },
  { id: 'Medical Records', label: 'Medical Records', disableSorting: true },
  { id: 'Estimated Completion Date', label: 'Estimated Completion' },
];

const GeneralPractitioner = () => {
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
      id: '312312399-02349',
      dateRequestedConsult: '02/02/2020',
      patient: 'ABBEY',
      specialty: 'Behavior',
      specialistRequested: 'Dr. KimMi Whitehead',
      signalment: 'View',
      inbox: 'Inbox',
      referralForm: 'View',
      consultation: 'View',
      medicalRecords: 'View',
      estimatedCompletionDate: '02/04/2020',
    },
    {
      id: '3123123543543',
      dateRequestedConsult: '02/02/2020',
      patient: 'BEN',
      specialty: 'Nutrition',
      specialistRequested: 'Dr. KimMi Whitehead',
      signalment: 'View',
      inbox: 'Inbox',
      referralForm: 'View',
      consultation: 'View',
      medicalRecords: 'View',
      estimatedCompletionDate: '02/04/2020',
    },
    {
      id: '3123123tytey',
      dateRequestedConsult: '02/02/2020',
      patient: 'BIBBLES',
      specialty: 'Nutrition',
      specialistRequested: 'James Serpell',
      signalment: 'View',
      inbox: 'Inbox',
      referralForm: 'View',
      consultation: 'View',
      medicalRecords: 'View',
      estimatedCompletionDate: '02/04/2020',
    },
    {
      id: '3123123qweqw',
      dateRequestedConsult: '02/02/2020',
      patient: 'BOBBIE',
      specialty: 'Anesthesia',
      specialistRequested: 'Carlo Siracusa',
      signalment: 'View',
      inbox: 'Inbox',
      referralForm: 'View',
      consultation: 'View',
      medicalRecords: 'View',
      estimatedCompletionDate: '02/04/2020',
    },
    {
      id: '3123123dasd',
      dateRequestedConsult: '02/02/2020',
      patient: 'CASSIS',
      specialty: 'Ophthalmology',
      specialistRequested: 'Dr. KimMi Whitehead',
      signalment: 'View',
      inbox: 'Inbox',
      referralForm: 'View',
      consultation: 'View',
      medicalRecords: 'View',
      estimatedCompletionDate: '02/04/2020',
    },
    {
      id: '3123123dsad',
      dateRequestedConsult: '02/02/2020',
      patient: 'DOLLY',
      specialty: 'Nutrition',
      specialistRequested: 'Dr. KimMi Whitehead',
      signalment: 'View',
      inbox: 'Inbox',
      referralForm: 'View',
      consultation: 'View',
      medicalRecords: 'View',
      estimatedCompletionDate: '02/04/2020',
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
      <Container maxWidth="xl" style={{ overflowX: 'auto' }}>
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
          <div style={{ overflowX: 'auto' }}>
            <TblContainer>
              <TblHead />
              <TableBody>
                {recordsAfterPagingAndSorting().map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className={classes.tableCell}>
                      {item.dateRequestedConsult}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      {item.patient}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      {item.specialty}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      {item.specialistRequested}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      {item.signalment}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      {item.inbox}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      {item.referralForm}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      {item.consultation}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      {item.medicalRecords}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      {item.estimatedCompletionDate}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </TblContainer>
          </div>
          <TblPagination />
        </Paper>
        {/* <Paper className={classes.paper}>
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
        </Paper> */}
      </Container>
    </div>
  );
};

export default GeneralPractitioner;

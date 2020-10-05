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
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import VisibilityIcon from '@material-ui/icons/Visibility';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import Avatar from '@material-ui/core/Avatar';
import avatarImg from '../../assets/home/avatar.jpg';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import AssessmentIcon from '@material-ui/icons/Assessment';
import Checkbox from '@material-ui/core/Checkbox';
import { isThisMinute } from 'date-fns';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    ...theme.tablePaper,
    margin: theme.spacing(5),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
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
    fontFamily: 'Open Sans',
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#32325d',
  },
  heroBackground: {
    background: 'linear-gradient(87deg, #212529 0, #212229 100%) !important',
    height: '380px',
    width: '100%',
    position: 'absolute',
    top: '0',
    zIndex: '0',
  },
  pageContainer: {
    zIndex: '99',
    position: 'relative',
    paddingTop: theme.spacing(7),
  },
  // tableCell: {
  //   fontFamily: 'Open Sans',
  //   fontWeight: 600,
  //   // color: 'red',
  //   textTransform: 'none',
  //   fontSize: '0.875rem',
  //   color: `#444`,
  // },
}));
const headCells = [
  { id: 'date', label: 'Date' },
  { id: 'patient', label: 'Patient' },
  { id: 'referring Veterinarian', label: 'Referring Veterinarian' },
  { id: 'details', label: 'Details', disableSorting: true },
  { id: 'signalment', label: 'Signalment', disableSorting: true },
  { id: 'inbox', label: 'Inbox', disableSorting: true },
  { id: 'referral-form', label: 'Referral Form', disableSorting: true },
  { id: 'consultation-form', label: 'Consultation Form', disableSorting: true },
  { id: 'medical-records', label: 'Medical Records', disableSorting: true },
  { id: 'imaging', label: 'Imaging', disableSorting: true },
  { id: 'video', label: 'video', disableSorting: true },
  {
    id: 'virtual-conference',
    label: 'Virtual Conference',
    disableSorting: true,
  },
  { id: 'evaluation-report', label: 'Evaluation Report', disableSorting: true },
  { id: 'archive', label: 'Archive', disableSorting: true },
  { id: 'status', label: 'Status' },
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
      full_name: 'Eliza Larsen',
      inbox: '10',
      virtual_conference: '2020/07/02',
      status: 'Pending',
      patient: {
        pet: {
          name: 'dsadasdas',
          breed: 'Akita',
          dateOfBirth: '2020-09-18T18:39:00.000Z',
          dog_age_unit: 'weeks',
          dogs_age: '12',
          gender: 'female',
          acquire_dog: ' from a breeder',
          age_acquired: '1221',
          acquired_age_unit: 'weeks',
          neutered: 'yes',
          neutered_age: '12',
          neutered_age_unit: 'weeks',
          neutered_reason: 'to correct or reduce an existing health problem',
          health_problems: 'yes',
          health_problem_info: 'dasdasd',
          concerned: 'only minor problems',
          roles: 'field trials/hunting',
          first_owned: 'no',
          number_of_owned: '1 or 2',
          dog_as_chil: 'yes',
          other_dogs: 'no',
          other_dogs_age: 'older',
          invited_by_vet: 'no',
        },
        veterinarian: {
          id: 12345,
          name: 'Mr name',
          phone: '7817693011',
          email: 'dr_man@norwoodanimalhospital.com',
          address: '437 Walpole Street, Norwood 02062, MA, USA',
          licenseNumber: 'MA7601',
        },
      },
    },
    {
      id: '18041985',
      date: '2020/07/02',
      full_name: 'Manha Middleton',
      inbox: '10',
      virtual_conference: '2020/07/02',
      status: 'Pending',
      patient: {
        pet: {
          name: 'dsadasdas',
          breed: 'Akita',
          dateOfBirth: '2020-09-18T18:39:00.000Z',
          dog_age_unit: 'weeks',
          dogs_age: '12',
          gender: 'female',
          acquire_dog: ' from a breeder',
          age_acquired: '1221',
          acquired_age_unit: 'weeks',
          neutered: 'yes',
          neutered_age: '12',
          neutered_age_unit: 'weeks',
          neutered_reason: 'to correct or reduce an existing health problem',
          health_problems: 'yes',
          health_problem_info: 'dasdasd',
          concerned: 'only minor problems',
          roles: 'field trials/hunting',
          first_owned: 'no',
          number_of_owned: '1 or 2',
          dog_as_chil: 'yes',
          other_dogs: 'no',
          other_dogs_age: 'older',
          invited_by_vet: 'no',
        },
        veterinarian: {
          id: 12345,
          name: 'Mr name',
          phone: '7817693011',
          email: 'dr_man@norwoodanimalhospital.com',
          address: '437 Walpole Street, Norwood 02062, MA, USA',
          licenseNumber: 'MA7601',
        },
      },
    },
    {
      id: '18041985',
      date: '2020/07/02',
      full_name: 'Elysha Aldred',
      inbox: '10',
      virtual_conference: '2020/07/02',
      status: 'Pending',
      patient: {
        pet: {
          name: 'dsadasdas',
          breed: 'Akita',
          dateOfBirth: '2020-09-18T18:39:00.000Z',
          dog_age_unit: 'weeks',
          dogs_age: '12',
          gender: 'female',
          acquire_dog: ' from a breeder',
          age_acquired: '1221',
          acquired_age_unit: 'weeks',
          neutered: 'yes',
          neutered_age: '12',
          neutered_age_unit: 'weeks',
          neutered_reason: 'to correct or reduce an existing health problem',
          health_problems: 'yes',
          health_problem_info: 'dasdasd',
          concerned: 'only minor problems',
          roles: 'field trials/hunting',
          first_owned: 'no',
          number_of_owned: '1 or 2',
          dog_as_chil: 'yes',
          other_dogs: 'no',
          other_dogs_age: 'older',
          invited_by_vet: 'no',
        },
        veterinarian: {
          id: 12345,
          name: 'Mr name',
          phone: '7817693011',
          email: 'dr_man@norwoodanimalhospital.com',
          address: '437 Walpole Street, Norwood 02062, MA, USA',
          licenseNumber: 'MA7601',
        },
      },
    },
    {
      id: '18041985',
      date: '2020/07/02',
      full_name: 'Dean Redfern',
      inbox: '10',
      virtual_conference: '2020/07/02',
      status: 'Pending',
      patient: {
        pet: {
          name: 'dsadasdas',
          breed: 'Akita',
          dateOfBirth: '2020-09-18T18:39:00.000Z',
          dog_age_unit: 'weeks',
          dogs_age: '12',
          gender: 'female',
          acquire_dog: ' from a breeder',
          age_acquired: '1221',
          acquired_age_unit: 'weeks',
          neutered: 'yes',
          neutered_age: '12',
          neutered_age_unit: 'weeks',
          neutered_reason: 'to correct or reduce an existing health problem',
          health_problems: 'yes',
          health_problem_info: 'dasdasd',
          concerned: 'only minor problems',
          roles: 'field trials/hunting',
          first_owned: 'no',
          number_of_owned: '1 or 2',
          dog_as_chil: 'yes',
          other_dogs: 'no',
          other_dogs_age: 'older',
          invited_by_vet: 'no',
        },
        veterinarian: {
          id: 12345,
          name: 'Mr name',
          phone: '7817693011',
          email: 'dr_man@norwoodanimalhospital.com',
          address: '437 Walpole Street, Norwood 02062, MA, USA',
          licenseNumber: 'MA7601',
        },
      },
    },
    {
      id: '18041985',
      date: '2020/07/02',
      full_name: 'Fraya Burrows',
      inbox: '10',
      virtual_conference: '2020/07/02',
      status: 'Pending',
      patient: {
        pet: {
          name: 'dsadasdas',
          breed: 'Akita',
          dateOfBirth: '2020-09-18T18:39:00.000Z',
          dog_age_unit: 'weeks',
          dogs_age: '12',
          gender: 'female',
          acquire_dog: ' from a breeder',
          age_acquired: '1221',
          acquired_age_unit: 'weeks',
          neutered: 'yes',
          neutered_age: '12',
          neutered_age_unit: 'weeks',
          neutered_reason: 'to correct or reduce an existing health problem',
          health_problems: 'yes',
          health_problem_info: 'dasdasd',
          concerned: 'only minor problems',
          roles: 'field trials/hunting',
          first_owned: 'no',
          number_of_owned: '1 or 2',
          dog_as_chil: 'yes',
          other_dogs: 'no',
          other_dogs_age: 'older',
          invited_by_vet: 'no',
        },
        veterinarian: {
          id: 12345,
          name: 'Mr name',
          phone: '7817693011',
          email: 'dr_man@norwoodanimalhospital.com',
          address: '437 Walpole Street, Norwood 02062, MA, USA',
          licenseNumber: 'MA7601',
        },
      },
    },
    {
      id: '18041985',
      date: '2020/07/02',
      full_name: 'Cassia Ratcliffe',
      inbox: '10',
      virtual_conference: '2020/07/02',
      status: 'Pending',
      patient: {
        pet: {
          name: 'dsadasdas',
          breed: 'Akita',
          dateOfBirth: '2020-09-18T18:39:00.000Z',
          dog_age_unit: 'weeks',
          dogs_age: '12',
          gender: 'female',
          acquire_dog: ' from a breeder',
          age_acquired: '1221',
          acquired_age_unit: 'weeks',
          neutered: 'yes',
          neutered_age: '12',
          neutered_age_unit: 'weeks',
          neutered_reason: 'to correct or reduce an existing health problem',
          health_problems: 'yes',
          health_problem_info: 'dasdasd',
          concerned: 'only minor problems',
          roles: 'field trials/hunting',
          first_owned: 'no',
          number_of_owned: '1 or 2',
          dog_as_chil: 'yes',
          other_dogs: 'no',
          other_dogs_age: 'older',
          invited_by_vet: 'no',
        },
        veterinarian: {
          id: 12345,
          name: 'Mr name',
          phone: '7817693011',
          email: 'dr_man@norwoodanimalhospital.com',
          address: '437 Walpole Street, Norwood 02062, MA, USA',
          licenseNumber: 'MA7601',
        },
      },
    },
    {
      id: '18041985',
      date: '2020/07/02',
      full_name: 'Mason Simon',
      inbox: '10',
      virtual_conference: '2020/07/02',
      status: 'Pending',
      patient: {
        pet: {
          name: 'dsadasdas',
          breed: 'Akita',
          dateOfBirth: '2020-09-18T18:39:00.000Z',
          dog_age_unit: 'weeks',
          dogs_age: '12',
          gender: 'female',
          acquire_dog: ' from a breeder',
          age_acquired: '1221',
          acquired_age_unit: 'weeks',
          neutered: 'yes',
          neutered_age: '12',
          neutered_age_unit: 'weeks',
          neutered_reason: 'to correct or reduce an existing health problem',
          health_problems: 'yes',
          health_problem_info: 'dasdasd',
          concerned: 'only minor problems',
          roles: 'field trials/hunting',
          first_owned: 'no',
          number_of_owned: '1 or 2',
          dog_as_chil: 'yes',
          other_dogs: 'no',
          other_dogs_age: 'older',
          invited_by_vet: 'no',
        },
        veterinarian: {
          id: 12345,
          name: 'Mr name',
          phone: '7817693011',
          email: 'dr_man@norwoodanimalhospital.com',
          address: '437 Walpole Street, Norwood 02062, MA, USA',
          licenseNumber: 'MA7601',
        },
      },
    },
    {
      id: '18041985',
      date: '2020/07/02',
      full_name: 'Gracie-May Mcphee',
      inbox: '10',
      virtual_conference: '2020/07/02',
      status: 'Pending',
      patient: {
        pet: {
          name: 'dsadasdas',
          breed: 'Akita',
          dateOfBirth: '2020-09-18T18:39:00.000Z',
          dog_age_unit: 'weeks',
          dogs_age: '12',
          gender: 'female',
          acquire_dog: ' from a breeder',
          age_acquired: '1221',
          acquired_age_unit: 'weeks',
          neutered: 'yes',
          neutered_age: '12',
          neutered_age_unit: 'weeks',
          neutered_reason: 'to correct or reduce an existing health problem',
          health_problems: 'yes',
          health_problem_info: 'dasdasd',
          concerned: 'only minor problems',
          roles: 'field trials/hunting',
          first_owned: 'no',
          number_of_owned: '1 or 2',
          dog_as_chil: 'yes',
          other_dogs: 'no',
          other_dogs_age: 'older',
          invited_by_vet: 'no',
        },
        veterinarian: {
          id: 12345,
          name: 'Mr name',
          phone: '7817693011',
          email: 'dr_man@norwoodanimalhospital.com',
          address: '437 Walpole Street, Norwood 02062, MA, USA',
          licenseNumber: 'MA7601',
        },
      },
    },
    {
      id: '18041985',
      date: '2020/07/02',
      full_name: 'Imaad Gill',
      inbox: '10',
      virtual_conference: '2020/07/02',
      status: 'Pending',
      patient: {
        pet: {
          name: 'dsadasdas',
          breed: 'Akita',
          dateOfBirth: '2020-09-18T18:39:00.000Z',
          dog_age_unit: 'weeks',
          dogs_age: '12',
          gender: 'female',
          acquire_dog: ' from a breeder',
          age_acquired: '1221',
          acquired_age_unit: 'weeks',
          neutered: 'yes',
          neutered_age: '12',
          neutered_age_unit: 'weeks',
          neutered_reason: 'to correct or reduce an existing health problem',
          health_problems: 'yes',
          health_problem_info: 'dasdasd',
          concerned: 'only minor problems',
          roles: 'field trials/hunting',
          first_owned: 'no',
          number_of_owned: '1 or 2',
          dog_as_chil: 'yes',
          other_dogs: 'no',
          other_dogs_age: 'older',
          invited_by_vet: 'no',
        },
        veterinarian: {
          id: 12345,
          name: 'Mr name',
          phone: '7817693011',
          email: 'dr_man@norwoodanimalhospital.com',
          address: '437 Walpole Street, Norwood 02062, MA, USA',
          licenseNumber: 'MA7601',
        },
      },
    },
    {
      id: '18041985',
      date: '2020/07/02',
      full_name: 'Tamera Parkes',
      inbox: '10',
      virtual_conference: '2020/07/02',
      status: 'Pending',
      patient: {
        pet: {
          name: 'dsadasdas',
          breed: 'Akita',
          dateOfBirth: '2020-09-18T18:39:00.000Z',
          dog_age_unit: 'weeks',
          dogs_age: '12',
          gender: 'female',
          acquire_dog: ' from a breeder',
          age_acquired: '1221',
          acquired_age_unit: 'weeks',
          neutered: 'yes',
          neutered_age: '12',
          neutered_age_unit: 'weeks',
          neutered_reason: 'to correct or reduce an existing health problem',
          health_problems: 'yes',
          health_problem_info: 'dasdasd',
          concerned: 'only minor problems',
          roles: 'field trials/hunting',
          first_owned: 'no',
          number_of_owned: '1 or 2',
          dog_as_chil: 'yes',
          other_dogs: 'no',
          other_dogs_age: 'older',
          invited_by_vet: 'no',
        },
        veterinarian: {
          id: 12345,
          name: 'Mr name',
          phone: '7817693011',
          email: 'dr_man@norwoodanimalhospital.com',
          address: '437 Walpole Street, Norwood 02062, MA, USA',
          licenseNumber: 'MA7601',
        },
      },
    },
    {
      id: '18041985',
      date: '2020/07/02',
      full_name: 'Nial Gibbs',
      inbox: '10',
      virtual_conference: '2020/07/02',
      status: 'Pending',
      patient: {
        pet: {
          name: 'dsadasdas',
          breed: 'Akita',
          dateOfBirth: '2020-09-18T18:39:00.000Z',
          dog_age_unit: 'weeks',
          dogs_age: '12',
          gender: 'female',
          acquire_dog: ' from a breeder',
          age_acquired: '1221',
          acquired_age_unit: 'weeks',
          neutered: 'yes',
          neutered_age: '12',
          neutered_age_unit: 'weeks',
          neutered_reason: 'to correct or reduce an existing health problem',
          health_problems: 'yes',
          health_problem_info: 'dasdasd',
          concerned: 'only minor problems',
          roles: 'field trials/hunting',
          first_owned: 'no',
          number_of_owned: '1 or 2',
          dog_as_chil: 'yes',
          other_dogs: 'no',
          other_dogs_age: 'older',
          invited_by_vet: 'no',
        },
        veterinarian: {
          id: 12345,
          name: 'Mr name',
          phone: '7817693011',
          email: 'dr_man@norwoodanimalhospital.com',
          address: '437 Walpole Street, Norwood 02062, MA, USA',
          licenseNumber: 'MA7601',
        },
      },
    },
    {
      id: '18041985',
      date: '2020/07/02',
      full_name: 'Tolga Ashley',
      inbox: '10',
      virtual_conference: '2020/07/02',
      status: 'Pending',
      patient: {
        pet: {
          name: 'dsadasdas',
          breed: 'Akita',
          dateOfBirth: '2020-09-18T18:39:00.000Z',
          dog_age_unit: 'weeks',
          dogs_age: '12',
          gender: 'female',
          acquire_dog: ' from a breeder',
          age_acquired: '1221',
          acquired_age_unit: 'weeks',
          neutered: 'yes',
          neutered_age: '12',
          neutered_age_unit: 'weeks',
          neutered_reason: 'to correct or reduce an existing health problem',
          health_problems: 'yes',
          health_problem_info: 'dasdasd',
          concerned: 'only minor problems',
          roles: 'field trials/hunting',
          first_owned: 'no',
          number_of_owned: '1 or 2',
          dog_as_chil: 'yes',
          other_dogs: 'no',
          other_dogs_age: 'older',
          invited_by_vet: 'no',
        },
        veterinarian: {
          id: 12345,
          name: 'Mr name',
          phone: '7817693011',
          email: 'dr_man@norwoodanimalhospital.com',
          address: '437 Walpole Street, Norwood 02062, MA, USA',
          licenseNumber: 'MA7601',
        },
      },
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
    console.log(target.value);
    setFilterFn({
      fn: (items) => {
        if (target.value == '') return items;
        else
          return items.filter((x) =>
            x.patient.veterinarian.name.toLowerCase().includes(target.value),
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
      <div className={classes.heroBackground}></div>
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
      <Container className={classes.pageContainer} maxWidth="xl">
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
                    {item.full_name}
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    <Link
                      onClick={() => handleClickOpen(item.id)}
                      color="inherit"
                    >
                      {item.patient.veterinarian.name}
                    </Link>
                  </TableCell>
                  <TableCell className={classes.tableCell}>View</TableCell>
                  <TableCell className={classes.tableCell}>View</TableCell>
                  <TableCell className={classes.tableCell}>
                    <Badge badgeContent={item.inbox || 0} color="secondary">
                      <MailIcon />
                    </Badge>
                  </TableCell>
                  <TableCell className={classes.tableCell}>View</TableCell>
                  <TableCell className={classes.tableCell}>View</TableCell>
                  <TableCell className={classes.tableCell}>View</TableCell>
                  <TableCell className={classes.tableCell}>
                    <Avatar alt="Corgy dog" src={avatarImg} />
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    <VideoLibraryIcon color="error" />
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    {item.virtual_conference}
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    <AssessmentIcon color="secondary" />
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    <Checkbox />
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    {item.status}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </TblContainer>
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

export default Specialist;

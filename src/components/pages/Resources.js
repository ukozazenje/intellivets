import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
const useStyles = makeStyles((theme) => ({
  documentWrapper: {
    display: 'flex',
    width: '48%',
    alignItems: 'center',
    border: '1px solid #e8ecee',
    borderRadius: '8px',
    marginBottom: theme.spacing(3),
    // padding: '2px',
  },
  paperWrapper: {
    padding: theme.spacing(3),
  },
  documentIcon: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
  controls: {
    width: '16%',
    display: 'flex',
    justifyContent: 'space-around',
  },
  fileData: {
    display: 'flex',
    alignItems: 'center',
    width: '80%',
  },
}));

const Resources = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Container maxWidth="xl">
      <Grid container spacing={4}>
        <Grid item md={6}>
          <Paper className={classes.paperWrapper} elevation={2}>
            <h3>ARTICLES</h3>
            <Grid container justify="space-between">
              <Box className={classes.documentWrapper}>
                <div className={classes.fileData}>
                  <PictureAsPdfIcon
                    color="error"
                    className={classes.documentIcon}
                  />
                  <p>Dog Body Language Basics</p>
                </div>
                <div className={classes.controls}>
                  <EditIcon color="primary" />
                  <DeleteIcon color="error" />
                </div>
              </Box>
              <Box className={classes.documentWrapper}>
                <div className={classes.fileData}>
                  <PictureAsPdfIcon
                    color="error"
                    className={classes.documentIcon}
                  />
                  <p>Dog Body Language Basics</p>
                </div>
                <div className={classes.controls}>
                  <EditIcon color="primary" />
                  <DeleteIcon color="error" />
                </div>
              </Box>
              <Box className={classes.documentWrapper}>
                <div className={classes.fileData}>
                  <PictureAsPdfIcon
                    color="error"
                    className={classes.documentIcon}
                  />
                  <p>Dog Body Language Basics</p>
                </div>
                <div className={classes.controls}>
                  <EditIcon color="primary" />
                  <DeleteIcon color="error" />
                </div>
              </Box>
              <Box className={classes.documentWrapper}>
                <div className={classes.fileData}>
                  <PictureAsPdfIcon
                    color="error"
                    className={classes.documentIcon}
                  />
                  <p>Dog Body Language Basics</p>
                </div>
                <div className={classes.controls}>
                  <EditIcon color="primary" />
                  <DeleteIcon color="error" />
                </div>
              </Box>
              <Box className={classes.documentWrapper}>
                <div className={classes.fileData}>
                  <PictureAsPdfIcon
                    color="error"
                    className={classes.documentIcon}
                  />
                  <p>Dog Body Language Basics</p>
                </div>
                <div className={classes.controls}>
                  <EditIcon color="primary" />
                  <DeleteIcon color="error" />
                </div>
              </Box>
              <Box className={classes.documentWrapper}>
                <div className={classes.fileData}>
                  <PictureAsPdfIcon
                    color="error"
                    className={classes.documentIcon}
                  />
                  <p>Dog Body Language Basics</p>
                </div>
                <div className={classes.controls}>
                  <EditIcon color="primary" />
                  <DeleteIcon color="error" />
                </div>
              </Box>
              <Box className={classes.documentWrapper}>
                <div className={classes.fileData}>
                  <PictureAsPdfIcon
                    color="error"
                    className={classes.documentIcon}
                  />
                  <p>Dog Body Language Basics</p>
                </div>
                <div className={classes.controls}>
                  <EditIcon color="primary" />
                  <DeleteIcon color="error" />
                </div>
              </Box>
              <Box className={classes.documentWrapper}>
                <div className={classes.fileData}>
                  <PictureAsPdfIcon
                    color="error"
                    className={classes.documentIcon}
                  />
                  <p>Dog Body Language Basics</p>
                </div>
                <div className={classes.controls}>
                  <EditIcon color="primary" />
                  <DeleteIcon color="error" />
                </div>
              </Box>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={2}>
            <Paper className={classes.paperWrapper} elevation={2}>
              <h3>Videos</h3>
              <Grid container justify="space-between">
                <Box className={classes.documentWrapper}>
                  <div className={classes.fileData}>
                    <VideoLibraryIcon
                      color="error"
                      className={classes.documentIcon}
                    />
                    <p>Dog Body Language Basics</p>
                  </div>
                  <div className={classes.controls}>
                    <EditIcon color="primary" />
                    <DeleteIcon color="error" />
                  </div>
                </Box>

                <Box className={classes.documentWrapper}>
                  <div className={classes.fileData}>
                    <VideoLibraryIcon
                      color="error"
                      className={classes.documentIcon}
                    />
                    <p>Dog Body Language Basics</p>
                  </div>
                  <div className={classes.controls}>
                    <EditIcon color="primary" />
                    <DeleteIcon color="error" />
                  </div>
                </Box>

                <Box className={classes.documentWrapper}>
                  <div className={classes.fileData}>
                    <VideoLibraryIcon
                      color="error"
                      className={classes.documentIcon}
                    />
                    <p>Dog Body Language Basics</p>
                  </div>
                  <div className={classes.controls}>
                    <EditIcon color="primary" />
                    <DeleteIcon color="error" />
                  </div>
                </Box>

                <Box className={classes.documentWrapper}>
                  <div className={classes.fileData}>
                    <VideoLibraryIcon
                      color="error"
                      className={classes.documentIcon}
                    />
                    <p>Dog Body Language Basics</p>
                  </div>
                  <div className={classes.controls}>
                    <EditIcon color="primary" />
                    <DeleteIcon color="error" />
                  </div>
                </Box>

                <Box className={classes.documentWrapper}>
                  <div className={classes.fileData}>
                    <VideoLibraryIcon
                      color="error"
                      className={classes.documentIcon}
                    />
                    <p>Dog Body Language Basics</p>
                  </div>
                  <div className={classes.controls}>
                    <EditIcon color="primary" />
                    <DeleteIcon color="error" />
                  </div>
                </Box>

                <Box className={classes.documentWrapper}>
                  <div className={classes.fileData}>
                    <VideoLibraryIcon
                      color="error"
                      className={classes.documentIcon}
                    />
                    <p>Dog Body Language Basics</p>
                  </div>
                  <div className={classes.controls}>
                    <EditIcon color="primary" />
                    <DeleteIcon color="error" />
                  </div>
                </Box>

                <Box className={classes.documentWrapper}>
                  <div className={classes.fileData}>
                    <VideoLibraryIcon
                      color="error"
                      className={classes.documentIcon}
                    />
                    <p>Dog Body Language Basics</p>
                  </div>
                  <div className={classes.controls}>
                    <EditIcon color="primary" />
                    <DeleteIcon color="error" />
                  </div>
                </Box>

                <Box className={classes.documentWrapper}>
                  <div className={classes.fileData}>
                    <VideoLibraryIcon
                      color="error"
                      className={classes.documentIcon}
                    />
                    <p>Dog Body Language Basics</p>
                  </div>
                  <div className={classes.controls}>
                    <EditIcon color="primary" />
                    <DeleteIcon color="error" />
                  </div>
                </Box>
              </Grid>
            </Paper>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Resources;

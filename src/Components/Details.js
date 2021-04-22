import React from "react";
import PropTypes from "prop-types";
import { useStyles } from "./Admin/Styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

NewsDetails.propTypes = {
  post: PropTypes.object,
};

export function NewsDetails(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <div className="details_wrapper">
      <Paper
        className={classes.mainFeaturedPost}
        style={{
          backgroundImage: `url(https://i0.wp.com/storage.googleapis.com/kp-wordpress-media/2021/04/8c4daf37-drakes.jpg?w=2400)`,
        }}
      >
        {/* Increase the priority of the hero background image */}
        {
          <img
            style={{ display: "none" }}
            src="https://i0.wp.com/storage.googleapis.com/kp-wordpress-media/2021/04/8c4daf37-drakes.jpg?w=2400"
            alt="News"
          />
        }
        <div className={classes.overlay} />
        <Grid container>
          <Grid item md={11}>
            <div className={classes.mainFeaturedPostContent}>
              <div className={classes.top}>
                <Typography
                  component="h1"
                  variant="h3"
                  color="inherit"
                  gutterBottom
                >
                  News
                </Typography>
                date
              </div>

              <Typography variant="h5" color="inherit" align="center" paragraph>
                Description
              </Typography>
              <Link variant="subtitle1" href="#">
                Link
              </Link>
            </div>
          </Grid>
        </Grid>
      </Paper>
      <div className="main_wrapper">
        <div className={classes.details}>
          <Grid container direction="row" justify="center">
            <Grid item md={6}>
              <h1>Short Description</h1>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

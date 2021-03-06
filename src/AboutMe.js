import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GetAppIcon from "@material-ui/icons/GetApp";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    fontFamily: '"Manrope", sans-serif',
    fontSize: "38px",
    lineHeight: "35px",
    display: "flex",
    color: "#260859",
    justifyContent: "center",
    margin: "0px 50px",
  },

  aboutme: {
    fontWeight: 100,
    fontFamily: '"Manrope", sans-serif',
    color: "#260859",
    fontSize: "20px",
    lineHeight: "32px",
    justifyContent: "center",
    width: "80%",
    textAlign: "center",
    margin: "30px auto",
    [theme.breakpoints.up("md")]: {
      width: "60%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "70%",
    },
  },

  content: {
    backgroundColor: "#f2f2f2",
    textAlign: "center",
    justifyContent: "center",
  },
  button: {
    borderRadius: "25%",
    padding: "0px",
    margin: "10px",
    backgroundColor: "#8c8c8c",
  },
  cardButton: {
    fontFamily: "sans-serif",
    margin: theme.spacing(1),
    padding: "2px 27px",
    textTransform: "none",
    fontSize: "19px",
    borderRadius: "25px",
    color: "#260859",
    "&:hover": {
      color: "#ffffff",
      backgroundColor: "#260859",
    },
  },
  aboutMeBody: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "50px auto",
    [theme.breakpoints.up("lg")]: {
      margin: "150px auto",
    },
  },
}));

const AboutMe = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Grid container>
        <Grid item xs={12} className={classes.content}>
          <div className={classes.aboutMeBody}>
            <Typography className={classes.title}>Hello! I'm Aruni</Typography>
            <Typography className={classes.aboutme}>
              Front-end web development calls to all my passions; it
              incorporates creativity and problem solving and I'm allowed to
              break it to improve the code (in a seperate git branch, of
              course). I love applying responsive design principles and watching
              my web pages shrink into mobile screens and still look amazing.{" "}
              <br />
              <br /> My specialties includes quickly learning new skills and
              languages, problem solving, responsive design and website
              optimization. So far, I have Java, JavaScript, React, NoSQL,
              MongoDB, HTML, CSS, Node.JS, GraphQL, Apollo Server, Apollo
              Client, ExpressJS. I'm still enthusiastically grabbing into the
              learning from challenges, frameworks or principles I can integrate
              into the coding web in my head. <br /> Also, checkout my side
              projects down below that I have worked on.
            </Typography>

            {/* <div>
              <Button
                variant="outlined"
                startIcon={<GetAppIcon />}
                className={classes.cardButton}
                size="large"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1n5neVFgg016oyIq2N6BTKgd5HoMCKz-U/view?usp=sharing"
                  )
                }
              >
                Resume
              </Button>
            </div> */}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutMe;

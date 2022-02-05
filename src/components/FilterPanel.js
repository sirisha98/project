import { Checkbox, Container, makeStyles, Typography } from "@material-ui/core";
import {
  Bookmark,
  List,
  ExitToApp,
  Home,
  Storefront,
  TabletMac
} from "@material-ui/icons";
import React from 'react';

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    color: "white",
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
    position: "sticky",
    top: 0,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "#555",
      border: "1px solid #ece7e7",
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: "pointer",
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },
  text: {
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const FilterPanel = () => {
  const classes = useStyles();
  const [checked, setChecked]= React.useState();
  const toggleCheck =(e)=>{
    setChecked(e.target.checked)
  }
  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>Homepage</Typography>
      </div>
      
      <div className={classes.item}>
        <List className={classes.icon} />
        <Typography className={classes.text}>Categories</Typography>
        <div>
          <Checkbox checked={checked} onChange={toggleCheck}/>
        </div>
      </div>
      
      
      <div className={classes.item}>
        <TabletMac className={classes.icon} />
        <Typography className={classes.text}>Apps</Typography>
      </div>
      
      <div className={classes.item}>
        <Storefront className={classes.icon} />
        <Typography className={classes.text}>Market Place</Typography>
      </div>
      
      
    </Container>
  );
};

export default FilterPanel;
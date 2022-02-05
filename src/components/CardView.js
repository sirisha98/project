import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    makeStyles,
    Typography,
  } from "@material-ui/core";
  
  const useStyles = makeStyles((theme) => ({
    media:{
        height: "250px",
    }
    ,
    card:{
        marginBottom: theme.spacing(4),
        align
    }
  }));
  
  const CardView = (props) => {
    const classes = useStyles();
    return (
        <Card elevation={4} id={props.row['id']} className={classes.card}>
      
      <CardActionArea >
      <CardMedia
      className={classes.media}
        component="img"
        alt="product"
        height="140"
        src={props.row['image']}
      />
      <Typography gutterBottom variant="h5" component="div">
      {props.row['title']}
          </Typography>
       
        <CardContent>
            <Typography variant="body2" color="textSecondary">
            {props.row['price']}
            </Typography>
        </CardContent>
        </CardActionArea>
        <CardActions>
        <Button size="small" onClick={()=>{console.log('hello there')}}>Add</Button>
        <Button size="small">Learn More</Button>
        </CardActions>
        
      </Card>
    );
  };
  
  export default CardView;
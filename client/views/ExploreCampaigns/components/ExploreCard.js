import React from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Button, TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {
  // Card,
  // CardContent,
  // // Grid,
  // Typography,
  // Avatar,
  LinearProgress
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
            width:"500px"
    },
    list :{
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
    },
    expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest
        })
    },
    payText: {
        paddingTop: "10px",
        paddingLeft: "55px",
        maxWidth: "200px",
        justifyContent: "center",
        alignItems: "center"
    },
    expandOpen: {
        transform: "rotate(180deg)"
    },
    avatar: {
        backgroundColor: red[500]
    },
    horiz : {
        display: 'flex',
        flexDirection: 'row',
        padding: 0, 
    },
    card : {
        padding:"10px"
    }
}));



const ExploreCard = (props) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
      };
    const borrowerName = props.borrowerName;
    const amountInital= props.amountInital
    const amountReq= props.amountReq
    // const borrowerName= props.borrowerName;
    const campaignId= props.campaignId
    const campaignProgress= props.campaignProgress
    const campaignType= props.campaignType
    const creditScore= props.creditScore; 
    const date= props.date;
    const title = props.title;
    const desc = props.desc;
    return (
      <div className={classes.card}>
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                {borrowerName[0]}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={title}
            subheader={date} //"June 14, 2020"
          />
          <CardMedia
            className={classes.media}
            image="../../assets/images/farmer.jpg"
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="h6" component="p">
              {desc}
              {/* Bhola is a cotton farmer based in Gondia, Madhya Pradesh */}
            </Typography>
            <div style={{ paddingTop: '10px' }}>
              <Typography>
                Amount required: {amountReq} of {amountInital}
              </Typography>
            </div>
            <div style={{ paddingTop: '10px' }}>
              <Typography>Campaign Progress: {campaignProgress}%</Typography>

              <LinearProgress
                className={classes.progress}
                value={campaignProgress}
                variant="determinate"
              />
            </div>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more">
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent className={classes.form}>
              {/* <div style={{ flexDirection: "row" }}> */}
              <Grid>
                <div className={classes.payText}>
                  <TextField />
                </div>
                <div className={classes.payText}>
                  <Button width="30px" variant="outlined">
                    Lend to {borrowerName}
                  </Button>
                </div>
              </Grid>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
}
 
export default ExploreCard;
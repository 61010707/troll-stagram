import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Axios from "axios";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: "lightgray"
  },
  gridList: {
    width: 500,
    height: 400
  },
  "@global": {
    "*::-webkit-scrollbar": {
      width: "16px",
      height: " 16px"
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
      imageRendering: "pixelated"
    },
    "*::-webkit-scrollbar-thumb": {
      borderColor: "#FFFFFF #808080 #808080 #FFFFFF",
      outline: "1px solid #000000",
      background: "#C0C0C0",
      borderWidth: "1px",
      borderStyle: "solid"
    }
  }
}));

export default function TrollGrid() {
  const classes = useStyles();
  let array = [];
  const fetch = () => {
    for (let i = count; i > 0; i--) {
      array.push(i);
    }
    console.log(array);
    console.log(count);
  };
  const [count, setCount] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    Axios.get("http://b4891365.ngrok.io/user/posts").then(res => {
      console.log(res.data);
      setCount(res.data);
    });
  }, []);
  fetch();
  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {array.map(imgC => {
          return (
            <GridListTile key={imgC}>
              <img src={`http://b4891365.ngrok.io/user/image/${imgC}`} alt="" />
            </GridListTile>
          );
        })}
      </GridList>
    </div>
  );
}

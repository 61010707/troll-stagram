import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

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

export default class TrollGrid extends React.Component {
  // const classes = useStyles();

  // return (
  //   <div className={classes.root}>
  //     <GridList cellHeight={160} className={classes.gridList} cols={3}>
  //       {tileData.map(tile => (
  //         <GridListTile key={tile.img}>
  //           <img src={tile.img} alt={"img"} />
  //         </GridListTile>
  //       ))}
  //     </GridList>
  //   </div>
  // );

  render() {
    let array = [];
    const fetch = () => {
      for (let i = 1; i < 10; i++) {
        array.push(i);
      }
      console.log(array);
    };

    fetch();
    return (
      <div
        className={useStyles.root}
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          overflow: "hidden",
          backgroundColor: "lightgray"
        }}
      >
        <GridList
          cellHeight={160}
          className={useStyles.gridList}
          style={{
            width: " 500",
            height: "400"
          }}
          cols={3}
        >
          {array.map(imgC => {
            return (
              <GridListTile key={imgC}>
                <img
                  src={`http://02a7dd8e.ngrok.io/user/image/${imgC}`}
                  alt=""
                />
              </GridListTile>
            );
          })}
        </GridList>
      </div>
    );
  }
}

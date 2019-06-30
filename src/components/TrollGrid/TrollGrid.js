import React from "react";
import Axios from "axios";
import {
  makeStyles,
  GridList,
  GridListTile,
  Card,
  CardActionArea,
  Dialog,
  DialogContent
} from "@material-ui/core";
import { Window, WindowHeader, Button } from "react95";
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
    height: 340
  },
  card: {
    display: "flex",
    maxWidth: 345,
    justifyContent: "center",
    justifyItems: "center",
    backgroundColor: "lightgray"
  },
  media: {
    height: 220,
    justifyContent: "space-around"
    // 16:9
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
  const [open, setOpen] = React.useState(false);
  const [count, setCount] = React.useState(0);
  const [order, setOrder] = React.useState();
  let array = [];

  const fetch = () => {
    for (let i = count; i > 0; i--) {
      array.push(i);
    }
    console.log(array);
  };

  function handleClickOpen(event) {
    setOpen(true);
    setOrder(event.target.src);
    console.log("frame", open);
    console.log("ImgC", order);
  }

  function handleClose() {
    setOpen(false);
  }

  React.useEffect(() => {
    setInterval(() => {
      Axios.get("http://218c4cfb.ngrok.io/user/posts").then(res => {
        setCount(res.data);
      });
    }, 1000);
  });

  fetch();
  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {array.map(imgC => {
          return (
            <GridListTile key={imgC}>
              <Card className={classes.card} key={imgC}>
                <CardActionArea key={imgC} onClick={handleClickOpen}>
                  <img
                    className={classes.media}
                    src={`http://218c4cfb.ngrok.io/user/image/${imgC}?key=${Date.now()}`}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </CardActionArea>
              </Card>
            </GridListTile>
          );
        })}
      </GridList>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Window>
          <WindowHeader
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            Image View
            <Button
              style={{ marginRight: "-6px", marginTop: "1px" }}
              size={"sm"}
              onClick={() => {
                setOpen(false);
              }}
              square
            >
              <span
                style={{ fontWeight: "bold", transform: "translateY(-1px)" }}
              >
                x
              </span>
            </Button>
          </WindowHeader>
          <DialogContent>
            <img src={order} alt="" />
          </DialogContent>
        </Window>
      </Dialog>
    </div>
  );
}

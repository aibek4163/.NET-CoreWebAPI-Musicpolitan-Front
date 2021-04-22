import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import Title from "./Title";

import TextField from "@material-ui/core/TextField";

import {
  FormControl,
  InputLabel,
  Select as MuiSelect,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";

import { useCookies } from "react-cookie";

import { Link, useHistory } from "react-router-dom";
import { useStyles } from "./Styles";

function preventDefault(event) {
  event.preventDefault();
}

export function Releases() {
  const classes = useStyles();

  const [list, setList] = useState([]);

  return (
    <React.Fragment>
      <Button>
        <Link variant="contained" color="primary" to="/admin/addreleases">
          ADD NEW RELEASES
        </Link>
      </Button>
      <Title>RELEASES</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Short Description</TableCell>
            <TableCell>Date</TableCell>
            <TableCell align="right">Image</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}

export function AddRelease() {
  const [cookieJWT, setCookieJWT, removeCookieJWT] = useCookies(["jwt"]);

  const classes = useStyles();

  const [title, setTitle] = useState("");
  const [shortDes, setShort] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [banner, setBaner] = useState("");
  const [usersList, setUsers] = useState([]);
  const [userID, setUserID] = useState({});

  const history = useHistory();

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleShort = (event) => {
    setShort(event.target.value);
  };

  const handleDescription = (event) => {
    setText(event.target.value);
  };

  const handleImage = (event) => {
    setImage(event.target.value);
  };

  const handleBanner = (event) => {
    setBaner(event.target.value);
  };

  const handleChange = (event) => {
    setUserID(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let date = new Date().toLocaleString().replace(/(.*)\D\d+/, "$1");
    const data = {
      title: title,
      shortDescription: shortDes,
      text: text,
      image: image,
      banner_image: banner,
      date: date,
      artist: userID,
    };
    console.log(data);
    addRelease(data);
    history.push("/admin/managereleases");
  };

  useEffect(() => {
    GetUsers();
  }, []);

  async function GetUsers() {
    const bearer = "Bearer " + cookieJWT["jwt"].jwtToken;
    let response = await fetch("http://localhost:8000/api/artist", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: bearer,
      },
    });
    if (response.status === 200) {
      let users = await response.json();
      let list = users.map((item) => ({
        id: item.id,
        username: item.username,
        photo: item.photo,
      }));
      list = [{ id: 0, username: "Select" }].concat(list);
      setUsers(list);
    }
  }

  async function addRelease(artiles) {
    const bearer = "Bearer " + cookieJWT["jwt"].jwtToken;
    const response = await fetch("http://localhost:8000/api/release", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Authorization: bearer,
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(artiles),
    });

    let messData = await response.json();
    console.log(messData);
    //setNewsID(messData.id);
  }

  return (
    <div className={classes.root}>
      <div className="row">
        <div className="col s6 offset-s3">
          <form onSubmit={handleSubmit}>
            <TextField
              label="Title"
              style={{ margin: 8 }}
              fullWidth
              margin="normal"
              multiline
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              onChange={handleTitle}
            />
            <TextField
              label="Short Description"
              style={{ margin: 8 }}
              multiline
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              onChange={handleShort}
            />
            <TextField
              label="Text"
              style={{ margin: 8 }}
              fullWidth
              multiline
              rows={10}
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              onChange={handleDescription}
            />
            <TextField
              label="Image"
              style={{ margin: 8 }}
              fullWidth
              margin="normal"
              multiline
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleImage}
              variant="outlined"
            />
            <TextField
              label="Banner Image"
              style={{ margin: 8 }}
              fullWidth
              margin="normal"
              multiline
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              onChange={handleBanner}
            />
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Artist
              </InputLabel>
              <MuiSelect
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={userID}
                onChange={handleChange}
                label="Age"
              >
                {usersList.map((item) => (
                  <MenuItem key={item.id} value={item}>
                    {item.username}
                  </MenuItem>
                ))}
              </MuiSelect>
            </FormControl>

            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={classes.button}
            >
              + ADD
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

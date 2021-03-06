import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "../login/Login";
import { getTokenFromUrl } from "../utils/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "../player/Player";
import { useDataLayerValue } from "../dataLayer/DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
    }
  }, []);

  return (
    <div className="app">
      {token ? <Player spotfiy={spotify} /> : <Login />}
    </div>
  );
}

export default App;

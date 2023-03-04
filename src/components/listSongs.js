import React, { useEffect, useState } from "react";
import '../App.css'
import { useDispatch, useSelector } from "react-redux";
import { getSongs } from "../redux/songs";
import styled from "@emotion/styled";
import Axios from "axios";

const ListContainer = styled.div`
  background-color: red;
  color: white;
  width: 520px;
  height: 500px;
  overflow-y: scroll;
`;
const ListCard = styled.div`
  background-color: grey;
  color: white;
  width: 440px;
  margin-top: 5px;
  margin-bottom: 20px;
  margin-left: 20px;
  padding: 10px;
`;
const ListItem = styled.div`
  color: white;
  display: flex;
  width: auto;
  justify-content: space-between;
`;

const Container = styled.div`
    background-color: red;
    color: white;
    width: 500px;
    height: auto;
    display: block;
`;

const Card = styled.input`
    margin-top: 5px;
    width: 400px;
    padding: 10px;
`;

const Save = styled.button`
    color: #25acd2;
    margin-top: 5px;
    padding: 10px;
    border-radius: 5px;
    width: 200px;
    border: none;
    margin-bottom: 20px;
    &:hover {
        background-color: grey;
        color: #fff;
        cursor: pointer;
        border-radius: 10px;
      }
`;

function ListSongs() {
  const songs = useSelector((state) => state.songs.songs);
  const dispatch = useDispatch();

  const [editedId, setEditedId] = useState("");
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [gener, setGener] = useState("");
  const [isNew, setIsNew] = useState(false);

  const saveSong = () => {
    Axios.post("https://song-app-backend-api-production.up.railway.app/add-song", {
      title,
      artist,
      album,
      gener,
    }).then(() => {}).catch(function (error) {
        console.log(error);
      });
    window.location.reload(false);
    setTitle('');
    setArtist('');
    setAlbum('');
    setGener('');
};

  const edit = (editedId) => {
    Axios.get('https://song-app-backend-api-production.up.railway.app/get-song/'+editedId)
    .then((response)=>{
      setTitle(response.data['title']);
      setArtist(response.data['artist']);
      setAlbum(response.data['album']);
      setGener(response.data['gener']);
      setIsNew(true);
    }).catch(()=>{
      console.log("Err")
    });
  };

  const updateSong = () =>{
    Axios.put('https://song-app-backend-api-production.up.railway.app/update-song/'+editedId, {
        title,
        artist,
        album,
        gener,
    }).then(() => {dispatch(getSongs())});
  }

  const deleteSong = (editedId) => {
    Axios.delete(`https://song-app-backend-api-production.up.railway.app/delete-song/${editedId}`).then(() => {
      dispatch(getSongs());
    });
  };

  useEffect(() => {
    dispatch(getSongs());
  }, [dispatch]);

  return (
    <div className="sidemenu">
      <div>
        <ListContainer>
          <h3>Songs List</h3>
          <h4>Total Songs - {songs.length}</h4>
          {songs.map((song) => (
            <div key={song._id}>
              <ListCard>
                <ListItem>
                  <div style={{ width: "25%", marginTop: "40px" }}>
                    <h4>Title - {song.title}</h4>
                  </div>
                  <div style={{ width: "70%" }}>
                    <h4>Artist - {song.artist}</h4>
                    <h4>Album - {song.album}</h4>
                    <h4>Gener - {song.gener}</h4>
                  </div>
                </ListItem>
                <button
                  onClick={() => {
                    edit(song._id);
                    setEditedId(song._id);
                  }}
                >
                  Update
                </button>
                <button
                  onClick={() => {
                    deleteSong(song._id);
                    setEditedId(song._id);
                  }}
                >
                  Delete
                </button>
              </ListCard>
            </div>
          ))}
        </ListContainer>
      </div>
      <div>
          <Container>
            { !isNew ? <h3>Add New Song</h3> : <h3>Edit Song</h3>}
            <label htmlFor="">Title  </label><Card
              placeholder="Title"
              onChange={(event) => {
                setTitle(event.target.value);
              }}
              value={title}
            ></Card>
            <br />
            <label htmlFor="">Artist </label><Card
              placeholder="Artist"
              onChange={(event) => {
                setArtist(event.target.value);
              }}
              value={artist}
            ></Card>
            <br />
            <label htmlFor="">Album  </label><Card
              placeholder="Album"
              onChange={(event) => {
                setAlbum(event.target.value);
              }}
              value={album}
            ></Card>
            <br />
            <label htmlFor="">Gener  </label><Card
              placeholder="Gener"
              onChange={(event) => {
                setGener(event.target.value);
              }}
              value={gener}
            ></Card>
            <br />
            {
                !isNew ? <Save onClick={saveSong}>Save</Save> 
                : <Save onClick={updateSong}>Update</Save>
            }
          </Container>
      </div>
    </div>
  );
}

export default ListSongs;

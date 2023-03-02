// import React, { useState, useEffect } from 'react';
// import styled from "@emotion/styled";
// import Axios from 'axios';
// import { useDispatch, useSelector } from "react-redux";
// import { getSongs } from '../redux/songs';

// const Container = styled.div`
//     background-color: red;
//     color: white;
//     width: 500px;
//     height: auto;
//     display: block;
// `;

// const Card = styled.input`
//     margin-top: 5px;
//     width: 400px;
//     padding: 10px;
// `;

// const Save = styled.button`
//     color: #25acd2;
//     margin-top: 5px;
//     padding: 10px;
//     border-radius: 5px;
//     width: 250px;
//     border: none;
//     margin-bottom: 20px;
// `;

// function AddSong() {

//   const [title, setTitle] = useState("");
//   const [artist, setArtist] = useState('');  
//   const [album, setAlbum] = useState('');  
//   const [gener, setGener] = useState(''); 

//   const songs = useSelector((state) => state.songs.songs);
//   const songId = useSelector((state) => state.songId.id);

//   const dispatch = useDispatch();


//   const saveSong = () => {
//       Axios.post('http://localhost:5000/add-song', {
//           title,
//           artist,
//           album,
//           gener
//         });
//     }

// //   const updateFriend = (id) =>{
// //     const newAge = prompt('Enter New Age: ');
// //     Axios.put('http://localhost:3001/update', {newAge: newAge, id: id}).then(
// //         ()=>{
// //       setFList(flist.map((val) => {
// //         return val._id == id ? {_id: id, name: val.name, age: newAge } : val;
// //       }));
// //     });
// //   }

  

//   return (
    
//   )
// }

// export default AddSong
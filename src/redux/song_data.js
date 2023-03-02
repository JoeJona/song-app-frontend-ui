import { call, put, takeEvery } from "redux-saga/effects";
import { getSongsSuccess } from "../redux/songs";
import axios from "axios";

function* workGetSongs() {
    const songs = yield call(() => fetch('http://localhost:5000/get-all-songs'));
    const sampleSongs = yield songs.json();
    yield put(getSongsSuccess(sampleSongs));
}

function* songSaga() {
    yield takeEvery('songs/getSongs', workGetSongs)
}

export default songSaga;
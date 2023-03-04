import { call, put, takeEvery } from "redux-saga/effects";
import { getSongsSuccess } from "../redux/songs";

function* workGetSongs() {
    const songs = yield call(() => fetch('https://song-app-backend-api-production.up.railway.app/get-all-songs'));
    const sampleSongs = yield songs.json();
    yield put(getSongsSuccess(sampleSongs));
}

function* songSaga() {
    yield takeEvery('songs/getSongs', workGetSongs)
}

export default songSaga;
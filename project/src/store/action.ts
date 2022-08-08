import {createAction} from '@reduxjs/toolkit';
import {Film} from '../types/film';
import {AuthorizationStatus} from '../const';

export const selectGenre = createAction<{activeGenre: string}>('main/selectGenre');

export const getGenreFilms = createAction<{activeGenre: string, films: Film[]}>('main/getGenreFilms');

export const loadFilms = createAction<Film[]>('data/loadFilms');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('setError');

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');

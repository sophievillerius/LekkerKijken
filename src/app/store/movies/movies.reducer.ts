import { Movie } from '../../models/youtube-movie';
import { MovieActionsUnion, MovieActionTypes } from './movies.actions';
import { IAdd } from '../add/add.interface';

const initialState = <Movie[]>[];

export const moviesReducer = (state = initialState, action: MovieActionsUnion): Movie[] => {
    switch (action.type) {
        case MovieActionTypes.REMOVE: {
            console.log('we went through the reducer');
        return state.filter(movie => movie.id !== action.id);
        }
        case MovieActionTypes.GETALL_SUCCES:
            return action.movies;
        default:
        return state;
    }
};
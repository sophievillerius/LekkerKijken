import { Movie } from '../../models/youtube-movie';
import { MovieActionsUnion, MovieActionTypes } from './movies.actions';

const initialState = <Movie[]>[];

export const moviesReducer = (state = initialState, action: MovieActionsUnion): Movie[] => {
    switch (action.type) {
        case MovieActionTypes.ADD:
        return action.movies;
        case MovieActionTypes.REMOVE: {
            console.log('we went through the reducer')
        return state.filter(movie => movie.id != action.id);
        }

        case MovieActionTypes.GETALL_SUCCESS:
            return action.movies;
        // return state;
        default:
        return state;
    }
}
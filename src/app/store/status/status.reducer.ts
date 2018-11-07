import { Movie } from '../../models/youtube-movie';
import { MovieActionsUnion, MovieActionTypes } from '../movies/movies.actions';
import { Status } from './status.interface';

const initialState = <Status>{};

export const statusReducer = (state = initialState, action: MovieActionsUnion): Status => {
    switch (action.type) {
        case MovieActionTypes.GETALL_ERROR:
            return {
                ...state,
                movieLoadError: true
            };
        case MovieActionTypes.GETALL_SUCCES:
            return {
                ...state,
                movieLoadError: false
            };
        // return state;
        default:
        return state;
    }
};

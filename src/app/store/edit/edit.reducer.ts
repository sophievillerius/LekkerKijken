import { MovieActionsUnion, MovieActionTypes} from '../movies/movies.actions';
import { IEdit } from './edit.interface';

export const EditReducer = (state: IEdit, action: MovieActionsUnion): IEdit => {
    switch (action.type) {
        case MovieActionTypes.EDIT:
            return {
                active: true,
                success: undefined,
                error: undefined
            };
        case MovieActionTypes.EDIT_COMPLETE:
            return {
                active: false,
                success: true,
                error: undefined
            };
        case MovieActionTypes.EDIT_ERROR:
            return {
                active: false,
                success: undefined,
                error: true
            };
        default:
            return state;
    }
}
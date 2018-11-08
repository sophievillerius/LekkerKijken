import { MovieActionsUnion, MovieActionTypes} from '../movies/movies.actions';
import { IAdd } from './add.interface';

export const AddReducer = (state: IAdd, action: MovieActionsUnion): IAdd => {
    switch (action.type) {
        case MovieActionTypes.ADD:
            return {
                active: true,
                success: undefined,
                error: undefined
            };
        case MovieActionTypes.ADD_COMPLETE:
            return {
                active: false,
                success: true,
                //why undefined and not false?
                error: undefined
            };
        case MovieActionTypes.ADD_ERROR:
            return {
                active: false,
                success: undefined,
                error: true
            };
        default:
            return state;
    }
}
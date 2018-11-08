import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from './app-state.interface';

import { moviesReducer} from './movies/movies.reducer';
import { statusReducer } from './status/status.reducer';
import { AddReducer } from './add/add.reducer';

export const rootReducer: ActionReducerMap<IAppState> = {
    movies: moviesReducer,
    status: statusReducer,
    add: AddReducer
};

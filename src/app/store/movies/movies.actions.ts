import { Action } from '@ngrx/store';
import { Movie } from 'src/app/models/youtube-movie';

export enum MovieActionTypes {
    GETALL = '[Movies] Get all',
    GETALL_SUCCES = '[Movies] Get all succes',
    GETALL_ERROR = '[Movies] Get all error',
    ADD = '[Movie] Add',
    ADD_COMPLETE = '[Movie] Add Complete',
    ADD_ERROR = '[Movie] Add Error',
    EDIT = '[Movie] Edit',
    EDIT_COMPLETE = '[Movie] Edit Complete',
    EDIT_ERROR = '[Movie] Edit Error',
    REMOVE = '[Movie] Remove'
}

export class GetAll implements Action {
    public readonly type = MovieActionTypes.GETALL;

    constructor() {}
}

export class GetAllSuccess implements Action {
    public readonly type = MovieActionTypes.GETALL_SUCCES;

    constructor(public readonly movies: Movie[]) {}
}

export class GetAllError implements Action {
    public readonly type = MovieActionTypes.GETALL_ERROR;

    constructor() {}
}

export class Add implements Action {
    public readonly type = MovieActionTypes.ADD;

    constructor(
        public readonly movie: Movie,
    ) {}
}

export class AddComplete implements Action {
    public readonly type = MovieActionTypes.ADD_COMPLETE;

    constructor(public readonly movie: Movie) { }
}

export class AddError implements Action {
    public readonly type = MovieActionTypes.ADD_ERROR;
}

export class Edit implements Action {
    public readonly type = MovieActionTypes.EDIT;

    constructor(
        public readonly movie: Movie,
    ) {}
}

export class EditComplete implements Action {
    public readonly type = MovieActionTypes.EDIT_COMPLETE;

    constructor(public readonly movie: Movie) { }
}

export class EditError implements Action {
    public readonly type = MovieActionTypes.EDIT_ERROR;
}

export class Remove implements Action {
    public readonly type = MovieActionTypes.REMOVE;

    constructor(public readonly id: number) { }
}

export type MovieActionsUnion = GetAll | GetAllSuccess | GetAllError | Add | AddComplete | AddError | Edit | EditComplete | EditError | Remove;

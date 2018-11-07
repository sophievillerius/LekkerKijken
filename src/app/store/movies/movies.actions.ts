import { Action } from '@ngrx/store';
import { Movie } from 'src/app/models/youtube-movie';

export enum MovieActionTypes {
    GETALL = '[Movies]Get all',
    GETALL_SUCCESS = '[Movies] Get all success',
    GETALL_ERROR = '[Movies] Get all error',
    ADD = '[Movie] Add',
    REMOVE = '[Movie] Remove'
}

export class GetAll implements Action {
    public readonly type = MovieActionTypes.GETALL;

    constructor() {}
}

export class GetAllSuccess implements Action {
    public readonly type = MovieActionTypes.GETALL_SUCCESS;

    constructor(public readonly movies: Movie[]) {}
}

export class GetAllError implements Action {
    public readonly type = MovieActionTypes.GETALL_ERROR;

    constructor() {}
}

export class Add implements Action {
    public readonly type = MovieActionTypes.ADD;

    // TODO: make constructor for the movie (with title, id and description?)
    constructor(
        public readonly movies: Movie[],
    ) {}
}

export class Remove implements Action {
    public readonly type = MovieActionTypes.REMOVE;

    constructor(public readonly id: number) { }
}

export type MovieActionsUnion = GetAll | GetAllSuccess | GetAllError | Add | Remove;

import { Action } from '@ngrx/store';
import { Movie } from 'src/app/models/youtube-movie';

export enum MovieActionTypes {
    GETALL = '[Movies] Get all',
    GETALL_SUCCES = '[Movies] Get all succes',
    GETALL_ERROR = '[Movies] Get all error',
    ADD = '[Movie] Add',
    REMOVE = '[Movie] Remove'
}

export class GetAll implements Action {
    public readonly type = MovieActionTypes.GETALL;

    constructor() {}
}

export class GetAllSucces implements Action {
    public readonly type = MovieActionTypes.GETALL_SUCCES;

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

export type MovieActionsUnion = GetAll | GetAllSucces | GetAllError | Add | Remove;

import { Action } from '@ngrx/store';
import { Movie } from 'src/app/models/youtube-movie';

export enum MovieActionTypes {
    GETALL = 'Get all [Movies]',
    ADD = '[Movie] Add',
    REMOVE = '[Movie] Remove'
}

export class GetAll implements Action {
    public readonly type = MovieActionTypes.GETALL;

    constructor() {}
}

export class Add implements Action {
    public readonly type = MovieActionTypes.ADD;

    //TODO: make constructor for the movie (with title, id and description?)
    constructor(
        public readonly movies: Movie[],
    ) {}
}

export class Remove implements Action {
    public readonly type = MovieActionTypes.REMOVE;

    constructor(public readonly id: number) { }
}

export type MovieActionsUnion = GetAll | Add | Remove;
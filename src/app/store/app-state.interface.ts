import { Movie } from '../models/youtube-movie';
import { Status } from './status/status.interface';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IAdd } from './add/add.interface';

export interface IAppState {
    movies: Movie[];
    status: Status;
    add: IAdd;
}

export const statusSelector = createFeatureSelector<Status>('status');

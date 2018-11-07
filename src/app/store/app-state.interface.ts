import { Movie } from '../models/youtube-movie';
import { Status } from './status/status.interface';
import { createFeatureSelector } from '@ngrx/store';

export interface IAppState {
    movies: Movie[];
    status: Status;
}

export const statusSelector = createFeatureSelector<Status>('status');
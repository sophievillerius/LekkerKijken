import { createSelector } from '@ngrx/store';
import { statusSelector } from '../app-state.interface';

export interface Status {
    movieLoadError: boolean;
    // alle andere status booleans op een lijstje
}

export const movieloadSelector = createSelector(statusSelector, s => s.movieLoadError);

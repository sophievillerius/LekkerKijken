import { createSelector } from "@ngrx/store";
import { statusSelector } from "../app-state.interface";

export interface Status {
    movieLoadError: boolean;
    // al je andere status booleans op een lijstje zetten.
}

export const movieloadSelector = createSelector(statusSelector, s => s.movieLoadError);

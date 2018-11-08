import { moviesReducer } from "./movies.reducer";
import { Action } from '@ngrx/store';
import { Movie } from "src/app/models/youtube-movie";
import * as movieActions from '../../store/movies/movies.actions';

describe('Movie reducer', () => {
    describe('Undefined Action', () => {
        it('should have an initial state of []', () => {
            // Arrange
            var expected = [];
            var undefinedAction = {} as any;
    
            // Act
            var newState = moviesReducer(undefined, undefinedAction);
    
            // Assert
            expect(newState).toEqual(expected);
        });
    });

    describe('Add Video Action', () => {
        it('should add a movie', () => {
        // Arrange
        var startState: Movie[] = [
            <Movie> {
                description: 'Test film'
            }
        ];
        var addMovie: Movie = 
            <Movie> {
            description: 'New movie'
        };

        var expectedState: Movie[] = [
            <Movie> {
                description: 'Test film'
            },
            <Movie> {
                description: 'New movie'
            }
        ];

        // Act
        var newState = moviesReducer(startState, new movieActions.Add(addMovie));

        // Assert
        expect(newState).toEqual(expectedState);

    });
    });
});
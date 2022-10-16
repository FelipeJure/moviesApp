import { ADD_FAVORITE_MOVIE, REMOVE_FAVORITE_MOVIE, GET_MOVIES, ADD_SAW_MOVIE, REMOVE_SAW_MOVIE } from "./actions";

const initialState = {
    favoritesMovies: [],
    loadedMovies: [],
    sawMovies: [],
};

export default function rootReducer (state = initialState, action){
    switch (action.type) {
        case ADD_FAVORITE_MOVIE:
            if (state.favoritesMovies[0]) {
            const other = state.favoritesMovies.filter ( movie => action.payload.id !== movie.id)
            return {
                    ...state,
                    favoritesMovies: [...other, action.payload]
            }} else{
                return {
                    ...state,
                    favoritesMovies: [...state.favoritesMovies, action.payload]
            }}
        case REMOVE_FAVORITE_MOVIE:
            return {
                ...state,
                favoritesMovies: state.favoritesMovies.filter ( m => m.id !==action.payload.id)
            }
        case ADD_SAW_MOVIE:
            if (state.sawMovies[0]) {
                const other = state.sawMovies.filter ( movie => action.payload.id !== movie.id)
                return {
                        ...state,
                        sawMovies: [...other, action.payload]
                }} else{
                    return {
                        ...state,
                        sawMovies: [...state.sawMovies, action.payload]
                }}
        case REMOVE_SAW_MOVIE:
            return {
                ...state,
                sawMovies: state.sawMovies.filter ( m => m.id !==action.payload.id)
            }
        case GET_MOVIES:
            return {
                ...state,
                loadedMovies: action.payload,
            }
        default:
            return state;
    }
}
const apikey = process.env.REACT_APP_apikey

export const ADD_FAVORITE_MOVIE = 'ADD_FAVORITE_MOVIE'
export const GET_MOVIES = 'GET_MOVIES'
export const REMOVE_FAVORITE_MOVIE = 'REMOVE_FAVORITE_MOVIE'
export const ADD_SAW_MOVIE = 'ADD_SAW_MOVIE'
export const REMOVE_SAW_MOVIE = 'REMOVE_SAW_MOVIE'

export function addFavoriteMovie(movie) {
    return { type: ADD_FAVORITE_MOVIE, payload: movie };
}

export function removeFavoriteMovie(movie) {
    return { type: REMOVE_FAVORITE_MOVIE, payload: movie };
}

export function addSawMovie(movie) {
  return { type: ADD_SAW_MOVIE, payload:movie};
}
export function removeSawMovie(movie) {
  return { type: REMOVE_SAW_MOVIE, payload:movie};
}

export function getMovies(titulo) {
    return function(dispatch) {
      return (
      fetch(`https://www.omdbapi.com/?apikey=${apikey}&s=${titulo}`)
        .then(response => response.json())
        .then(json => {
          if (json.Response === 'True'){
            const firstCall = json.Search
            const arrayPromises = []
            let results = 10
            let n = 2
            while (json.totalResults > results && results < 40){
              arrayPromises.push(fetch(`https://www.omdbapi.com/?apikey=${apikey}&s=${titulo}&page=${n}`)
              .then(response => response.json()).then(json => json.Search))
              results += 10;
              n ++
            }
            Promise.all(arrayPromises)
              .then(arr => {
                arr.unshift(firstCall);
                const newArr = arr.reduce((acc, current) => {
                  return acc.concat(current)
                },[])
                dispatch({ type: GET_MOVIES, payload: newArr })
              });
          } else {
            dispatch({type:GET_MOVIES,payload:[{
              Title:'Movie not found',
              imdbID: '12345',
              Poster:'https://media.istockphoto.com/vectors/page-not-found-error-with-film-flap-design-vector-id1265221960?k=20&m=1265221960&s=170667a&w=0&h=jCITUlo5a7s5fue3XrX2WB8FOK9VnbaWeLCHB8Ovj-c='
            }]})
          }
        })
        .catch (error => console.log(error))
      )
    }
}

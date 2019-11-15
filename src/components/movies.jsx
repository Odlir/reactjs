import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import { getGenres } from "../services/fakeGenreService";
import ListGroup from "./listGroup";
import MoviesTable from "./moviesTable";
import _ from 'lodash';

class Movies extends Component{
    state = {
        movies: [],
        genres: [],
        currentPage: 1,
        pageSize: 4,
        sortColumn: { path: 'title', order: 'asc'}
    };

    componentDidMount() {
        const genres = [{ _id : '', name : 'All Genres' }, ...getGenres()];
        this.setState({ movies: getMovies(), genres: genres});
    }

    handleDelete = movie => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies: movies});
    };

    handleLike = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({ movies })
    };

    handlePageChange = page => {
        this.setState({ currentPage : page});
    };

    handleGenreSelect = genre => {
        this.setState({selectedGenre: genre, currentPage : 1})
    };

    handleSort = sortColumn => {
        this.setState({ sortColumn })
    };

    getPageData = () => {
        const { pageSize, currentPage, sortColumn, selectedGenre, movies: allMovies } = this.state;

        const filtered = selectedGenre && selectedGenre._id ? allMovies.filter( m => m.genre._id === selectedGenre._id) : allMovies;

        const sorted =  _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

        const movies = paginate(sorted, currentPage, pageSize);

        return { totalCount: filtered.length, data: movies };
    };

    render() {
        const { length: count } = this.state.movies;
        const { pageSize, currentPage, sortColumn } = this.state;
        if (count === 0) return <p>there are no movies in the data</p>
        const { totalCount, data: movies} = this.getPageData();

        return (
            <div className="row">
                <div className="col-3">
                    <ListGroup textProperty="name"
                               valueProperty="_id"
                               selectedItem={this.state.selectedGenre}
                               onItemSelect={this.handleGenreSelect}
                               items={this.state.genres} />
                </div>
                <div className="col">
                    <p>Showing { totalCount } movies in the database.</p>
                    <MoviesTable
                        movies={movies}
                        sortColumn={sortColumn}
                        onDelete={this.handleDelete}
                        onLike={this.handleLike}
                        onSort={this.handleSort}
                    />
                    <Pagination
                        itemsCount={count}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange}/>
                </div>
            </div>);
    }

}

export default Movies;


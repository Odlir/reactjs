import React from "react";
import Joi from 'joi-browser';
import Form from "./common/form";
import { getMovie, saveMovie } from "../services/moviesService";
import { getGenres } from "../services/genreService";

export default class MovieForm extends Form {
    state = {
        data: {
            title: '',
            genreId: '',
            numberInStock: '',
            dailyRentalRate: ''
        },
        genres: [],
        errors: {}
    };

    schema = {
        _id: Joi.string(),
        title: Joi.string().required().label('Title'),
        genreId: Joi.string().required().label('Genre'),
        numberInStock: Joi.number().required().min(0).max(100).label('Number in Stock'),
        dailyRentalRate: Joi.number().required().min(0).max(100).label('Daily Rental Rate'),
    };

    async populateGenres(){
        const { data: genres } = await getGenres();
        this.setState({ genres });
    }

    async populateMovie(){
        try {
            const movieId = this.props.match.params.id;
            if (movieId === 'new') return;
            const { data: movie } = await getMovie(movieId);
            this.setState( { data: this.mapToViewModel(movie) });
        }catch (e) {
            if (e.response && e.response.status === 404){
                this.props.history.replace('/not-found');
            }
        }
    }

    async componentDidMount() {
        await this.populateGenres();
        await this.populateMovie();
    }

    mapToViewModel(movie){
        return {
            _id: movie._id,
            title: movie.title,
            genreId: movie.genre._id,
            numberInStock: movie.numberInStock,
            dailyRentalRate: movie.dailyRentalRate
        }
    }

    doSubmit = async () => {
        await saveMovie(this.state.data);
        this.props.history.push('/movies');
    };

    render() {
        return (
            <div>
                <h1>Movie Form</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('title', 'Title')}
                    {this.renderSelect('genreId', 'Genre', this.state.genres)}
                    {this.renderInput('numberInStock', 'Number In Stock', 'number')}
                    {this.renderInput('dailyRentalRate', 'Rate')}
                    {this.renderButton('Save')}
                </form>
            </div>
        );
    }
};

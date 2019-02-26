import React from 'react';
import { connect } from 'react-redux';
import * as action from 'actions/index';

import { Container, Grid, GridItem } from 'styles/global/Layout';

import CategoriesTiles from 'components/Categories/CategoriesTiles';
import GenresList from 'components/Categories/GenresList';

class categories extends React.Component {

    static async getInitialProps(props) {
        // Get the reduxStore from the context
        const store = props.reduxStore;

        // AWAIT is important to get the data immediately. Call the action creator function directly here and store the data in the reducer
        await store.dispatch(action.fetchGenresMovLabel());
        await store.dispatch(action.fetchGenresTvLabel());

        const fetchMovPopular = store.dispatch(action.fetchMovPopular());
        const fetchTvPopular = store.dispatch(action.fetchTvPopular());
        await Promise.all([fetchMovPopular, fetchTvPopular]);

        const movPopular = store.getState().catalogue.movPopular.results;
        const tvPopular = store.getState().catalogue.tvPopular.results;

        // fetch a random image   
        let movPopularRandom = [], tvPopularRandom = [];
        const randomNum = Math.floor(Math.random() * 20);
        if (movPopular !== undefined) {
            movPopularRandom = movPopular[randomNum];
        }
        if (tvPopular !== undefined) {
            tvPopularRandom = tvPopular[randomNum];
        }

        const page = props.query.page || 1;

        return { page, movPopularRandom, tvPopularRandom }
    }

    state = {
        categorySelected: "movie"
    }

    handleClickCategories = (e) => {
        const getValue = e.currentTarget.dataset.category;
        const categoryUpdate = getValue !== this.state.categorySelected ? getValue : "";
        this.setState({ categorySelected: categoryUpdate })
    }

    render() {
        const { genresMovLabel, genresTvLabel, movPopularRandom, tvPopularRandom, page } = this.props;
        const genresSelected = this.state.categorySelected === "movie" ? genresMovLabel : genresTvLabel;

        return (
            <Container pdd mrg="86px 0">
                <Grid
                    cols="5% 1fr 5%"
                    autoRows="auto"
                    gap="100px 0"
                    pdd="20px 0 "
                    areas={`
                        " . BigTiles ."
                        ". smallTiles ."
                    `}
                >
                    <GridItem gridArea="BigTiles">
                        <CategoriesTiles
                            handleClickCategories={this.handleClickCategories}
                            bgMov={movPopularRandom.backdrop_path}
                            bgTv={tvPopularRandom.backdrop_path}
                            selectedTile={this.state.categorySelected}
                        />

                    </GridItem>

                    {this.state.categorySelected !== "" && this.state.categorySelected !== undefined &&
                        <GridItem gridArea="smallTiles">
                            <GenresList genres={genresSelected} category={this.state.categorySelected} page={page} />
                        </GridItem>
                    }
                </Grid>
            </Container>
        );
    }
};

const mapStateToProps = (state) => {

    return {
        genresMovLabel: state.genre.genresMovLabel,
        genresTvLabel: state.genre.genresTvLabel
    }
}

export default connect(mapStateToProps)(categories)

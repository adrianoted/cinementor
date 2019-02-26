import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from 'actions/index';

import { IMAGE_URL } from 'constants';
import { Container } from 'styles/global/Layout';

import List from 'components/shared/List/List';

class discover extends Component {
    static async getInitialProps(props) {
        // Get the props from the context
        const store = props.reduxStore;
        const { query, pathname, query: { cat, genre, page, label } } = props;

        switch (label) {
            case "Upcoming Movies":
                await store.dispatch(action.fetchMovUpcoming(page));
                break;
            case "TV Trending this week":
                await store.dispatch(action.fetchTrending("week", "tv", page));
            case "Popular TV Shows":
                await store.dispatch(action.fetchTvPopular(page));
                break;
            case "Top Rated Movies":
                await store.dispatch(action.fetchMovTopRated(page));
            default:
                break;
        }

        return {
            query,
            pathname,
            label,
            genre,
            cat
        }
    }

    render() {
        // get the name of the genre selected
        const { query, pathname, cat, label, data: { results, total_pages }} = this.props;

        return (
            <Container pdd mrg="86px 0">
                <List
                    cat={cat}
                    label={label}
                    query={query}
                    pathname={pathname}
                    results={results}
                    total_pages={total_pages}
                    imageURL={IMAGE_URL}
                    goBackBtn="/"
                />
            </Container>
        )
    }

}

const mapStateToProps = (state, ownProps) => {

    const data = ownProps.genre;
    const reducerObject = (data === "trendingWeekTv") ? state.catalogue.trending.week.tv : state.catalogue[ownProps.genre];

    return {
        data: reducerObject
    }
}

export default connect(mapStateToProps)(discover)
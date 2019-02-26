import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from 'actions/index';
import { IMAGE_URL } from 'constants';
import { Container } from 'styles/global/Layout';

import List from 'components/shared/List/List';


class genres extends Component {
    static async getInitialProps(props) {
        // Get the props from the context
        const store = props.reduxStore;
        const { query, pathname, query: { cat, genre, id, label, page } } = props;
        // AWAIT is important to get the data immediately. Call the action creator function directly here and store the data in the reducer
        await store.dispatch(action.fetchSingleGenre(cat, id, page));

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
        const { query, pathname, cat, label, data: { results, total_pages } } = this.props;

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
                    goBackBtn="/categories"
                />
            </Container>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        data: state.genre.data
    }
}

export default connect(mapStateToProps)(genres)
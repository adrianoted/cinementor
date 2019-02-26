import React from 'react'
import { connect } from 'react-redux';
import * as action from 'actions/index';

import { Container } from 'styles/global/Layout';

import Catalogue from 'components/Catalogue';


class home extends React.Component {
  static async getInitialProps(props) {
    // Get the reduxStore from the context
    const store = props.reduxStore;

    // AWAIT is important to get the data immediately. Call the action creator function directly here and store the data in the reducer

    await store.dispatch(action.fetchMovUpcoming());
    await store.dispatch(action.fetchTvPopular());
    await store.dispatch(action.fetchMovTopRated());

    // For header hero image
    await store.dispatch(action.fetchTrending("week", "movie"));
    await store.dispatch(action.fetchTrending("week", "tv"));
    store.dispatch(action.setTrendingHeroImage());

    return {}
  }


  render() {
    const { movUpcoming, movTopRated, tvPopular, trendingWeekTv, heroSelection, isHeroLoaded } = this.props;
    // NEEDED WITH CAROUSELS: store the movie data you want to show in carousels (pass one main object) 
    // and type the label to of each categories of carousel
      const fetchedData = {
      movUpcoming: {
        label: "Upcoming Movies",
        data: movUpcoming,
        cat: "movie"
      },
      trendingWeekTv: {
        label: "TV Trending this week",
        data: trendingWeekTv,
        cat: "tv"
      },
      movTopRated: {
        label: "Top Rated Movies",
        data: movTopRated,
        cat: "movie"
      },
      tvPopular: {
        label: "Popular TV Shows",
        data: tvPopular,
        cat: "tv"
      }
    }

    return (
      <Container pdd mrg="60px 0">
        <Catalogue fetchedData={fetchedData} heroData={heroSelection} />
      </Container>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    movUpcoming: state.catalogue.movUpcoming.results,
    tvPopular: state.catalogue.tvPopular.results,
    movTopRated: state.catalogue.movTopRated.results,
    trendingWeekTv: state.catalogue.trending.week.tv.results,
    heroSelection: state.catalogue.heroSelection
  }
}

export default connect(mapStateToProps)(home)

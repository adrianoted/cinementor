import React, { Component } from 'react';
import SVG from 'react-inlinesvg';
import { Grid, GridItem, Flex } from 'styles/global/Layout';

import { calcPopularityPercentage, formatCurrency } from 'utils/utils';
import CircularChart from 'components/shared/CircularChart';

class DetailOverview extends Component {

    state = {
        popularityPercentage: null
    }

    componentDidMount() {
        const popularityPercentage = calcPopularityPercentage(this.props.detailOverview.data.popularity);
        this.setState({ popularityPercentage })
    }

    render() {
        const { detailOverview: { data, cat } } = this.props;

        // how to display the genre icons based on the number of genre
        const layoutGenreRow = data.genres.length > 3 ? { justifyContent: 'space-between' } : null;
        const layoutGenreItem = data.genres.length <= 3 ? { flexBasis: "30%", alignItems: "flex-start" } : null;

        // circleChart
        const voteCountLabel = `${data.vote_count} votes`;
        const votePopularityLabel = `${data.popularity} popularity`;
        const circularChartConfig = {
            strokeClr: "var(--clrTwo)",
            strokeWidth: 8,
            radius: 55,
            circularChartFill: "var(--clrTwo)",
            circularChartFontSize: "1.3",
            circularChartFontFamily: "Lato, sans-serif"
        }

        // Content variables
        const isMovie = cat === "movie";

        const releaseYear = data.release_date || data.first_air_date || "-";

        const movieRuntime = data.runtime + " min";
        const tvRuntime = data.episode_run_time && data.episode_run_time.join(', ') + " min";
        const runtime = isMovie ? movieRuntime : tvRuntime;

        const budget = data.budget > 0 ? `${formatCurrency(data.budget)}` : "-";
        const revenue = data.revenue > 0 ? `${formatCurrency(data.revenue)}` : "-";
        const seasons = data.number_of_seasons || "-";
        const episodes = data.number_of_episodes || "-";

        return (
            <Grid rows="60px" autoRows="auto" gap="20px 0">
                <GridItem>
                    <h2 className="info-title">Overview</h2>
                </GridItem>

                <Flex justifyContent="space-between" wrap="wrap" className="overview-row">
                    <Flex direction="column" alignItems="center">
                        <p className="info-label">Year</p>
                        <h4 className="info-data">{releaseYear.substring(0, 4)} </h4>
                    </Flex >
                    <Flex direction="column" alignItems="center">
                        <p className="info-label">Runtime</p>
                        <h4 className="info-data">{runtime || "-"}</h4>
                    </Flex >
                    <Flex direction="column" alignItems="center">
                        <p className="info-label">{isMovie ? "Budget" : "Seasons"}</p>
                        <h4 className="info-data">{isMovie ? budget : seasons}</h4>
                    </Flex >
                    <Flex direction="column" alignItems="center">
                        <p className="info-label">{isMovie ? "Revenue" : "Episodes"}</p>
                        <h4 className="info-data">{isMovie ? revenue : episodes}</h4>
                    </Flex >
                    {data.status &&
                        <Flex direction="column" alignItems="center">
                            <p className="info-label">Status</p>
                            <h4 className="info-data">{data.status}</h4>
                        </Flex>
                    }
                </Flex>

                {data.genres.length > 0 &&
                    <Flex wrap="wrap" {...layoutGenreRow} className="overview-genre-icons">
                        {data.genres.map(genre => {

                            // for the svg icons name
                            const genreNameSVG = genre.name.toLowerCase().replace(/ /gi, '_');

                            return (
                                <Flex direction="column" alignItems="center" key={genre.id} {...layoutGenreItem} >
                                    <div className="genre-icons">
                                        <SVG src={`/static/img/icons-genre/ico-${genreNameSVG}.svg`} />
                                        <h4 className="info-data">{genre.name}</h4>
                                    </div>
                                </Flex>
                            )
                        })}
                    </Flex>
                }

                <Flex wrap="wrap" className="ratings" childBasis="30%">
                    {data.vote_count > 0 && data.vote_average > 0 &&
                        <Flex className="item" direction="column" alignItems="flex-start">
                            <CircularChart
                                {...circularChartConfig}
                                isVote
                                finalProgressValue={data.vote_average}
                                circularChartLabel={voteCountLabel}
                            />
                        </Flex>
                    }
                    {data.popularity > 0 &&
                        <Flex className="item" direction="column" alignItems="flex-start">
                            <CircularChart
                                {...circularChartConfig}
                                finalProgressValue={this.state.popularityPercentage}
                                circularChartLabel={votePopularityLabel}
                            />
                        </Flex>
                    }
                </Flex>
            </Grid>
        );
    }
}

export default DetailOverview;
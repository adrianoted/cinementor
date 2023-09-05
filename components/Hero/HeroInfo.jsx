import React, { Component } from 'react';
import Link from 'next/link';

import Button from 'styles/ui/Button';
import { Flex } from 'styles/global/Layout';

import { limitCharTitle, calcPopularityPercentage } from 'utils/utils';

import CircularChart from 'components/shared/CircularChart';


class HeroInfo extends Component {
    state = {
        popularityPercentage: null
    }

    componentDidMount() {
        const popularityPercentage = calcPopularityPercentage(this.props.heroData.popularity);
        this.setState({ popularityPercentage })
    }

    render() {
        const { heroData } = this.props;
        const voteCountLabel = `${heroData.vote_count} votes`;
        const votePopularityLabel = `${heroData.popularity} popularity`;

        const circularChartConfig = {
            strokeClr: "var(--clrTwo)",
            strokeWidth: 8,
            radius: 60,
            circularChartFill: "#fff",
            circularChartFontSize: "1.2",
            circularChartFontFamily: "Lato, sans-serif"
        }

        return (
            <div className="hero-content">
                <div className="box">

                    <Flex justifyContent="space-between" className="ratings">
                        <span className="item">
                            <CircularChart
                                {...circularChartConfig}
                                isVote
                                finalProgressValue={heroData.vote_average}
                                circularChartLabel={voteCountLabel}
                            />
                        </span>
                        <span className="item">
                            <CircularChart
                                {...circularChartConfig}
                                finalProgressValue={this.state.popularityPercentage}
                                circularChartLabel={votePopularityLabel}
                            />
                        </span>
                    </Flex>

                    <h1 className="title">{heroData.title || heroData.name}</h1>
                    {heroData.overview && <p className="overview">{limitCharTitle(heroData.overview)}</p>}
                    <Link
                        href={{
                            pathname: '/detail',
                            query: { cat: heroData.media_type, id: heroData.id }
                        }}
                        as={`/detail/${heroData.media_type}/${heroData.id}/${(heroData.title || heroData.name).replace(/[^a-zA-Z0-9-_]/g, '-')} `}
                    >
                        <a>
                            <Button id="btnDetail">Take a look</Button>
                        </a>
                    </Link>
                </div>
            </div>
        );
    }
}

export default HeroInfo;
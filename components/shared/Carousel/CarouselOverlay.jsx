import React, { Component } from 'react';
import Link from 'next/link';

import { Grid, GridItem } from 'styles/global/Layout';
import Button from 'styles/ui/Button';
import Wrapper from 'styles/components/Carousel/CarouselOverlay';

class CarouselOverlay extends Component {

    render() {
        const { category, id, data } = this.props;
        // divide the vote by two
        const ratingVote = parseInt((data.vote_average), 10) / 2;
        const ratingPopularity = Number((data.popularity).toFixed(2));

        const renderStar = [...Array(5)].map((star, i) => {

            // Push "full" or "half" class in the array based on vote
            const classes = ['star'];

            // split the vote into two parts: the first represent the integer, the second the decimal (if exists)
            const rounded = Math.floor(ratingVote);
            const isHalf = (ratingVote % 1) !== 0;

            // add full star on the last star
            (i + 1) <= rounded ? classes.push('full') : null;

            // If there is a decimal and the index is equal to the last star push the half star 
            isHalf && i === rounded ? classes.push('half') : null;

            return <div key={i} className={classes.join(' ')}>☆</div>;
        });

        return (
            <Wrapper>
                <Grid cols="1fr" rows="auto 1fr auto auto" height="100%">
                    <div className="rating">
                        {renderStar}
                        <p>pop. {ratingPopularity}</p>
                    </div>

                    <GridItem row="2/4" alignSelf="flex-end" >
                        <h3 className="title">{data.title || data.name}</h3>
                    </GridItem>

                    <GridItem >
                        <p>{data.release_date && data.release_date.substring(0, 4)}</p>
                    </GridItem>

                    <GridItem textAlign="center" mrg="10px 0 0">
                        <Link
                            href={{
                                pathname: '/detail',
                                query: { cat: category, id: id }
                            }}
                            as={`/detail/${category}/${id}/${(data.title || data.name).replace(/[^a-zA-Z0-9-_]/g, '-')} `}
                        >
                            <a>
                                <Button pdd="10px 20px">Take a look</Button>
                            </a>
                        </Link>
                    </GridItem>

                </Grid>
            </Wrapper>
        );
    }
}

export default CarouselOverlay;
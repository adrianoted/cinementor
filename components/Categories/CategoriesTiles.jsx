import React from 'react';
import { IMAGE_URL } from 'constants';

import { Grid } from 'styles/global/Layout';
import Overlay from 'styles/ui/Overlay';
import { CategoryTile } from 'styles/components/Tiles';

import Placeholder from 'ui/Placeholder';


const CategoriesTiles = (props) => {
    const { bgMov, bgTv } = props;

    const bgMovPath = `${IMAGE_URL}/w780/${bgMov}`;
    const bgTvPath = `${IMAGE_URL}/w780/${bgTv}`;

    const isBgMov = bgMov === undefined ? false : true;
    const isBgTv = bgTv === undefined ? false : true;

    // In CategoryTile create a fallback with placeholder 
    return (
        <Grid
            autoRows="350px"
            cols="repeat(auto-fit, minmax(400px, 1fr))"
            colsXS
            justifyItems="stretch"
            justifyContent="space-evenly"
            alignItems="stretch"
            gap="40px"
        >

            <CategoryTile href="javascript:void(0)"
                data-category="movie"
                bgImg={bgMovPath}
                onClick={props.handleClickCategories}
                isSelected={props.selectedTile}
            >
                {isBgMov
                    ? (<React.Fragment>
                        <h1>Movie</h1>
                        <Overlay
                            pos="absolute"
                            blend="soft-light"
                            bgDefault={true}
                            alpha={1}
                        />
                        <Overlay
                            pos="absolute"
                            blend="color"
                            bgDefault={true}
                            alpha={0.4}
                        />
                    </React.Fragment>)
                    : (<React.Fragment>
                        <h1 style={{ position: "relative", zIndex: "42" }}>Movie</h1>
                        <Placeholder type="backdropTile" cat="movie" position="absolute" noIcon />
                    </React.Fragment>)
                }
            </CategoryTile>

            <CategoryTile
                href="javascript:void(0)"
                data-category="tv"
                bgImg={bgTvPath}
                onClick={props.handleClickCategories}
                isSelected={props.selectedTile}
            >
                {isBgTv
                    ? (<React.Fragment>
                        <h1>TV</h1>
                        <Overlay
                            pos="absolute"
                            blend="soft-light"
                            bgDefault={true}
                            alpha={1}
                        />
                        <Overlay
                            pos="absolute"
                            blend="color"
                            bgDefault={true}
                            alpha={0.4}
                        />
                    </React.Fragment>)
                    : (<React.Fragment>
                        <h1 style={{ position: "relative", zIndex: "42" }}>TV</h1>
                        <Placeholder type="backdropTile" cat="movie" position="absolute" noIcon />
                    </React.Fragment>)
                }
            </CategoryTile>
        </Grid>
    );
}

export default CategoriesTiles;
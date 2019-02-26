import React, { Component } from 'react';
import Link from 'next/link';

import SVG from 'react-inlinesvg';
import { Grid } from 'styles/global/Layout';
import { GenreTile } from 'styles/components/Tiles';


const GenresList = (props) => {

    const { genres, category, page } = props;
    const colorFlag = category === "movie" ? "clrOneAlpha" : "clrTwoAlpha";
    return (
        <Grid
            cols="repeat(auto-fit, minmax(210px, 1fr))"
            autoRows="210px"
            gap="25px"
            justifyItems="stretch"
            justifyContent="stretch"
            alignItems="stretch"
        >
            {genres && genres.map((genre) => {

                // for the svg icons name
                const genreNameSVG = genre.name.toLowerCase().replace(/ /gi, '_');

                return (
                    <Link
                        key={genre.id}
                        href={{
                            pathname: `genres`,
                            query: { cat: category, genre: genre.name, label: genre.name, id: genre.id, page }
                        }}
                        // alias for url
                        // as={`genres/${category}/${genre.name.toLowerCase()}/${genre.id}/${page}`}
                        prefetch
                    >
                        <GenreTile
                            data-id={genre.id}
                            data-category={category}
                            bg={`var(--${colorFlag})`}
                        >
                            <SVG src={`/static/img/icons-genre/ico-${genreNameSVG}.svg`} />
                            <h3>{genre.name}</h3>
                        </GenreTile>
                    </Link>
                )
            })
                || <h2>Sorry, no {category} genre available at the moment :(</h2>
            }
        </Grid>
    );

}

export default GenresList;
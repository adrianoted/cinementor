import React from 'react';
import Router from 'next/router'

import SVG from 'react-inlinesvg';
import YouTube from 'react-youtube';

import { IMAGE_URL } from 'constants';

import Wrapper from 'styles/components/Detail';
import { Grid, GridItem } from 'styles/global/Layout';
import Button from 'styles/ui/Button';

import Placeholder from 'ui/Placeholder';
import Hero from 'components/Hero/Hero';
import DetailOverview from './DetailOverview';
import DetailCast from './DetailCast';
import DetailAsideInfo from './DetailAsideInfo';
import DetailInfos from './DetailInfos';


const Detail = (props) => {
    const { detail: { data, lang, cat, data: { credits: { crew, cast } } } } = props;

    const icoCategory = cat === "movie" ? "filmcamera" : "tv";

    return (
        <Wrapper className="detail-content">
            <Hero
                heroData={data}
                parallaxOffset={0}
                isOverlay
                minHeight="80vh"
                overlayBlend="normal"
                overlayAlpha="0.2"
                isFixed={false}
                placeholderType="backdropDetail"
                category={cat}
            />

            <div className="detail-content">
                <div className="detail-header">
                    <div>
                        <h1>{data.title || data.name || "Title not available"}</h1>
                        {data.tagline && <p className="tagline"><strong>{data.tagline}</strong></p> || null}
                    </div>
                    <SVG src={`/static/img/icons-placeholders/ico-${icoCategory}.svg`} />
                </div>

                <Grid className="detail-body" gap="50px 30px">

                    {/* Poseter */}
                    <GridItem>
                        {(data.images.posters.length > 1 || data.poster_path !== null)
                            ? <img src={`${IMAGE_URL}/w500${data.images.posters.length > 1 && data.images.posters[1].file_path || data.poster_path}`} />
                            : <Placeholder type="poster" />
                        }
                    </GridItem>


                    {/* Overview */}
                    <DetailOverview detailOverview={{ data, cat }} />

                    {/* Aside Info */}
                    <GridItem>
                        <DetailAsideInfo detailAsideInfo={{ data, lang, cat }} />
                    </GridItem>

                    {/* Content Infos */}
                    <Grid rows="60px" autoRows="auto" gap="20px 0">
                        <DetailInfos detailInfos={{ data, lang, cat, crew }} />

                    </Grid>

                    {/* Cast */}
                    <Grid gridCol="1 / -1" gap="20px 0">
                        <DetailCast cast={cast} />
                    </Grid>

                    {/* Trailer */}
                    {data.videos.results.length > 0 &&
                        <Grid gridCol="1 / -1" gap="20px 0">
                            <h2 className="info-title">Trailer</h2>
                            <div className="videoWrapper">
                                <YouTube
                                    videoId={data.videos.results[0].key}
                                    preload
                                />
                            </div>
                        </Grid>
                    }
                    <GridItem gridCol="1 / -1" mrg="10px 0 30px 0">
                        <Button
                            className="colorOneInv"
                            display="block"
                            onClick={() => Router.back()}
                            style={{ margin: "0 auto", fontSize: "1.2em" }}
                        >
                            Go Back
                        </Button>
                    </GridItem>
                </Grid>
            </div>
        </Wrapper>
    );
}

export default Detail;
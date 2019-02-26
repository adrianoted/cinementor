import React from 'react';
import { IMAGE_URL } from 'constants';
import LazyHero from 'react-lazy-hero';

import Overlay from 'styles/ui/Overlay';
import HeroStyle from 'styles/components/Hero';

import Placeholder from 'ui/Placeholder';
import HeroInfo from './HeroInfo';


const Hero = (props) => {
    const { heroData, isInfo, isOverlay, placeholderType, category } = props;

    // only for detail page because heroData.images data is appended to the request for detail
    const isDetailHero = heroData.images && heroData.images.backdrops.length > 1 && heroData.images.backdrops[1].file_path !== null;
    const srcImgSwitch = isDetailHero ? heroData.images.backdrops[1].file_path : heroData.backdrop_path;

    return (
        <HeroStyle isInfo={isInfo}>

            {isInfo && heroData.id && <HeroInfo heroData={heroData} />}

            {isOverlay &&
                <Overlay
                    pos="absolute"
                    blend="soft-light"
                    bgDefault={true}
                    alpha={1}
                />
            }

            {isDetailHero || heroData.backdrop_path !== null && heroData.id 
                ? <LazyHero
                    // check if there is an image in the images.backdrops array  (only for detail) or get the default backdrop (index and detail). 
                    imageSrc={`${IMAGE_URL}/w1280${srcImgSwitch}`}
                    minHeight={props.minHeight || "85vh"}
                    parallaxOffset={props.parallaxOffset > -1 ? props.parallaxOffset : 100}
                    className={`lazy-hero${props.addClasses ? "" + props.addClasses : ""}`}
                    opacity={0}
                    isFixed={props.isFixed || false}
                />
                : <Placeholder type={placeholderType} cat={category}>
                    <div className="hero-content">
                        <div className="box"><h1>No data available</h1></div>
                    </div>
                </Placeholder>
            }
        </HeroStyle>
    );

}

export default Hero;
import React from 'react'
import { connect } from 'react-redux';

import { IMAGE_URL } from 'constants';

import * as action from 'actions/index'
import styled from 'styled-components';

import Carousel from 'shared/Carousel/Carousel';
import Hero from 'components/Hero/Hero';

import Loader from 'shared/Loader';

// blur the container except the active carousel
const ContainerOnBlur = styled("div")`
    > *:not(#${props => props.activeCarousel}) {
        filter: ${props => props.activeCarousel ? "blur(10px)" : null};
        opacity: ${props => props.activeCarousel ? "0.5" : null};
        pointer-events: none;
    }
    
    @media (max-width: 768px) {
        > [class^="Carousel"] {
          padding:0 20px;
        }
        .slick-prev {left: -15px;}
        .slick-next {right: -15px;}
    }
`;


class Catalogue extends React.Component {

    // SSR issue: the carousel loads after the SSR of the page causing FOUC issue client side 
    componentDidMount() {
        this.props.onCarouselLoad();
        this.props.onHeroImageLoad();
    }

    render() {
        const { fetchedData, heroData, activeCarousel, isHeroLoaded } = this.props;

        const renderCarousel = Object.keys(fetchedData).map((key, i) => {
            if (fetchedData[key].data !== undefined) {
                // the key of each prop of fetchedData is used to set the id of each carousels and passed to render the posters of specific categories 
                return (
                    <Carousel
                        idName={key}
                        key={key + i}
                        fetchedData={fetchedData[key].data}
                        category={fetchedData[key].cat}
                        className={activeCarousel === key ? "zIndex" : null}
                        imageURL={IMAGE_URL}
                        label={fetchedData[key].label}
                        // posterWidth="230px"
                        // posterHeight="345px"
                        onCarouselScrollOn={this.props.onCarouselScrollOn}
                        onCarouselScrollOff={this.props.onCarouselScrollOff}
                    />
                )
            }
        });

        return (
            // This prop is set on mouse enter and stored in the reducer
            <ContainerOnBlur activeCarousel={activeCarousel} >
                {!isHeroLoaded &&
                    <Loader /> ||
                    <Hero
                        heroData={heroData}
                        isInfo
                        isOverlay
                        placeholderType="backdropHome"
                        category={heroData.media_type}
                    />
                }
                {this.props.isCarouselLoaded && renderCarousel}
            </ContainerOnBlur >
        )
    }
}

const mapStateToProps = (state) => ({
    isHeroLoaded: state.catalogue.trending.isLoaded,
    isCarouselLoaded: state.carousel.isLoaded,
    activeCarousel: state.carousel.activeCarousel
})

const mapDispatchToProps = (dispatch) => {
    return {
        onHeroImageLoad: () => dispatch(action.isLoadedHeroImage()),
        onCarouselLoad: () => dispatch(action.carouselLoad()),
        onCarouselScrollOn: (carouselId) => dispatch(action.carouselScrollOn(carouselId)),
        onCarouselScrollOff: () => dispatch(action.carouselScrollOff())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalogue)
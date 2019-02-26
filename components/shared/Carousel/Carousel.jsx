import React from 'react';
import Slider from "react-slick";

import CarouselStyle, { Poster } from 'styles/components/Carousel/Carousel';

import Placeholder from 'ui/Placeholder';
import CarouselHeader from './CarouselHeader';
import CarouselOverlay from './CarouselOverlay';


const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style }}
            onClick={onClick}
        />
    );
}

const PrevArrow = (props) => {
    const { className, style, onClick } = props;

    return (
        <div
            className={className}
            style={{ ...style }}
            onClick={onClick}
        />
    );
}

class Carousel extends React.Component {

    // store ref DOM elements for the carousels
    state = {
        carouselRefs: {},
        // Switch toggle and allow horizontal scroll only when the carousel is locked
        isOn: false,
        windowWidth: 0
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        this.setState({ isOn: false });
        this.props.onCarouselScrollOff();
        window.removeEventListener('resize', this.updateWindowDimensions);
    }


    updateWindowDimensions = () => {
        this.setState({ windowWidth: window.innerWidth });
    }

    // Add overflow hidden to the body, to facilitate horizontal scroll
    handleToggleSwitch = (e) => {

        // get the Id of the current carousel 
        const carouselId = e.currentTarget.parentElement.parentElement.id;

        this.setState((prevState) => ({ isOn: !prevState.isOn }));

        // Pass the id of the current carousel and store it in the reducer. This prop is used as flag for the blur filter in css
        this.props.onCarouselScrollOn(carouselId);
    }


    // on mouse wheel scroll horizontal: call slickNext() or slickPrev(). In the settings can set the number of slide to scroll (slidesToScroll)
    wheelHandler = (event) => {
        if (!this.state.isOn) return;
        event.deltaY > 0 ? this.slider.slickNext() : this.slider.slickPrev()
    }


    render() {
        const { windowWidth } = this.state;
        let slidesToScrollOnResize;
        switch (true) {
            case windowWidth > "1024": slidesToScrollOnResize = 4; break;
            case windowWidth > "768": slidesToScrollOnResize = 2; break;
            default: slidesToScrollOnResize = 1; break;
        }

        // settings for the carousel
        const settings = {
            infinite: true,
            slidesToShow: 1,
            variableWidth: true,
            speed: 1100,
            slidesToScroll: slidesToScrollOnResize,
            initialized: true,
            arrows: true,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            swipeToSlide: true
        };

        // Each props of fetchedMovies passed as object from the corresponding page, is a category/genre to show in separate carousels
        const { fetchedData, imageURL, idName, category } = this.props;

        const renderCarousel = () => {
            return fetchedData.map((data, i) => {

                return (
                    <Poster
                        key={data + i}
                        className="item"
                        width={this.props.posterWidth}
                        heigth={this.props.posterHeight}
                    >
                        <CarouselOverlay category={category} id={data.id} data={data} />
                        {data.poster_path && data.poster_path !== null
                            ? <img src={`${imageURL}/w500${data.poster_path}`} />
                            : <Placeholder type="poster" />
                        }

                    </Poster>
                );
            });
        }

        return (
            <CarouselStyle
                // Give an Id to the current carousel 
                id={idName}
                // for each carousel store a ref as prop in carouselRefs object. The name is taken by the Id passed as prop
                ref={div => this.state.carouselRefs[idName] = div}
                onWheel={this.wheelHandler}
            >

                <CarouselHeader
                    label={this.props.label}
                    category={category}
                    genre={idName}
                    isOn={this.state.isOn}
                    handleToggleSwitch={this.handleToggleSwitch}
                />

                <Slider {...settings} {...this.props} ref={slider => this.slider = slider}>
                    {renderCarousel()}
                </Slider>
            </CarouselStyle>
        );
    }
};

export default Carousel;
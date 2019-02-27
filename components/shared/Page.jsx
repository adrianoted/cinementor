import React from 'react';
import { connect } from 'react-redux';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ThemeProvider } from 'styled-components';
import theme from 'styles/global/Theme';
import GlobalStyle from 'styles/global/GlobalStyle';

import Head from './Head';
import Footer from './Footer';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer';

import Error from '../../pages/_error';

class Layout extends React.Component {

    state = {
        showSideDrawer: false,
        activeNavItem: ""
    }

    // On page reload: get the url and set the active menu item
    componentDidMount() {
        let pathname = this.props.route;
        pathname === "/index" ? pathname = "home" : pathname = pathname.replace("/", "").toLowerCase();

        // if page is categories/genres or detail set active on categories nav item 
        (pathname === "genres" || pathname === "detail") ? pathname = "categories" : null;

        this.setState({ activeNavItem: pathname })
    }

    // if route changes close the sideDrawer
    componentDidUpdate(prevProps) {
        if (this.props.route !== prevProps.route) {
            this.setState({ showSideDrawer: false });
            window.scrollTo(0, 0)
        }
    }

    sideDrawerToggle = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        });
    }

    // get the name of the clicked nav link and set as active
    handleItemClick = (props) => {
        this.setState({ activeNavItem: props })
    }


    render() {

        if (this.props.route === "/_error") {
            return (
                <ThemeProvider theme={theme}>
                    <React.Fragment>
                        <Head title="Cine Mentor - NextJS Web App" />
                        <GlobalStyle />
                        <Error />
                    </React.Fragment>
                </ThemeProvider>
            )
        }
        return (
            <ThemeProvider theme={theme}>
                <React.Fragment>
                    <Head title="Cine Mentor - NextJS Web App" />
                    <GlobalStyle noScroll={this.props.isLocked} />

                    <Toolbar
                        toggleHandler={this.sideDrawerToggle}
                        isOpen={this.state.showSideDrawer}
                        handleItemClick={this.handleItemClick}
                        activeNavItem={this.state.activeNavItem}
                    />

                    <SideDrawer
                        open={this.state.showSideDrawer}
                        handleItemClick={this.handleItemClick}
                        activeNavItem={this.state.activeNavItem}
                    />

                    {this.props.children}
                    <Footer />
                </React.Fragment>
            </ThemeProvider>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        // to facilitate horizontal scroll on carousel
        isLocked: state.carousel.isLocked
    }
}

export default connect(mapStateToProps)(Layout);

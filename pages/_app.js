import App, { Container } from 'next/app'
import React from 'react'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'

import NProgress from 'nprogress'
import Router from 'next/router'

import Page from 'components/shared/Page';


Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());


class MyApp extends App {
    static async getInitialProps({ Component, router, ctx }) {
        
        // let pageProps = {};
        // pageProps = await Component.getInitialProps(ctx);
        
        let pageProps = {}, error;
        if (Component.getInitialProps) {
            try {
                pageProps = await Component.getInitialProps(ctx);
            } catch (err) {
                error = err;
                Sentry.captureException(err); //report to sentry
            }
        }
        return { pageProps, error }
    }

    render() {
        const { Component, pageProps, reduxStore, router, error } = this.props;

        return (
            <Container>
                <Provider store={reduxStore}>
                    <Page {...router} error={error}>
                        <Component {...pageProps} />
                    </Page>
                </Provider>
            </Container>
        )
    }
}

export default withReduxStore(MyApp)
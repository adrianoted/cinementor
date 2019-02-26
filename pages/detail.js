import React from 'react';
import { connect } from 'react-redux';
import * as action from 'actions/index';

import { withRouter } from 'next/router';

import { Container } from 'styles/global/Layout';
import Detail from 'components/Detail/Detail';


class detail extends React.Component {

    static async getInitialProps(props) {
        // Get the reduxStore from the context
        const store = props.reduxStore;
        // get the params from url string
        const { cat, id } = props.query;

        const fetchDetail = store.dispatch(action.fetchDetail(cat, id));
        const fetchLanguage = store.dispatch(action.fetchLanguageCode());

        await Promise.all([fetchDetail, fetchLanguage]);

        return {cat}
    }

    render() {

        const data = {
            data: this.props.data,
            lang: this.props.lang, // to display the language in full string
            cat:  this.props.cat
        }

        if (data) {
            return (
                <Container mrg="86px 0">
                    <Detail detail={data}/>
                </Container>
            );
        }
    }
};

const mapStateToProps = (state) => {
    return {
        data: state.detail.data,
        lang: state.detail.lang
    }
}
export default withRouter(connect(mapStateToProps)(detail))

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from 'actions/index'
import Router from 'next/router'
import Autosuggest from 'react-autosuggest';

import Wrapper from 'styles/components/SearchForm';

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = (value, dataArray) => {
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
    const escapeRegexCharacters = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    const inputValue = escapeRegexCharacters(value.trim().toLowerCase());
    const inputLength = inputValue.length;

    let finalData = [
        {
            media_type: "movie",
            results: []
        },
        {
            media_type: "tv",
            results: []
        }
    ];

    const [movie, tv] = finalData;

    dataArray.forEach(el => {
        if (el.media_type === "movie" && el.title.toLowerCase().slice(0, inputLength) === inputValue) {
            movie.results.push(el);
        } else if (el.media_type === "tv" && el.name && el.name.toLowerCase().slice(0, inputLength) === inputValue) {
            tv.results.push(el);
        }
    })

    return inputLength === 0 ? [] : finalData;
};

// Implement it to teach Autosuggest where to find the suggestions for every section.
const getSectionSuggestions = (section) => section.results;

// Title template
const renderSectionTitle = (section) => {
    return (
        <strong>{section.results.length > 0 ? section.media_type : null}</strong>
    );
}
// Results template
const renderSuggestion = suggestion => {
    return (
        <React.Fragment>
            <p>{suggestion.name || suggestion.title}</p>
            {suggestion.release_date && <span>{suggestion.release_date.substring(0, 4)}</span>}
        </React.Fragment>
    )
};

// When suggestion is clicked, Autosuggest needs to populate the input based on the clicked suggestion. 
const getSuggestionValue = suggestion => {
    return suggestion.name || suggestion.title;
}


class SearchForm extends Component {
    state = {
        value: '',
        suggestions: []
    }

    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
    };

    // Autosuggest will call this function every time you need to update suggestions.
    onSuggestionsFetchRequested = async ({ value }) => {
        // make api request
        await this.props.onSearchResult(value);
        // Pass as arguments the value typing and the array with the results fetched
        const updatedSuggestions = getSuggestions(value, this.props.results);
        // store the filtered result in the state
        this.setState({
            suggestions: updatedSuggestions
        });
    };

    // Autosuggest will call this function every time you need to clear suggestions.
    onSuggestionsClearRequested = () => this.setState({ suggestions: [] });

    onSuggestionSelected = (event, { suggestion }) => {
        const pathAlias = `/detail/${suggestion.media_type}/${suggestion.id}/${(suggestion.title || suggestion.name).replace(/[^a-zA-Z0-9-_]/g, '-')} `;
        Router.push(
            {
                pathname: '/detail',
                query: { cat: suggestion.media_type, id: suggestion.id }
            },
            pathAlias
        )
        this.setState({
            value: ''
        });
    };


    render() {
        const { value, suggestions } = this.state;

        // Autosuggest will pass through all these props to the input.
        const inputProps = {
            placeholder: 'Search a Movie or a TV Show',
            value,
            onChange: this.onChange
        };

        return (
            <Wrapper>
                <Autosuggest
                    multiSection={true}
                    suggestions={suggestions}
                    getSuggestionValue={getSuggestionValue}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                    renderSuggestion={renderSuggestion}
                    renderSectionTitle={renderSectionTitle}
                    onSuggestionSelected={this.onSuggestionSelected}
                    getSectionSuggestions={getSectionSuggestions}
                    inputProps={inputProps}
                />
            </Wrapper>

        );
    }
}

const mapStateToProps = (state) => ({
    results: state.search.data.results,
})

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchResult: (value) => dispatch(action.fetchMultiSearch(value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)
import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
// import * as Opencage from 'opencage-api-client';
import Opencage from 'opencage-api-client/dist/opencage-api.min';
import PropTypes from 'prop-types';

import './opencage.css';

class OpencageAutosuggest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      suggestions: [],
      isLoading: false,
    };
    this.onChange = this.onChange.bind(this);
    this.fetchSuggestions = this.fetchSuggestions.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(
      this
    );
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(
      this
    );
    this.getSuggestionValue = this.getSuggestionValue.bind(this);
    this.renderSuggestion = this.renderSuggestion.bind(this);
  }

  onChange(event, { newValue }) {
    this.setState({
      value: newValue,
    });
  }

  fetchSuggestions(value) {
    Opencage.geocode({ q: value, key: this.props.apiKey })
      .then(data => {
        // console.log(JSON.stringify(data));
        if (data.status.code === 200) {
          if (data.results.length > 0) {
            this.setState({ suggestions: data.results });
          }
        } else {
          this.setState({ suggestions: [] });
          // eslint-disable-next-line
          console.log('error', data.status.message);
        }
      })
      .catch(error => {
        this.setState({ suggestions: [] });
        // eslint-disable-next-line
        console.log('error', error.message);
      });
  }

  onSuggestionsFetchRequested({ value }) {
    this.fetchSuggestions(value);
  }

  onSuggestionsClearRequested() {
    this.setState({
      suggestions: [],
    });
  }

  // eslint-disable-next-line
  getSuggestionValue(suggestion) {
    return suggestion.formatted;
  }

  // eslint-disable-next-line
  renderSuggestion(suggestion) {
    return (
      <div>
        <span>{suggestion.annotations.flag}</span>&nbsp;<span>
          {suggestion.formatted}
        </span>
      </div>
    );
  }

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: 'address',
      value,
      onChange: this.onChange,
    };
    // const status = isLoading ? 'Loading...' : 'Type to load suggestions';

    return (
      <div className="opencage-wrapper">
        {/* <div className="status">
          <strong>Status:</strong> {status}
        </div> */}
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps}
        />
      </div>
    );
  }
}
OpencageAutosuggest.propTypes = {
  apiKey: PropTypes.string,
};

export default OpencageAutosuggest;

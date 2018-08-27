import React from 'react';

import { storiesOf } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs/react';

// import AutosuggestStory from './Autosuggest.story';
import OpencageAutosuggest from '../src/OpencageAutosuggest';

storiesOf('Opencage Data', module)
  // Add the `withKnobs` decorator to add knobs support to your stories.
  // You can also configure `withKnobs` as a global decorator.
  .addDecorator(withKnobs)
  .add('autocomplete', () => {
    const apiKey = text('apiKey', 'your-api-key');
    return <OpencageAutosuggest apiKey={apiKey} />;
  });

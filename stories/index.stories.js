import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

// import { Button, Welcome } from '@storybook/react/demo';
import { withKnobs, text } from '@storybook/addon-knobs/react';

import OpencageAutocomplete from '../src/OpencageAutocomplete';

// storiesOf('Welcome', module).add('to Storybook', () => (
//   <Welcome showApp={linkTo('Button')} />
// ));

// storiesOf('Button', module)
//   .add('with text', () => (
//     <Button onClick={action('clicked')}>Hello Button</Button>
//   ))
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>
//       <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   ));

storiesOf('Opencage Data', module)
  // Add the `withKnobs` decorator to add knobs support to your stories.
  // You can also configure `withKnobs` as a global decorator.
  .addDecorator(withKnobs)
  .add('autocomplete', () => {
    const apiKey = text('apiKey', 'your-api-key');
    const proxyURL = text('proxyURL', '');
    return (
      <OpencageAutocomplete
        apiKey={apiKey}
        proxyURL={proxyURL}
        debug={true}
        onSuggestionSelected={action('SuggestionSelected')}
      />
    );
  });

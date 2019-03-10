# opencage-autocomplete-react

<!-- [![Storybook](https://github.com/storybooks/press/blob/master/badges/storybook.svg)](link to site with knobs tab open) -->

## get started

> TODO

npm i -S opencage-autocomplete-react

or

yarn add opencage-autocomplete-react

then in your react app:

```js
import OpencageAutocomplete from 'opencage-autocomplete-react'
[...]
const apiKey = 'your-api-key';
[...]
render() {
  return (
    <OpencageAutocomplete
      apiKey={apiKey}
      onSuggestionSelected={(event, { suggestion } => {
        console.log()
      })}
    />
  );
}
```

## development

### clone

    clone the repo

### setup

    $ yarn

### storybook

    $ yarn storybook

open the knobs tab and enter your OpenCage API key or your proxy URL

### develop

> TODO

    $ yarn start

### building

    $ yarn build:prod

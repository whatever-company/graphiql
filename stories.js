import React from 'react';
import { storiesOf } from '@kadira/storybook';

import {GraphiQL} from './src/components/GraphiQL';
import './graphiql.css';

function graphQLFetcher(graphQLParams) {
  return fetch('http://localhost:8080/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(graphQLParams),
    credentials: 'include',
  }).then(function (response) {
    return response.text();
  }).then(function (responseBody) {
    try {
      return JSON.parse(responseBody);
    } catch (error) {
      return responseBody;
    }
  });
}


const style = {
  position: 'absolute',
  display: 'flex',
  width: '100%',
  height: '100%'
};

storiesOf('GraphiQL', module)
    .addDecorator(storyFn => (
      <div style={style}>
        {storyFn()}
      </div>
    ))

    .add('default', () => (
      <GraphiQL fetcher={graphQLFetcher}>
      </GraphiQL>
    ));

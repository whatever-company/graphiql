import { configure } from '@kadira/storybook';

function loadStories() {
  require('../stories.js');
}

configure(loadStories, module);

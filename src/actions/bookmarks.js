// @flow
import { createDraft } from './drafts';

import type { Thunk } from './types';

export function createBookmarkDraft(name: string, url: ?string): Thunk {
  return dispatch => {
    const bookmark = {
      site: '',
      title: '',
      url: url || '',
      description: '',
      image: ''
    };

    if (url && url.length > 0) {
      fetch('http://localhost:3001/v1/scrape', {
        method: 'POST',
        body: JSON.stringify({ url }),
        headers: new Headers({ 'Content-Type': 'application/json' })
      })
        .then(res => res.json())
        .then(metadata => dispatch(createDraft(name, metadata)))
        .catch(err => {
          console.error(err);
          dispatch(createDraft(name, bookmark));
        });
    } else {
      dispatch(createDraft(name, bookmark));
    }
  };
}

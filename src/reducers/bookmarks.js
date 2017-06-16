// @flow
import uuid from 'uuid';

import type { Action } from '../actions/types';

export type Bookmark = {
  id: string,
  site?: string,
  title: string,
  url: string,
  description: string,
  image?: string
};
export type State = { [id: string]: Bookmark };

const BOOKMARKS: State = [
  {
    id: uuid.v4(),
    title: 'styled-components',
    description:
      '**Visual primitives for the component age.**\n\nUse the best bits of ES6 and CSS to style your apps without stress 💅',
    url: 'https://www.styled-components.com/',
    image: 'https://www.styled-components.com/static/atom.png'
  },
  {
    id: uuid.v4(),
    site: 'GitHub',
    title: 'chjj/marked',
    description: 'marked - A markdown parser and compiler. Built for speed.',
    url: 'https://github.com/chjj/marked',
    image: 'https://avatars2.githubusercontent.com/u/470564?v=3&s=400'
  },
  {
    id: uuid.v4(),
    title: 'Jest · 🃏 Delightful JavaScript Testing',
    description: '🃏 Delightful JavaScript Testing',
    url: 'https://facebook.github.io/jest/index.html',
    image: 'https://facebook.github.io/jest/img/opengraph.png'
  },
  {
    id: uuid.v4(),
    site: 'Atom',
    title: 'A hackable text editor for the 21st Century',
    description:
      'At GitHub, we’re building the text editor we’ve always wanted: hackable to the core, but approachable on the first day without ever touching a config file. We can’t wait to see what you build with it.',
    url: 'https://atom.io/',
    image: 'http://og.github.com/atom-mark/atom-mark@1200x630.png'
  },
  {
    id: uuid.v4(),
    site: 'Waypoint',
    title: 'In Conversation with ‘WipEout’ Composer CoLD SToRAGE',
    description:
      "Tim Wright's music remains a vital part of the sci-fi racer's legacy—we discuss that, and his career beyond it.",
    url:
      'https://waypoint.vice.com/en_us/article/in-conversation-with-wipeout-composer-cold-storage,',
    image:
      'https://video-images.vice.com/articles/592d28a3bbfcfe449ff0cd37/lede/1496131794415-rsz_coldstorge1_1.jpeg'
  }
].reduce(
  (state: State, bookmark: Bookmark) => ({ ...state, [bookmark.id]: bookmark }),
  {}
);

function bookmarks(state: State = BOOKMARKS, action: Action): State {
  return state;
}

export default bookmarks;

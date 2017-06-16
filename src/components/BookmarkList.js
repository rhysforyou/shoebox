// @flow
import React from 'react';
import styled from 'styled-components';
import Bookmark from './Bookmark';

import type { Bookmark as bookmarks$Bookmark } from '../reducers/bookmarks';

const Container = styled.div`
  padding: 1rem 0;
`;

type Props = {
  bookmarks: Array<bookmarks$Bookmark>
};

const BookmarkList = ({ bookmarks }: Props) =>
  <Container>
    {bookmarks.map(({ id, site, title, description, url, image }) =>
      <Bookmark
        key={id}
        site={site}
        title={title}
        description={description}
        url={url}
        image={image}
      />
    )}
  </Container>;

export default BookmarkList;

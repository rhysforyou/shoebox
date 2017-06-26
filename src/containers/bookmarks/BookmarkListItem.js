// @flow
import { connect } from 'react-redux'
import { BookmarkSummary } from '../../components/bookmarks'
import {
  selectedBookmarkSiteSelector,
  selectedBookmarkTitleSelector,
  selectedBookmarkDescriptionSelector,
  selectedBookmarkURLSelector,
  selectedBookmarkImageSelector
} from '../../selectors/bookmarks'

import type { State } from '../../reducers/types'

type OwnProps = {
  bookmarkId: string
}

type StateProps = {
  site: ?string,
  title: string,
  description: ?string,
  url: string,
  image: ?string
}

const mapStateToProps = (state: State, props: OwnProps): StateProps => ({
  site: selectedBookmarkSiteSelector(state, props),
  title: selectedBookmarkTitleSelector(state, props),
  description: selectedBookmarkDescriptionSelector(state, props),
  url: selectedBookmarkURLSelector(state, props),
  image: selectedBookmarkImageSelector(state, props)
})

export const BookmarkListItem = connect(mapStateToProps)(BookmarkSummary)
export default BookmarkListItem

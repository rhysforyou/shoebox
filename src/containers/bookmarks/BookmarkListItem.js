// @flow
import { connect } from 'react-redux'
import { BookmarkSummary } from '../../components/bookmarks'
import {
  bookmarkSiteSelector,
  bookmarkTitleSelector,
  bookmarkDescriptionSelector,
  bookmarkURLSelector,
  bookmarkImageSelector
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
  site: bookmarkSiteSelector(state, props),
  title: bookmarkTitleSelector(state, props),
  description: bookmarkDescriptionSelector(state, props),
  url: bookmarkURLSelector(state, props),
  image: bookmarkImageSelector(state, props)
})

export const BookmarkListItem = connect(mapStateToProps)(BookmarkSummary)
export default BookmarkListItem

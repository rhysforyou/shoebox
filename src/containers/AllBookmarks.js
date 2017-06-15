// @flow
import { connect } from 'react-redux'
import { allBookmarksSelector } from '../selectors/bookmarks'
import BookmarkList from '../components/BookmarkList'

import type { Dispatch } from 'redux'
import type { State } from '../reducers/types'
import type { Action } from '../actions/types'
import type { Bookmark } from '../reducers/bookmarks'

type OwnProps = {}

type StateProps = {
  bookmarks: Bookmark[]
}

type DispatchProps = {}

const mapStateToProps = (state: State, props: OwnProps): StateProps => ({
  bookmarks: allBookmarksSelector(state)
})

const mapDispatchToProps = (
  dispatch: Dispatch<Action>,
  props: OwnProps
): DispatchProps => ({})

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkList)

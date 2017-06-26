// @flow
import { connect } from 'react-redux'
import { allBookmarksSelector } from '../../selectors/bookmarks'
import { AllBookmarks as AllBookmarksComponent } from '../../components/bookmarks'

import type { Dispatch } from 'redux'
import type { State } from '../../reducers/types'
import type { Action } from '../../actions/types'

type OwnProps = {}

type StateProps = {
  bookmarks: string[]
}

type DispatchProps = {}

const mapStateToProps = (state: State, props: OwnProps): StateProps => ({
  bookmarks: allBookmarksSelector(state)
})

const mapDispatchToProps = (
  dispatch: Dispatch<Action>,
  props: OwnProps
): DispatchProps => ({})

export const AllBookmarks = connect(mapStateToProps, mapDispatchToProps)(
  AllBookmarksComponent
)

export default AllBookmarks

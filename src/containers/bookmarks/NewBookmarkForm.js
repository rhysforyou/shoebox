// @flow
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { commitDraft, discardDraft } from '../../actions/drafts'
import { bookmarkListPath } from '../../lib/routeHelpers'
import BookmarkForm from '../../components/bookmarks/BookmarkForm'

import type { Dispatch } from 'redux'
import type { RouterHistory, Location, Match } from 'react-router'
import type { State } from '../../reducers/types'
import type { Action } from '../../actions/types'

type OwnProps = {
  draft: string,
  history: RouterHistory,
  location: Location,
  match: Match
}

type StateProps = {
  draftExists: boolean
}

type DispatchProps = {
  onSubmit: (e: Event) => any,
  onCancel: (e: Event) => any
}

const mapStateToProps = (state: State, props: OwnProps): StateProps => ({
  draftExists: state.drafts.has(props.draft)
})

const mapDispatchToProps = (
  dispatch: Dispatch<Action>,
  props: OwnProps
): DispatchProps => ({
  onSubmit: (e: Event) => {
    e.preventDefault()
    dispatch(commitDraft(props.draft))
    props.history.push(bookmarkListPath())
  },
  onCancel: (e: Event) => {
    dispatch(discardDraft(props.draft))
    props.history.push(bookmarkListPath())
  }
})

export const NewBookmarkForm = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BookmarkForm)
)

export default NewBookmarkForm

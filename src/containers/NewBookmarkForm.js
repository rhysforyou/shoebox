// @flow
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { commitDraft } from '../actions/drafts'
import BookmarkForm from '../components/bookmarks/BookmarkForm'

import type { Dispatch } from 'redux'
import type { RouterHistory } from 'react-router'
import type { State } from '../reducers/types'
import type { Action } from '../actions/types'

type OwnProps = {
  draft: string,
  history: RouterHistory
}

type StateProps = {
  draftExists: boolean
}

type DispatchProps = {
  onSubmit: (e: Event) => any
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
    props.history.push('/')
  }
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BookmarkForm)
)

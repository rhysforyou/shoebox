// @flow
import { connect } from 'react-redux'
import { commitDraft } from '../actions/drafts'
import BookmarkForm from '../components/BookmarkForm'

import type { Dispatch } from 'redux'
import type { State } from '../reducers/types'
import type { Action } from '../actions/types'

type OwnProps = {
  draft: string
}

type StateProps = {
  draftExists: boolean
}

type DispatchProps = {
  commitDraft: () => any
}

const mapStateToProps = (state: State, props: OwnProps): StateProps => ({
  draftExists: state.drafts.has(props.draft)
})

const mapDispatchToProps = (
  dispatch: Dispatch<Action>,
  props: OwnProps
): DispatchProps => ({
  commitDraft: () => dispatch(commitDraft(props.draft))
})

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkForm)

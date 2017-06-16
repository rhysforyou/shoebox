// @flow
import React from 'react'
import { connect } from 'react-redux'
import { createDraft, discardDraft } from '../actions/drafts'
import { draftExistsSelector } from '../selectors/drafts'
import NewBookmarkForm from './NewBookmarkForm'

import type { Dispatch } from 'redux'
import type { State } from '../reducers/types'
import type { Action } from '../actions/types'

type OwnProps = {
  draft: string
}

type StateProps = {
  shouldCreateDraft: boolean,
  showForm: boolean
}

type DispatchProps = {
  createDraft: () => Action,
  discardDraft: () => Action
}

export type Props = OwnProps & StateProps & DispatchProps

class NewBookmark extends React.PureComponent {
  props: Props

  componentWillMount() {
    if (this.props.shouldCreateDraft) {
      this.props.createDraft()
    }
  }

  componentWillUnmount() {
    this.props.discardDraft()
  }

  render() {
    const { showForm, draft } = this.props

    return (
      <section id="order-form">
        {showForm && <NewBookmarkForm draft={draft} />}
      </section>
    )
  }
}

const mapStateToProps = (state: State, props: OwnProps): StateProps => ({
  shouldCreateDraft: !draftExistsSelector(state, props),
  showForm: draftExistsSelector(state, props)
})

const mapDispatchToProps = (
  dispatch: Dispatch<Action>,
  props: OwnProps
): DispatchProps => ({
  createDraft: () =>
    dispatch(
      createDraft(props.draft, {
        site: '',
        title: '',
        url: '',
        description: '',
        image: ''
      })
    ),
  discardDraft: () => dispatch(discardDraft(props.draft))
})

const ConnectedNewBookmark = connect(mapStateToProps, mapDispatchToProps)(
  NewBookmark
)

// $FlowFixMe
ConnectedNewBookmark.defaultProps = {
  draft: 'newBookmark'
}

export default ConnectedNewBookmark

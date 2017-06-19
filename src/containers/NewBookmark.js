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
  draftExists: boolean,
  draftExists: boolean
}

type DispatchProps = {
  createDraft: () => Action,
  discardDraft: () => Action
}

export type Props = OwnProps & StateProps & DispatchProps

class NewBookmark extends React.PureComponent {
  props: Props

  componentWillMount() {
    if (!this.props.draftExists) {
      this.props.createDraft()
    }
  }

  render() {
    const { draftExists, draft } = this.props

    return (
      <section id="order-form">
        {draftExists && <NewBookmarkForm draft={draft} />}
      </section>
    )
  }
}

const mapStateToProps = (state: State, props: OwnProps): StateProps => ({
  draftExists: draftExistsSelector(state, props)
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

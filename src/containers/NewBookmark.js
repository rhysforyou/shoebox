// @flow
import React from 'react'
import { connect } from 'react-redux'
import { createDraft, discardDraft } from '../actions/drafts'
import { draftExistsSelector, draftEntitySelector } from '../selectors/drafts'
import NewBookmarkForm from './NewBookmarkForm'
import BookmarkSummary from '../components/bookmarks/BookmarkSummary'

import type { Dispatch } from 'redux'
import type { State } from '../reducers/types'
import type { Action } from '../actions/types'
import type { Bookmark } from '../reducers/bookmarks'

type OwnProps = {
  draft: string
}

type StateProps = {
  draftExists: boolean,
  bookmark: Bookmark
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
    const { draftExists, draft, bookmark } = this.props
    if (!draftExists) {
      return <span>Loading…</span>
    }

    return (
      <section id="order-form">
        <NewBookmarkForm draft={draft} />
        <h3>Preview</h3>
        <BookmarkSummary
          site={bookmark.site}
          title={bookmark.title}
          url={bookmark.url}
          description={bookmark.description}
          image={bookmark.image}
        />
      </section>
    )
  }
}

const mapStateToProps = (state: State, props: OwnProps): StateProps => ({
  draftExists: draftExistsSelector(state, props),
  bookmark: draftEntitySelector(state, props)
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

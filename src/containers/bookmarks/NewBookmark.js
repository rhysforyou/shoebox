// @flow
import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { createBookmarkDraft } from '../../actions/bookmarks'
import { discardDraft } from '../../actions/drafts'
import {
  draftExistsSelector,
  draftEntitySelector
} from '../../selectors/drafts'
import getParams from '../../lib/getParams'
import NewBookmarkForm from './NewBookmarkForm'
import BookmarkSummary from '../../components/bookmarks/BookmarkSummary'

import type { Dispatch } from 'redux'
import type { RouterHistory, Location, Match } from 'react-router'
import type { State } from '../../reducers/types'
import type { Action } from '../../actions/types'
import type { Bookmark } from '../../reducers/bookmarks'

type OwnProps = {
  draft: string,
  history: RouterHistory,
  location: Location,
  match: Match
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

class InternalNewBookmark extends React.PureComponent {
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
        <BookmarkSummary
          site={bookmark.site}
          title={bookmark.title}
          url={bookmark.url}
          description={bookmark.description}
          image={bookmark.image}
        />
        <NewBookmarkForm draft={draft} />
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
  createDraft: () => {
    const searchParams = getParams(props.location.search)
    return dispatch(createBookmarkDraft(props.draft, searchParams.url))
  },
  discardDraft: () => dispatch(discardDraft(props.draft))
})

export const NewBookmark = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(InternalNewBookmark)
)

// $FlowFixMe
NewBookmark.defaultProps = {
  draft: 'newBookmark'
}

export default NewBookmark

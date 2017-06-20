// @flow
import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { bookmarkAddPath } from '../../lib/routeHelpers'
import { BookmarkQuickAddForm } from '../../components/bookmarks'

type State = {
  url: string,
  submitted: boolean
}

type Props = {}

export const BookmarkQuickAdd = class extends Component {
  state: State
  props: Props

  constructor(props: Props) {
    super(props)

    this.state = {
      url: '',
      submitted: false
    }
  }

  handleChange = (value: string) => {
    this.setState({ url: value })
  }

  handleSubmit = (e: Event) => {
    e.preventDefault()
    this.setState({ submitted: true })
  }

  render() {
    if (this.state.submitted) {
      return <Redirect to={bookmarkAddPath(this.state.url)} />
    }

    return (
      <BookmarkQuickAddForm
        url={this.state.url}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      />
    )
  }
}

export default BookmarkQuickAdd

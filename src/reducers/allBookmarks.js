// @flow
import { List } from 'immutable'
import type { Action } from '../actions/types'

type State = List<string>

export default function allBookmarks(
  state: State = List(),
  action: Action
): State {
  switch (action.type) {
    case 'COMMIT_DRAFT':
      return state.push(action.id)
    default:
      return state
  }
}

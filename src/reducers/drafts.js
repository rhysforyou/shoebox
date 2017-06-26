// @flow
import { Map } from 'immutable'
import type { Action } from '../actions/types'
import Draft from '../lib/draft'

export type State = Map<string, Draft>

const draftEntities = (state: State = Map(), action: Action): State => {
  switch (action.type) {
    case 'CREATE_DRAFT':
      if (action.entityType !== 'bookmark') return state
      return state.set(
        action.name,
        new Draft({
          entityType: action.entityType,
          entity: Map(action.entity),
          dirty: Map(action.entity).mapEntries(([key, _value]) => [key, false])
        })
      )
    case 'UPDATE_DRAFT':
      return state
        .setIn([action.name, 'entity', action.field], action.value)
        .setIn([action.name, 'dirty', action.field], action.isUserAction)
    case 'COMMIT_DRAFT':
    case 'DISCARD_DRAFT':
      return state.delete(action.name)
    default:
      return state
  }
}

export default draftEntities

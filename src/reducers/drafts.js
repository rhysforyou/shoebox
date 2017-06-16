// @flow
import { Map, Record } from 'immutable'
import type { Action } from '../actions/types'

type DraftFields = {|
  entity: Map<string, any>,
  dirty: Map<string, boolean>
|}
type DraftRecord = Record<DraftFields> & DraftFields

export const Draft: Class<DraftRecord> = Record({
  entity: Map(),
  dirty: Map()
})

export type State = Map<string, Draft>

const draftEntities = (state: State = Map(), action: Action): State => {
  switch (action.type) {
    case 'CREATE_DRAFT':
      return state.set(
        action.name,
        new Draft({
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

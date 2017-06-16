// @flow
import type { Action, Thunk } from './types'

export function createDraft(name: string, entity: Object): Action {
  return {
    type: 'CREATE_DRAFT',
    name,
    entity
  }
}

export function updateDraft(
  name: string,
  field: string,
  value: ?any,
  isUserAction: boolean = true
): Action {
  return {
    type: 'UPDATE_DRAFT',
    name,
    field,
    value,
    isUserAction
  }
}

export function commitDraft(name: string): Thunk {
  return (dispatch, getState) => {
    const draft = getState().drafts.get(name)
    dispatch({
      type: 'COMMIT_DRAFT',
      name: name,
      entity: draft.get('entity').toJS()
    })
  }
}

export function discardDraft(name: string): Action {
  return { type: 'DISCARD_DRAFT', name }
}

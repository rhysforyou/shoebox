// @flow
import uuid from 'uuid'

import type { Action, Thunk, EntityType } from './types'

export function createDraft(
  name: string,
  entity: Object,
  entityType: EntityType
): Action {
  return {
    type: 'CREATE_DRAFT',
    name,
    entityType,
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
      id: uuid.v4(),
      entityType: draft.entityType,
      entity: draft.entity.toJS()
    })
  }
}

export function discardDraft(name: string): Action {
  return { type: 'DISCARD_DRAFT', name }
}

// @flow
import { createSelector } from 'reselect'

import type { State } from '../reducers/types'
import type { Draft } from '../lib/draft'

export const draftExistsSelector = (
  state: State,
  { draft }: { draft: string }
): boolean => state.drafts.has(draft)

export const currentDraftSelector = (
  state: State,
  { draft }: { draft: string }
): ?Draft => state.drafts.get(draft)

export const draftEntitySelector = createSelector(
  currentDraftSelector,
  (draft): Object => (draft ? draft.entity.toJS() : {})
)

export const fieldSelector = (
  state: State,
  { name }: { name: string }
): string => name

export const valueSelector = createSelector(
  currentDraftSelector,
  fieldSelector,
  (draft: ?Draft, field: string): ?any => draft && draft.entity.get(field)
)

export const dirtySelector = createSelector(
  currentDraftSelector,
  fieldSelector,
  (draft: ?Draft, field: string): boolean =>
    draft ? draft.dirty.get(field) || false : false
)

// @flow
import { createSelector } from 'reselect'

import type { State } from '../reducers/types'
import type { Draft } from '../reducers/drafts'

export const draftExistsSelector = (
  state: State,
  { draft }: { draft: string }
): boolean => state.drafts.has(draft)

export const currentDraftSelector = (
  state: State,
  { draft }: { draft: string }
): Draft => state.drafts.get(draft)

export const fieldSelector = (
  state: State,
  { name }: { name: string }
): string => name

export const valueSelector = createSelector(
  currentDraftSelector,
  fieldSelector,
  (draft: Draft, field: string): ?any => draft.entity.get(field)
)

export const dirtySelector = createSelector(
  currentDraftSelector,
  fieldSelector,
  (draft: Draft, field: string): boolean => draft.dirty.get(field) || false
)

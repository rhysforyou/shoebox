// @flow
import { Record, Map } from 'immutable'
import type { EntityType } from '../actions/types'

type DraftFields = {|
  entity: Map<string, any>,
  dirty: Map<string, boolean>,
  entityType: EntityType
|}
type DraftRecord = Record<DraftFields> & DraftFields

export const Draft: Class<DraftRecord> = Record(
  {
    entityType: '',
    entity: Map(),
    dirty: Map()
  },
  'Draft'
)

export default Draft

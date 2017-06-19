// @flow
import { Record, Map } from 'immutable'

type DraftFields = {|
  entity: Map<string, any>,
  dirty: Map<string, boolean>
|}
type DraftRecord = Record<DraftFields> & DraftFields

export const Draft: Class<DraftRecord> = Record(
  {
    entity: Map(),
    dirty: Map()
  },
  'Draft'
)

export default Draft

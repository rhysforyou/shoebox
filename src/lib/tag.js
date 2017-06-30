// @flow
import { Record, List } from 'immutable'

export type TagFields = {
  name: string,
  bookmarks: List<String>
}

type TagRecord = Record<TagFields> & TagFields

export const Tag: Class<TagRecord> = Record(
  {
    name: '',
    bookmarks: List()
  },
  'Tag'
)

export function tagsNamesFromString(tags: string): string[] {
  return tags
    .split(',')
    .map(tag => tag.trim().toLowerCase().replace(/[^a-z0-9-]/g, '-'))
}

export default Tag

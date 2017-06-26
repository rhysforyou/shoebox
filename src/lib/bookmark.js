// @flow
import { Record } from 'immutable'

export type BookmarkFields = {
  id: string,
  title: string,
  url: string,
  site: ?string,
  description: ?string,
  image: ?string
}

type BookmarkRecord = Record<BookmarkFields> & BookmarkFields

export const Bookmark: Class<BookmarkRecord> = Record(
  {
    id: '',
    title: '',
    url: '',
    site: null,
    description: null,
    image: null
  },
  'Bookmark'
)

export default Bookmark

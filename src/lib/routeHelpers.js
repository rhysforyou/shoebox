// @flow

// Bookmarks
export const bookmarkListPath = () => '/'
export const bookmarkAddPath = (url: ?string = null) => {
  if (url) {
    return `/add?url=${url}`
  }

  return '/add'
}
export const bookmarkShowPath = (id: string) => `/bookmark/${id}`

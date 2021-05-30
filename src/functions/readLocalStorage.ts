// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getShortedLink = () => {
  const data = localStorage.getItem('shorted_links')
  const shortedLinks = data ? JSON.parse(data) : []
  return shortedLinks
}
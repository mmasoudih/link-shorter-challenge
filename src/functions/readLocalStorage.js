export const getShortedLink = () => {
  let data = localStorage.getItem('shorted_links')
  let shortedLinks = data ? JSON.parse(data) : []
  return shortedLinks
}
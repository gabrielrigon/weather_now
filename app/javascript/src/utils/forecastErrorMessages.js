export const fromHttpStatusCode = code => {
  switch (code) {
    case 404:
      return 'City not found, change the search and try again.'
    case 424:
      return 'Failed to load info from weather service.'
    default:
      return 'Failed to load data... 😭'
  }
}
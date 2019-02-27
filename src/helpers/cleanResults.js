const cleanResults = (results) => {
  return results.map(result => {
    return {
      totalHits: result.total,
      pages: result.total_pages
    }
  })
}

export default cleanResults;
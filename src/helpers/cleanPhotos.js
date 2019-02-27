const cleanPhotos = (photosInfo) => {
  let count=0
  return photosInfo.map(photo => {
    count++
    return {
      description: photo.description,
      image: photo.links.download,
      id: count
    }
  })
}

export default cleanPhotos;
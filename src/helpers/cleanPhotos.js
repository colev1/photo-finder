const cleanPhotos = (photosInfo) => {
  return photosInfo.map(photo => {
    return {
      description: photo.description,
      image: photo.links.download
    }
  })
}

export default cleanPhotos;
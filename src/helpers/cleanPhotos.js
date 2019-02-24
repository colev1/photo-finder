const cleanPhotos = (photosInfo) => {
  return photosInfo.map(photo => {
    return {
      description: photo.description,
      image: photo.urls.regular
    }
  })
}

export default cleanPhotos;
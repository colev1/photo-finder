const cleanPhotos = (photosInfo) => {
  return photosInfo.map(photo => {
    console.log(photo)
    return {
      description: photo.description,
      image: photo.links.download
    }
  })
}

export default cleanPhotos;
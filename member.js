function skillsMember() {
  return new Promise((resolve, reject) => {
    axios
      .get(`${baseURL}/skills`)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

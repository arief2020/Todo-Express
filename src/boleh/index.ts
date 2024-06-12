const myPromise = new Promise((resolve, reject) => {
  const success = true

  if (success) {
    resolve('Success')
  } else {
    reject(new Error('Failure'))
  }
})

myPromise.then((result) => {
  return result
})

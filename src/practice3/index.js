export const getPoetry = () => {

  return fetch('https://v1.jinrishici.com/all.json')
    .then(response => response.json())
    .then(data => [data.origin, data.author, data.content])
    .then(result => Promise.resolve(result))
}

// export const  getPoetry = async () => {
//   const response = await fetch('https://v1.jinrishici.com/all.json')
//   const data = await response.json()
//   return [data.origin, data.author, data.content]
// }
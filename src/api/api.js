const host = 'http://192.168.1.88:8080'

export function getAllGames(){
  const url = `${host}/games`
  return fetch(url, { method: 'GET'})
    .then((response) => {
      //console.log(response)
      return response.json()
    })
    .catch((error) => console.log(error))
}

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

export function getGameById(gameId){
  const url = `${host}/games/${gameId}`
  return fetch(url, { method: 'GET'})
    .then((response) => response.json())
    .catch((error) => console.log(error))
}

export function putPlayer(gameId, player){
  //console.log(player)
  console.log(JSON.stringify(player))
  const url = `${host}/games/${gameId}/players`
  return fetch(url, {
    method: 'PUT',
    body: JSON.stringify(player),
    headers: { 'Content-type': 'application/json' }
  })
  .then((response) => {
    //console.log(response)
    return response.json()
  })
  .catch((error) => console.log(error))
}

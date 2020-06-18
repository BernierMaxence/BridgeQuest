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
  const url = `${host}/game/${gameId}`
  return fetch(url, { method: 'GET'})
    .then((response) => response.json())
    .catch((error) => console.log(error))
}

//export function getPlayerByName(gameId, playerName){
//   const url = `${host}/game/${gameId}/player/${playerName}`
//   return fetch(url, { method: 'GET' })
//     .then((response) => response.json())
//     .catch((error) => console.log(error))
// }


export function putPlayer(gameId, player){
  //console.log(player)
  //console.log(JSON.stringify(player))
  const url = `${host}/game/${gameId}/player`
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

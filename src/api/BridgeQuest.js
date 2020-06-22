const host = 'http://192.168.1.90:8080'

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

export function putSignature(gameId, playerId, scannedPlayer){
  const url = `${host}/game/${gameId}/player/${playerId}/signature`
  return fetch(url, {
    method: 'PUT',
    body: JSON.stringify(scannedPlayer),
    headers: { 'Content-type': 'application/json' }
  })
  .then((response) => response.json())
  .catch((error) => console.log(error))
}

export function getSignatures(gameId, playerId){
  console.log(gameId, playerId)
  const url = `${host}/game/${gameId}/player/${playerId}/signature`
  return fetch(url, { method: 'GET' })
  .then((response) => response.json())
  .catch((error) => console.log(error))
}

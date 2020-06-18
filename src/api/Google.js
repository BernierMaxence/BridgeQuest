// const host = "https://www.googleapis.com/geolocation/v1/geolocate?key="
// const key = "AIzaSyD4hXP9V-nMBfht1F2Q4nZcdf9BsaC8oq4"
//
// export function googleApi(){
//   const url = `${host}${key}`
//   return fetch(url, {
//     method: 'POST',
//     headers: {'content-type': 'application/json;'},
//     body: JSON.stringify({
//       "homeMobileCountryCode": 208,
//       "homeMobileNetworkCode": 0,
//       "radioType": "gsm",
//       "carrier": "",
//       "considerIp": "true",
//       "cellTowers": [ ],
//       "wifiAccessPoints": [ ]
//     }),
//   })
//   .then((response) => {
//     //console.log(response)
//     return response.json()
//   })
//   .catch((error) => console.log(error))
// }

const wss = "wss://arwa-server.glitch.me"
const connection = new WebSocket(wss)

connection.onopen = () => {
  connection.send('Arwa') 
}

connection.onerror = (error) => {
  console.log(`WebSocket error: ${error}`)
}

connection.onmessage = (e) => {
  console.log(e.data)
}
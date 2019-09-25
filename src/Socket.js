import React from 'react'
const wss = "wss://arwa-server.glitch.me"

class Socket extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      message: '',
      lading: true
    }
  }
  componentWillMount() {
    const connection = new WebSocket(wss)
    connection.onopen = () => {
      connection.send('Arwa')
      this.setState({
        loading: false
      })
    }
    
    connection.onmessage = (message) => {
      console.log(message)
      this.setState({
        message: message.data
      })
    }
  }
  render() {
    return <blockquote>
      
      {this.state.loading? 'Loading...':this.state.message}
    </blockquote>
  }
}

export default Socket
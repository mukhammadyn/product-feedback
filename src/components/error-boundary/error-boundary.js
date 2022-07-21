import { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super()
    this.state = {
      error: null,
      errorInfo: null
    }
    this.style = {
      "fontWeight": "bold",
      "color": "red",
      "padding": "20px",
      "backgroundColor": "white",
      "border": "3px solid red",
      "textAlign": "center"
    }
  }

  componentDidCatch(error, errorInfo) {

    this.setState({
      error,
      errorInfo
    })
  }

  render() {
    return !this.state.error ? this.props.children : <div style={this.style}>Oops!! something went wrong:(</div>
  }
}

export {ErrorBoundary}
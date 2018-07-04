import React from "react"
import {Button} from "antd"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={

    }
  }

  render(){
    return (
      <div>
        <div>
          <Button type="primary">sas</Button>
        </div>
        <div>{this.props.children}</div>
      </div>
    )
  }
}


export default App

import React from 'react'
import { connect } from 'react-redux'
import { addGun, removeGun, addGunAsync } from './index.redux'

const mapStatetoProps = (state)=>{
    return {num:state}
}
const actionCreators = { addGun, removeGun, addGunAsync }
// App = connect(mapStatetoProps, actionCreators)(App)
@connect(mapStatetoProps, actionCreators)

class App extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <h1>带{this.props.num}枪出巡</h1>
                <button onClick={this.props.addGun}>applyForGun</button>
                <button onClick={this.props.removeGun}>returnGun</button>
                <button onClick={this.props.addGunAsync}>applyForGun2s</button>
            </div>
        )
    }
}


export default App

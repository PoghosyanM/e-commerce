import React, { Component } from 'react'

export class ClassTesting extends Component {
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
        this.changeOpen = this.changeOpen.bind(this)
    }
    changeOpen() {
        this.setState({
            isOpen: !this.state.isOpen
        })
        console.log(this)
    }
    render() {
        const { isOpen } = this.state
        const obj = {
            name: 1,
            hello: function () {
                console.log(this)
            }
        }
        return (
            <div>
                <button onClick={obj.hello.bind(obj)}>{isOpen ? "Say Hello" : "Say Bye"}</button>
                <div>
                    {isOpen ? "Hello" : "Bye"}
                </div>
            </div>
        )
    }
}
export default ClassTesting

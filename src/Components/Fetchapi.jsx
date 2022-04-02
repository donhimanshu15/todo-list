import React, { Component } from 'react'

import axios from 'axios'

export default class Fetchapi extends Component {
    constructor(props) {
        super(props)
        this.state = {
            response: undefined
        }
    }
    componentDidMount = async () => {
        try {
            let data = await axios.get("https://jsonplaceholder.typicode.com/todos/")
            this.setState({
                response: data.data
            })
            console.log(this.state.response)

        }
        catch (error) {
            console.error("error", error);

        }
    }
    render() {
        return (
            <>
                <div>
                    {this?.state?.response?.map((item, id) => {
                        <div key={id}>
                            <h3>{item.title}</h3>

                        </div>
                    }
                    )}
                </div>
            </>
        )
    }
}

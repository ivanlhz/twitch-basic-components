import React from 'react'

class Tasks extends React.Component {
    render() {
        return(
            <div>
            { this.props.data ?
                <ul>
                {
                    this.props.data.map((elemento) => {
                        return <li>{elemento}</li>
                    })
                 }
                </ul>
                :
                <p>No data</p>
            }
            </div>
        )
    }
}

export default Tasks
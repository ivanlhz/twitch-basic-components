import React from 'react'

class Tasks extends React.Component {
    getClassName = (ele) => {
        if(ele.done) {
            return 'texto-tachado'
        }
        return ''
    }

    render() {
        return(
            <div>
            { this.props.data ?
                <ul>
                {
                    this.props.data.map((elemento) => {
                        return <li className={this.getClassName(elemento)} key={elemento.id}>
                            <span onClick={() => this.props.onDone(elemento.id)}>{elemento.value}</span>
                            <button onClick={() => this.props.onRemove(elemento)}>Borrar</button>
                            <button onClick={() => this.props.onEdit(elemento)}>Editar</button>
                        </li>
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
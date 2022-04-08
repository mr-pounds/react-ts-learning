import React, { Component } from 'react'

interface TaskInterface{
    id: number,
    name: string
}

interface StateInterface {
    tasks: Array<TaskInterface>,
    [key: string]: any
}

interface AppInterface {
    handleDelClick: (index:number) => void,
}

export default class App extends Component<any, StateInterface> implements AppInterface {
    inputRef = React.createRef<HTMLInputElement>()
    state = {
        tasks: [
            {id:1,name:'吃饭'},
            {id:2,name:'睡觉'},
            {id:3,name:'打豆豆'}
        ],
    }
  render() {
    return (
      <div>
          <input type="text" ref={this.inputRef}/>
          <button onClick={()=>this.addTask()}>添加</button>
          <ul>
              {
                  this.state.tasks.map((item, index)=>{
                      return <li key={item.id}>{item.name}
                            <button onClick={()=>this.handleDelClick2(index)}>删除</button>
                      </li>
                  })
              }
          </ul>
      </div>
    )
  }

  addTask(){
        this.setState({
            tasks:[...this.state.tasks,{id:this.state.tasks.length+1, name:(this.inputRef.current as HTMLInputElement).value}],
        });
        (this.inputRef.current as HTMLInputElement).value = ''
  }

  handleDelClick(index: number){
        console.log('删除', index)
  }

  handleDelClick2(index: number){
    
    let newList = [...this.state.tasks]
    newList.splice(index, 1)
    this.setState({
        tasks:newList
    })
    }
}

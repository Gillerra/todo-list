import { Component } from "react";
import check from './checked.png';


export class TodoList extends Component {
    state = {
        userInput: '',
        todoList: []
    }

    onChangeEvent(e) {
        this.setState({userInput: e})
    }
    
    addItem(input) {
        if (input === '') {
            alert("Пожалуйста, введите текст!")
        } else {
        let listArray = this.state.todoList;
        listArray.push(input);
        this.setState({todoList: listArray, userInput: '' })
    }
}

deleteItem() {
    let listArray = this.state.todoList;
    listArray = [];
    this.setState({todoList: listArray})
}

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    onFormSubmit(e) {
        e.preventDefault();
    }
    
    render() {
        return (
            
                <form onSubmit={this.onFormSubmit}>
            <div className="container">
                <input type='text'
                placeholder="Запишите здесь Ваши дела" 
                onChange={ (e) => {this.onChangeEvent(e.target.value)}}
                value = {this.state.userInput} />
            </div>
            <div>

            <div className="container">
                <button onClick={() => this.addItem(this.state.userInput)} className="btn-add">Добавить дело</button>
                </div>
            </div>

            <ul>
                {this.state.todoList.map((item, index) => (
                    <li onClick={this.crossedWord} key={index}><img src={check} alt='check' />{ item }</li>              
                    
                ))}
            </ul>

            <div className="container">
            <button onClick={() => this.deleteItem()} className="btn-delete">Удалить все</button>
            </div>
            </form>
        )
    }
}
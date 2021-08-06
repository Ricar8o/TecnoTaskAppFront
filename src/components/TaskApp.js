import React from 'react';
import { TaskList } from './TaskList';
import axios from 'axios';
import './Tasks.css'
import { Container } from 'react-bootstrap';
 
export class TaskApp extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            taskList: [],
        };
    }

    componentDidMount() {
        
        let thisAxios = axios.create({
            baseURL: 'http://localhost:8080/api/'
        });
    
        thisAxios.get('tasks')
        .then(response => response.data)
        .then(data => {
            let taskList = [];
            data.forEach(function (task) {
                taskList.push(
                    task
                )  
            });
            this.setState({taskList: taskList});
        })
        .catch(function (error) {
            console.log(error);
        });
      }

    render(){
        return(
            <div >
                <Container>
                    <TaskList taskList={this.state.taskList}/>
                </Container>
                
            </div>
        );
    }
}
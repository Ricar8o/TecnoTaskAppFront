import React from 'react';
import { TaskList } from './TaskList';
import axios from 'axios';
import './Tasks.css'
import { Container } from 'react-bootstrap';
import { Grid } from '@material-ui/core';
 
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
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={3}
                >
                    <Grid item >
                        <Container>
                            <TaskList taskList={this.state.taskList}/>
                        </Container>
                    </Grid>

                    <Grid item xs>
                        Other
                    </Grid>
                    
                </Grid>
            </div>
        );
    }
}
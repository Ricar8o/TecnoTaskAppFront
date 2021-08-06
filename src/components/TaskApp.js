import React from 'react';
import { TaskList } from './TaskList';
import axios from 'axios';
import './Tasks.css'
import { Badge, Card, Container } from 'react-bootstrap';
import { Grid } from '@material-ui/core';
import { NewTask } from './NewTask';
 
export class TaskApp extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            taskList: [],
            info: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeInfo = this.handleChangeInfo.bind(this);
    }

    componentDidMount() {
        
        this.axios = axios.create({
            baseURL: 'http://localhost:8080/api/'
        });
    
        this.axios.get('tasks')
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
            alert(error);
        });
      }

    handleChangeInfo(e){
        this.setState({info: e.target.value}); 
    }

    handleSubmit(event){
        
        let infoList = this.state.info.split(":");
        let item = "";
        let description = "";
        if (infoList.length === 1){
            description = infoList[0];
        }else{
            item = infoList[0];
            description = infoList[1];
        }
        

        this.axios.post('tasks', {
            type: item,
            description: description
        })
        .then(function (response) {
            console.log(response.data);
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
                    
                >
                    <Grid item xs={6}>
                        <Container>
                            <TaskList taskList={this.state.taskList}/>
                        </Container>
                    </Grid>

                    <Grid container direction="column"
                        justifyContent="space-between"
                        xs
                        >
                        <Grid item xs>
                            <NewTask handleChangeInfo={this.handleChangeInfo} handleSubmit={this.handleSubmit}/>
                        </Grid>
                        <Grid item xs>
                            <div className="badgesContainer">
                            <Card>
                                <Card.Body>
                                    <p>Define las tareas según la importancia con los siguientes items seguidos de la descripción.</p>
                                    <div>
                                    <span class="badge rounded-pill bg-primary">Primary</span>
                                    <span class="badge rounded-pill bg-secondary">Secondary</span>
                                    <span class="badge rounded-pill bg-success">Success</span>
                                    <span class="badge rounded-pill bg-danger">Danger</span>
                                    <span class="badge rounded-pill bg-warning text-dark">Warning</span>
                                    <span class="badge rounded-pill bg-info text-dark">Info</span>
                                    <span class="badge rounded-pill bg-light text-dark">Light</span>
                                    <span class="badge rounded-pill bg-dark">Dark</span>
                                    </div>
                                </Card.Body>
                            </Card>
                            </div>
                        </Grid>
                        
                    </Grid>
                    
                </Grid>
            </div>
        );
    }
}
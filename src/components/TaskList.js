import React from 'react';
import { Button } from 'react-bootstrap';
import { TrashFill } from 'react-bootstrap-icons';

export class TaskList extends React.Component{

    render(){
        const taskList = this.props.taskList.map((task, i) => {
            return (
                    <div  key={i} className="taskItem">
                        <div class={`alert alert-${task.type}`}  role="alert">
                            {task.description}
                            <div className="buttonContainer">
                                <button id={task.id}  className="delete-button" variant="primary" size="sm" onClick={this.props.handleDeleteTask}>
                                    <TrashFill/>
                                </button>
                            </div>
                            
                        </div>
                    </div>
                    
                
            );
        });
        return(
            <div className="task-container">
                <h1>Bienvenido a tu lista de tareas</h1>
                    
                {taskList}
                
                
            </div>
            
        );
    }
}
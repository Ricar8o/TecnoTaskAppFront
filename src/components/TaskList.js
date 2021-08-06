import React from 'react';
import { Button } from 'react-bootstrap';

export class TaskList extends React.Component{

    render(){
        const taskList = this.props.taskList.map((task, i) => {
            return (
                    <div className="taskItem">
                        <div id={task.id} class={`alert alert-${task.type}`}  role="alert">
                            {task.description}
                            {/* <Button class="btn" ></Button> */}
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
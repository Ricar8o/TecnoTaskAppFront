import React from 'react';
import { Form,Button } from 'react-bootstrap';

export class NewTask extends React.Component{

    render(){
        return(
            <div className="new-task" onSubmit={this.props.handleSubmit}>
                <h2>Tarea</h2>
                <Form >
                    <input onChange={this.props.handleChangeInfo} class="form-control" id="inputTask"  placeholder="Enter Task Info"/>
                    <Button type="submit" class="btn btn-primary ">Agregar</Button>
                 
                </Form>
                
            </div>
            
        );
    }
}
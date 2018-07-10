import React, { Component } from 'react';
import Task from './Task'

import TableHead from '@material-ui/core/TableHead';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

class List extends Component {
    render() {
        const headers =[{name:"S.No"},{name:"Name"},{name:"CreatedOn"},{name:"Actions"}];

        return (
            <div className="List">
            <Paper className='paper'>
      <Table className='table'>
        <TableHead>
          <TableRow>
            {headers.map((x,i)=>{
                return  <TableCell key ={i}>
                <h3 style ={{color:"#f3236e"}}>{x.name}</h3>
                </TableCell>
              })
            }
          </TableRow>
        </TableHead>
                {this.props.todos.map((todo ,index) => {
                    return <Task key={index} 
                    index ={index} 
                    todo ={todo}
                    handleClick = {this.props.handleClick}/>
                })}
                </Table>
                </Paper>
                </div>
        )

    }

}



export default List;

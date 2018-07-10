import React, { Component } from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
// import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import DeleteIcon from '@material-ui/icons/Delete';


class Task extends Component {
    render() {
        return (
            <TableBody>
                <TableRow key={this.props.index}>
                    <TableCell><strong>{this.props.index + 1}</strong></TableCell>
                    <TableCell><strong>{this.props.todo.value}</strong></TableCell>
                    <TableCell ><strong>{this.props.todo.date}</strong></TableCell>
                    <TableCell>
                        <Grid item xs={8}>
                            <DeleteIcon className='deleteIcon'  style={{cursor:"pointer"}}
                            onClick={() => this.props.handleClick(this.props.index)} />
                        </Grid>
                    </TableCell>
                </TableRow>
            </TableBody>
        );
    }
}

export default Task;

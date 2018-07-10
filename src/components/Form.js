import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
class Form extends Component {

    render() {
        const styles = {
            heading: {
                color: "#da00ff",
                fontStyle: "italic"
            }
        }
        return (
            <div className="Form">
                <h2 style={styles.heading}>Welcome to React App</h2>
                <form onSubmit={(evt) => this.props.handleSubmit(evt)}>
                    <TextField
                        id="name"
                        label="Name"
                        className="textField"
                        value={this.props.inputValue}
                        onChange={evt => this.props.handleChange(evt)}
                        margin="normal"
                    />&nbsp;
                    <Button onClick={(evt) => this.props.handleSubmit(evt)}
                        variant="contained" color="primary" className="button">
                        Add
                </Button>

                </form>
            </div>
        );
    }


}


export default Form; 

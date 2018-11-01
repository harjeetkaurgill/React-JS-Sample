import React from 'react';

export default class AddOptions extends React.Component {
    state = {
        error: undefined
    };

    handleAddOption = (e) => {
        e.preventDefault();
        const input1 = e.target.elements.input1.value.trim();
        const error = this.props.handleAdd(input1);
        this.setState(() => ({error}));

        if(!error) {
            e.target.elements.input1.value = '';
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption}>
        <           input className="add-option__input" type="text" name="input1"/>
                    <button className="button">Add Option</button>
                </form>
            </div>
        );
    }
}
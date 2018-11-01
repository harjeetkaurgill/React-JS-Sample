import React from 'react';
import ReactDOM from 'react-dom';
import AddOptions from './AddOptions';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionMOdal from './OptionModal';
import OptionModal from './OptionModal';

export default class Indecision extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };

    componentDidMount = () => {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);  
            if(options) {
                this.setState(() => ({options}));
            }
        } catch (e) {
            // do nothing.
        }
    }

    componentDidUpdate = (prevProps, prevState) => {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount = () => {
        console.log("componentWillUnmount");
    }

    handleDeleteOptions = () => {
        this.setState(() => ({options: [] }));
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({options: prevState.options.filter(option => optionToRemove !== option)
        }));
    }

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: option  
        }));
    }

    handleAdd = (option) => {
        if(!option) {
            return 'Enter valid value to add item.'
        } else if(this.state.options.indexOf(option) > -1) {
            return 'this option already exists.'
        } 
        this.setState((prevState) => ({options: prevState.options.concat(option)}));
    }

    handleClearSelectedOption = () => {
        this.setState(() => ({selectedOption: undefined }));
    }

    render () {
        const subTitle = 'Stay Strong!';

        return (
            <div>
                <Header subTitle={subTitle}/>
                <div className="container">
                    <Action hasOptions={this.state.options.length >0} 
                        handlePick={this.handlePick}/>
                    <div className="widget">
                        <Options options={this.state.options} 
                            handleDeleteOptions={this.handleDeleteOptions} 
                            handleDeleteOption={this.handleDeleteOption}/>
                        <AddOptions handleAdd={this.handleAdd}/>
                    </div>
                </div>
                <OptionModal selectedOption={this.state.selectedOption} handleClearSelectedOption={this.handleClearSelectedOption}/>
            </div>
        );
    }
}
class Indecision extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            options: []
        };
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
    }

    componentDidMount() {
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

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    handleDeleteOptions () {
        this.setState(() => ({options: [] }));
    }

    handleDeleteOption (optionToRemove) {
        this.setState((prevState) => ({options: prevState.options.filter(option => optionToRemove !== option)
        }));
    }

    handlePick () {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAdd (option) {
        if(!option) {
            return 'Enter valid value to add item.'
        } else if(this.state.options.indexOf(option) > -1) {
            return 'this option already exists.'
        } 
        this.setState((prevState) => ({options: prevState.options.concat(option)}));
    }

    render () {
        const subTitle = 'Stay Strong!'

        return (
            <div>
                <Header subTitle={subTitle}/>
                <Action hasOptions={this.state.options.length >0} handlePick={this.handlePick}/>
                <Options options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions} 
                    handleDeleteOption={this.handleDeleteOption}/>
                <AddOptions handleAdd={this.handleAdd}/>
            </div>
        );
    }
}

const Header = (props) => {
    return(
        <div>
            <h1>{props.title}</h1>
            {props.subTitle && <h2>{props.subTitle}</h2>}
        </div>
            
    );
};

Header.defaultProps = {
    title: 'Fitness App'
};

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick} disabled={!props.hasOptions}>
            What should I do?
            </button>
        </div>
    );
};

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started.</p>}
            {
                 props.options.map((option) => (
                 <Option 
                     key={option} 
                     optionText={option}
                     handleDeleteOption={props.handleDeleteOption}
                 />))
             }
        </div>
    );
};

const Option = (props) => {
    return (
        <div>
            Option: {props.optionText}
            <button onClick={ (e) => {
                props.handleDeleteOption(props.optionText)}
                }>Remove</button>
        </div>
    );
};

class AddOptions extends React.Component {
    constructor (props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }

    handleAddOption (e) {
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
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
        <           input type="text" name="input1"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<Indecision/>, document.getElementById('app1'));
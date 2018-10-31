class VisibilityToggle extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            visibility : false
        };
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    }

    handleToggleVisibility () {
        this.setState((prevState) => {
            return {
                visibility: !(prevState.visibility)
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
                {this.state.visibility && <p>hey, these are some details.</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app1'));


// let visibility = false;

// const onTogggle = () => {
//    visibility = !visibility;
//     render();
// };

// const render = () => {
// const template = (
//     <div>
//         <h1>Visibility Toggle</h1>
//         <button onClick={onTogggle}>{visibility ? 'Hide Details' : 'Show Details'}</button>
//         {visibility && <p>hey, these are some details.</p>}
//     </div>
// );
// ReactDOM.render(template, document.getElementById('app1'));
// };
// render();



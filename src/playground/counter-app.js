class Counter extends React.Component {
    constructor (props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);        
        this.handleReset = this.handleReset.bind(this);              
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        try {
            const stringCount = localStorage.getItem('count');
            const count = parseInt(stringCount, 10);  
            if(!isNaN(count)) {
                this.setState(() => ({count}));
            }
        } catch (e) {
            // do nothing.
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count) {
            const json = JSON.stringify(this.state.count);
            localStorage.setItem('count', json);
        }
    }

    handleAddOne () {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        }
    );
    }

    handleMinusOne () {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        }
    );
    }

    handleReset () {
        this.setState(() => {
            return {
                count: 0
            };
        }
    );
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter count={-10}/>, document.getElementById('app1'));


// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// };

// const minusOne = () => {
//     count--;
//     renderCounterApp();
// };

// const reset = () => {
//     count = 0;
//     renderCounterApp();
// };


// const template2 = (
//     <div>
//         <h1>Count: {count}</h1>
//         <button onClick={addOne} className="button">+1</button>
//         <button onClick={minusOne} className="button">-1</button>
//         <button onClick={reset} className="button">Reset</button>
//     </div>
// );
// const renderCounterApp = () => {
//     const template2 = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne} className="button">+1</button>
//             <button onClick={minusOne} className="button">-1</button>
//             <button onClick={reset} className="button">Reset</button>
//         </div>
//     );
//     ReactDOM.render(template2, document.getElementById('app1'));
// }
// renderCounterApp();
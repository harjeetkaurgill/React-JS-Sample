console.log("App.js is running.");
//JSX= JavaScript XML

const app = {
    title: 'Fitness App',
    subTitle: 'Stay Strong.',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderOptionsForm();
    }
}
const onRemoveAll = () => {
    app.options = [];
    renderOptionsForm();
}
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subTitle && <p>{app.subTitle}</p>}
        <p>{app.options.length >0 ? 'Here are your options.' : 'No Options.'}</p>
        <p>{app.options}</p>
        <button onClick={onRemoveAll}>Remove All</button>
        {
            [99,98,97,'mike',null,undefined,true]
        }
        <ol>
            <li>
                Item One
            </li>
            <li>
                Item Two
            </li>
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add Option</button>
        </form>
    </div>
);

const appRoot = document.getElementById('app1');

//const numbers = [55,56,568];

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option =  app.options[randomNum];
    alert(option);
    console.log(randomNum);
}
const renderOptionsForm = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subTitle && <p>{app.subTitle}</p>}
            <p>{app.options.length >0 ? 'Here are your options.' : 'No Options.'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I choose?</button>

            <button onClick={onRemoveAll}>Remove All</button>
            {/*
                numbers.map((number) => {
                return <p key={number}>Number: {number}</p>})
                */}
            
            <ol>
                {
                app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderOptionsForm();



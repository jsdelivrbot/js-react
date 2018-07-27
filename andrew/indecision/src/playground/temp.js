console.log('app.js is running');

// babel src/playground/es6-let-const.js --out-file=public/scripts/app.js --presets=env,react --watch
//JSX - javascript syntax extension

const app = {
    title: "Indecision",
    subtitle: "I'm gonna make it, I'm gonna make it for ya.",
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    
    const option = e.target.elements.option.value;

    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const onRemoveAll = () => {
    app.options = [];
    render();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById("app");

const render = () => {
    const template = (
            <div>
                <h1>{app.title}</h1>
                {app.subtitle && <p>{app.subtitle}</p>}
                <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
                <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do with my life?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
            {
                app.options.map((option) => {
                    return <li key={option}>Option: {option}</li>
                })
            }
            </ol>
            <form onSubmit={onFormSubmit}>
             <input type="text" name="option"/>
             <button>Add option</button>
            </form>
            </div>
        );

    ReactDOM.render(template, appRoot);
};

render();
console.log('app.js is running');

// playground

const user = { 
    name: 'Mike',
    age: 28
};

const quotes = {
    firstQ: 'Life is great',
    secondQ: 'What is this.'
};

function getLocation(secondQ) {
    if (secondQ) {
        return secondQ;
    } else {
        return 'Boink!';
    }
}

function hideQuote(firstQ) {
    if (firstQ) {
        return <li>Quote of the day 1: {firstQ} </li>;
    } else {
        //nothing will show up
        return undefined;
    }
}

const template = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {/* hide for underaged */}
        {(user.age && user.age >= 18) && <p>Info: {user.age}</p>}
        <ul>
            {hideQuote(quotes.firstQ)}
            <li>Quote of the day 2: {getLocation(quotes.secondQ)}</li>            
        </ul>
    </div>
);

const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
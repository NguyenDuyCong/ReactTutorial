// const name = "Nguyen Cong";
// const element = <h1>Hello, {name}!</h1>;

function formatName(user) {
    return user.firstName + " " + user.lastName;
}

function getGreeting(user){
    if(user){
        return <h1>Hello, {formatName(user)}!</h1>
    }
    else {
        return <h1>Hello, Stranger!</h1>
    }
}

const user = {
    firstName: "Cong",
    lastName: "Nguyen"
}

const element = getGreeting(user);

ReactDOM.render(
    element,
    document.getElementById("root"),
);
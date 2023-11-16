import "./App.css"
function App2(){
    return( <div className="App2">
        <Welcome2 name="Neooo" />
    </div>);
}
function Welcome2(props){
    return (
        <section>
            <h1>Hello, <span>{props.name}</span></h1>
        </section>
    )
}
export default App2;
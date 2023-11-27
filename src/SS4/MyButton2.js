function MyButton(){
    function handleClick(){
        alert('You F** Me!');
    }
    return(
        <button onClick={handleClick}>
            Click me
        </button>
    );
}
export default function MyApp(){
    return (
        <div>
            <h1>
                Welcome to MyApp
            </h1>
            <MyButton />
        </div>
    )
}
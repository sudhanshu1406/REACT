import Child2 from "./Child2";
function Child1(props){

    let {name,age} = props;
    // Destructuring

    return(
        <>
        <h1>child 1 comp {name} </h1>
        <h1>child 1 comp {age} </h1>
        <Child2  name={name}/>
        </>
    )
}

export default Child1
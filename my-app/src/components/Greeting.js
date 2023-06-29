const Greeting = (props) => {
    console.log(props)

    return (
        <>
            <h1>Greeting from {props.name} which is {props.type}</h1>
            <p>{props.children}</p>
        </>
    )
}

export default Greeting
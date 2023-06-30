const Greeting = (props) => {
    const { name, type, children } = props;
    
    return (
        <>
            <h1>Greeting from {name} which is {type}</h1>
            <p>{children}</p>
        </>
    )
}

export default Greeting
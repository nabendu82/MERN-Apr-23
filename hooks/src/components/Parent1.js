import Child1 from "./Child1"
import { useContext } from "react"
import { CountContext } from "../App"

const Parent1 = () => {
    const countContext = useContext(CountContext);

    return (
        <div>
            <h1>Parent1 - {countContext.count}</h1>
            <Child1 />
        </div>
    )
}
export default Parent1
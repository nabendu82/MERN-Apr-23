import { useDispatch, useSelector } from "react-redux"
import { buyChicken } from "../redux/chicken/chickenActions";

const HookChickenContainer = () => {
    const numOfChicken = useSelector(state => state.chicken.numOfChicken);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Number of Hook Chicken - {numOfChicken}</h2>
            <button onClick={() => dispatch(buyChicken())}>Buy Hook Chicken</button>
        </div>
    )
}
export default HookChickenContainer
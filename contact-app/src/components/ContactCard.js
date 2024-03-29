import { Link } from "react-router-dom";
import user from "../images/user.png"

const ContactCard = (props) => {
    const { id, name, email } = props.contact;

    return (
        <div className="item">
            <img className="ui avatar image" src={user} alt="user" />
            <div className="content">
                <Link to={{ pathname: `/contact/${id}`}}>
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </Link>
            </div>
            <i 
                className="trash alternate outline icon" 
                style={{ color: "red" }}
                onClick={() => props.clickHandler(id)}
            ></i>
        </div>
    )
}
export default ContactCard
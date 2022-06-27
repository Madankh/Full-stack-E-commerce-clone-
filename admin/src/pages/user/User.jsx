import "./user.css"
import { PermIdentity, CalendarToday , PhoneAndroid , LocationSearching , Mail ,Publish  } from "@material-ui/icons"
import { Link } from "react-router-dom"

export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                  <button className="userAddButton">Create </button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://media.istockphoto.com/photos/cute-boy-outdoors-picture-id1193994027?k=20&m=1193994027&s=612x612&w=0&h=Tym-uedS02jzDcDxPtBo9HSGV4JnCQlQ4y9We3oRr0c=" alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Suman khadka</span>
                            <span className="userShowUserJob">Buyer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                           <PermIdentity className="userShowIcon"/>
                           <span className="userShowInfoTitle">Inside</span>
                        </div>
                        <div className="userShowInfo">
                           <CalendarToday className="userShowIcon"/>
                           <span className="userShowInfoTitle">10.12.2000</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                           <PhoneAndroid className="userShowIcon"/>
                           <span className="userShowInfoTitle">+9779803157891</span>
                        </div>
                        <div className="userShowInfo">
                           <Mail className="userShowIcon"/>
                           <span className="userShowInfoTitle">Inside@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                           <LocationSearching className="userShowIcon"/>
                           <span className="userShowInfoTitle">New Work</span>
                        </div>
                        
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" placeholder="@suman" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Full name</label>
                                <input type="text" placeholder="Suman khadka" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="text" placeholder="Khadkasuman44@gmail.com" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input type="text" placeholder="9874563434" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input type="text" placeholder="Mahankal" className="userUpdateInput" />
                            </div>
                           
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="https://media.istockphoto.com/photos/cute-boy-outdoors-picture-id1193994027?k=20&m=1193994027&s=612x612&w=0&h=Tym-uedS02jzDcDxPtBo9HSGV4JnCQlQ4y9We3oRr0c=" alt="" className="userUpdateimagee" />
                                <label htmlFor="file"><Publish className="publi"/></label>
                                <input type="file" id="file" style={{display:"none"}} />
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

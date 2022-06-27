import React from 'react'
import "./topbar.css"
import { Settings, Notifications} from "@material-ui/icons"


export default function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbarwrapper">
                <div className="topleft">
                    <span className='logo'>Admin</span>
                </div>
                <div className="topright">
                    <div className="topbarIconContainer">
                      <Notifications/>
                      <span className='topIconBadge'>2</span>
                    </div>

                    <div className="topbarIconContainer">
                      <i class="fas fa-globe"></i>
                      <span className='topIconBadge'>2</span>
                    </div>

                    <div className="topbarIconContainer">
                      <Settings/>
                    </div>
                    <img src="https://images.unsplash.com/photo-1511511450040-677116ff389e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVkJTIwY2xvdGhlc3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="" className='avater' />
                </div>
            </div>
        </div>
    )
}

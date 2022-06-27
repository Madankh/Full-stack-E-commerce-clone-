import React from 'react'
import './sidebar.css'
import { LineStyle, Timeline, TrendingUp, Person, AttachMoney, AssessmentSharp , ChatBubbleOutlineOutlined , MailOutlineSharp , ForumOutlined , Work , BarChart , Assessment , Category} from "@material-ui/icons"
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <div className="sidebarmenu">
                    <h3 className='sidebarTitle'>Dashboard</h3>
                    <ul className='sidebarList'>
                        <Link to="/" className='link'>
                        <li className='sidebarListItem'>
                            <LineStyle className='sidebarIcon'/>
                            Home
                        </li>
                        </Link>
                        <li className='sidebarListItem'>
                            <Timeline className='sidebarIcon'/>
                            Analytics
                        </li>
                        <li className='sidebarListItem'>
                            <TrendingUp className='sidebarIcon'/>
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarmenu">
                    <h3 className='sidebarTitle'>Quick menu</h3>
                    <ul className='sidebarList'>
                        <Link to="/users" className="link">
                          <li className='sidebarListItem'>
                              <Person className='sidebarIcon'/>
                               Users
                          </li>
                        </Link>
                        <Link to="/products" className="link">
                            <li className='sidebarListItem'>
                                <Category className='sidebarIcon' />
                                Products
                            </li>

                        </Link>
                        <li className='sidebarListItem'>
                            <AttachMoney className='sidebarIcon'/>
                            Transactions
                        </li>
                        <li className='sidebarListItem'>
                            <AssessmentSharp className='sidebarIcon'/>
                            Reports
                        </li>
                    </ul>
                </div>

                <div className="sidebarmenu">
                    <h3 className='sidebarTitle'>Notification</h3>
                    <ul className='sidebarList'>
                        <li className='sidebarListItem'>
                            <MailOutlineSharp className='sidebarIcon'/>
                            Mail
                        </li>
                        <li className='sidebarListItem'>
                            <ForumOutlined className='sidebarIcon'/>
                            Feedback
                        </li>
                        <li className='sidebarListItem'>
                            <ChatBubbleOutlineOutlined className='sidebarIcon'/>
                            Messages
                        </li>
                    </ul>
                </div>

                <div className="sidebarmenu">
                    <h3 className='sidebarTitle'>Staff</h3>
                    <ul className='sidebarList'>
                        <li className='sidebarListItem'>
                            <Work className='sidebarIcon'/>
                            Manage
                        </li>
                        <li className='sidebarListItem'>
                            <BarChart className='sidebarIcon'/>
                            Analytics
                        </li>
                        <li className='sidebarListItem'>
                            <Assessment className='sidebarIcon'/>
                            Reports
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
    )
}

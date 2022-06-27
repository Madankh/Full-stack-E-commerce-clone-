import React from 'react'
import "./widgetSm.css"
import {Visibility} from "@material-ui/icons"

export default function WidgetSm() {
    return (
        <div className='widgetSm'>
            <span className='widgetSmTitle'>New Join Members</span>
            <ul className='widgetSmList'>
                <li className='widgetSmListItem'>
                    <img src="https://lh3.googleusercontent.com/OJwr6trYl-RNQFERYW8SjZYPfJYp1gReyrgYaKb-nqhrAO2QqNaQl9_8SG5xcxKp8Vsl7Hg9pRlKOx0nrLUMSrMX0KUhtgse0pFH=w600" alt="" />
                    <div className='widgetSmUser'>
                        <div className="widgetSmUsername">Suman khadka</div>
                        <div className="widgetSmJob">AR and ML developer</div>
                    </div>
                    <button className='widgetSmButton'>
                        <Visibility className='widgetSmIcon'/>
                        Display
                    </button>
                </li>
            
            </ul>
        </div>
    )
}

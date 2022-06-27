import React from 'react'
import FeaturedInfo from '../featuredinfo/FeaturedInfo'
import Chart from "../components/chart/Chart"
import {userData} from "./dummydata"
import "./home.css"
import WidgetSm from '../components/widgetSm/WidgetSm'
import WidgetLg from '../components/widgetLg/WidgetLg'

export default function Home() {
    return (
        <div className='home'>
            <FeaturedInfo/>
            <Chart data={userData} dataKey="Active User" grid title="User Analytics"/>
            <div className="homeWidge">
           <WidgetSm/>
           <WidgetLg/>
            </div>
        </div>
    )
}

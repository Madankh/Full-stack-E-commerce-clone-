import React from 'react'
import "./widgetLg.css"

export default function WidgetLg() {
    const Button = ({type}) =>{
        return <button className={"widgetLgButton " + type}>{type}</button>
    }
    return (
        <div className='widgetLg'>
            <h3 className='widgetLgTitle'>Latest Transactions</h3>
            <table className='widgetLgTable'>
                <tr className='widgetLgTr'>
                    <th className="widgetLgth">Customer</th>
                    <th className="widgetLgth">Date</th>
                    <th className="widgetLgth">Amount</th>
                    <th className="widgetLgth">Status</th>
                </tr>
                <tr className='widgetLgTr'>
                    <td className='widgetLgUser'>
                        <img src="https://media.istockphoto.com/photos/portrait-of-a-happy-latin-american-boy-smiling-picture-id1271410473?b=1&k=20&m=1271410473&s=170667a&w=0&h=Syh_Gz06gyUxjM1u5rSLrKbx3yJCMEzNrYIuwKH6X3U=" alt="" />
                        <span className='widgetLgName'>Madan khadka</span>
                    </td>
                    <td className='widgetLgDate'>2 jun 2021</td>
                    <td className='widgetLgAmount'>$122.00</td>
                    <td className='widgetLgStatus'>
                        <Button type="Approved" />
                    </td>
                </tr>
                <tr className='widgetLgTr'>
                    <td className='widgetLgUser'>
                        <img src="https://media.istockphoto.com/photos/portrait-of-a-happy-latin-american-boy-smiling-picture-id1271410473?b=1&k=20&m=1271410473&s=170667a&w=0&h=Syh_Gz06gyUxjM1u5rSLrKbx3yJCMEzNrYIuwKH6X3U=" alt="" />
                        <span className='widgetLgName'>Madan khadka</span>
                    </td>
                    <td className='widgetLgDate'>2 jun 2021</td>
                    <td className='widgetLgAmount'>$122.00</td>
                    <td className='widgetLgStatus'>
                        <Button type="Decline" />
                    </td>
                </tr>
                <tr className='widgetLgTr'>
                    <td className='widgetLgUser'>
                        <img src="https://media.istockphoto.com/photos/portrait-of-a-happy-latin-american-boy-smiling-picture-id1271410473?b=1&k=20&m=1271410473&s=170667a&w=0&h=Syh_Gz06gyUxjM1u5rSLrKbx3yJCMEzNrYIuwKH6X3U=" alt="" />
                        <span className='widgetLgName'>Madan khadka</span>
                    </td>
                    <td className='widgetLgDate'>2 jun 2021</td>
                    <td className='widgetLgAmount'>$122.00</td>
                    <td className='widgetLgStatus'>
                        <Button type="Pending" />
                    </td>
                </tr>
            </table>
        </div>
    )
}

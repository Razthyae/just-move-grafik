import React from "react";
import Timetable from 'react-timetable-events'




export class Display extends React.Component {


    render() {
        let timetable

        if (this.props.red === "red") {
            timetable = ""
        } else {
            timetable = <Timetable
                events={{
                    red: this.props.red,
                    blue: this.props.blue,
                    green: this.props.green,
                    yellow: this.props.yellow
                }}
                style={{ height: '850px' }}
            />
        }

        return (
            <div id="timetable">
                {timetable}
            </div>
        )
    }
}
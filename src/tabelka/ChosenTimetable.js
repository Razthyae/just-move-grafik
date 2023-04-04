import React from "react";
import './ChosenTimetable.css'
import { FetchFormat } from "./FetchFormat";
import { Display } from "./Display";


export class ChosenTimetable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            redFormatted: "red",
            blueFormatted: "blue",
            greenFormatted: "green",
            yellowFormatted: "yellow",
            selectedDay: ''
        }
        this.handleChange = this.handleChange.bind(this)

        this.dayChange = this.dayChange.bind(this)
    }



    handleChange(arr1, arr2, arr3, arr4) {
        const zaloguj = () => {
            this.setState({
                redFormatted: arr1,
                blueFormatted: arr2,
                greenFormatted: arr3,
                yellowFormatted: arr4
            })
            
        }
        setTimeout(zaloguj, 0)
        
    }

    dayChange() {
        console.log('zmienia')
        let selectedDay = document.querySelector('input[name="day"]:checked').value;
        this.setState({ selectedDay: selectedDay })
    }



    render() {


        return (
            <div id='timetableComponent'>


                <FetchFormat day={this.props.day} onChange={this.handleChange} selectedDay={this.state.selectedDay} dayChange={this.dayChange} />
                <Display red={this.state.redFormatted} blue={this.state.blueFormatted} green={this.state.greenFormatted} yellow={this.state.yellowFormatted} />


            </div>

        )
    }
}
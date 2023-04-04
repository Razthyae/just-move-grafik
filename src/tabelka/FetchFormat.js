import React from "react";
import { createClient } from '@supabase/supabase-js'
import './FetchFormat.css'

const supabaseUrl = 'https://cyyyiyorohhyfjtgxcvn.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5eXlpeW9yb2hoeWZqdGd4Y3ZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg4OTM1OTMsImV4cCI6MTk5NDQ2OTU5M30.5V2YVNcv6HF4mMPry3-Kd130HZA-BhG0SmDEk12OsVM'
const supabase = createClient(supabaseUrl, supabaseKey)



export class FetchFormat extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange() {
    let selector = document.getElementById("timetable") 
    selector.style.opacity = 0.5
    let chosenDay = this.props.selectedDay
    

      this.props.dayChange()

        
        let redArray
        let blueArray
        let greenArray
        let yellowArray
        let redFormatted = []
        let blueFormatted = []
        let greenFormatted = []
        let yellowFormatted = []

        const displayingTimetable = () => {
            console.log("Rozpoczynam budowanie tabeli...")
            //Formatting class object information
            const formatting = (obj) => {
                let preparedInstructors
                if (obj.instructor1 && obj.instructor2) {
                    preparedInstructors = `${obj.instructor1} i ${obj.instructor2}`
                } else {
                    preparedInstructors = obj.instructor1
                }
                let preparedData = (
                    <div className='classData'>
                        <p className='classHeader'>
                            {obj["class_time"].slice(0,5)} {obj["class_name"].toUpperCase()}
                        </p>
                        <p className="classInstructors">{preparedInstructors}    </p>
                        <p className="classLevel">{obj.class_level}</p>
                        <p className='classId'>ID zajęć: {obj.id}</p>
                        <p className="whiteSpace"></p>
                    </div>
                )
                console.log(preparedData)
                return preparedData
            }



            for (let i = 0; i < redArray.length; i++) {

                let classFormated =
                {
                    id: redArray[i].id,
                    name: formatting(redArray[i]),
                    type: "custom",
                    startTime: new Date(`2018-02-23T${redArray[i].class_time}`),
                    endTime: new Date(`2018-02-23T${redArray[i].class_finish}`)
                }
                console.log(classFormated)
                redFormatted.push(classFormated)
            }

            for (let i = 0; i < blueArray.length; i++) {

                let classFormated =
                {
                    id: blueArray[i].id,
                    name: formatting(blueArray[i]),
                    type: "custom",
                    startTime: new Date(`2018-02-23T${blueArray[i].class_time}`),
                    endTime: new Date(`2018-02-23T${blueArray[i].class_finish}`)
                }
                console.log(classFormated)
                blueFormatted.push(classFormated)
            }

            for (let i = 0; i < greenArray.length; i++) {

                let classFormated =
                {
                    id: greenArray[i].id,
                    name: formatting(greenArray[i]),
                    type: "custom",
                    startTime: new Date(`2018-02-23T${greenArray[i].class_time}`),
                    endTime: new Date(`2018-02-23T${greenArray[i].class_finish}`)
                }
                console.log(classFormated)
                greenFormatted.push(classFormated)
            }

            for (let i = 0; i < yellowArray.length; i++) {

                let classFormated =
                {
                    id: yellowArray[i].id,
                    name: formatting(yellowArray[i]),
                    type: "custom",
                    startTime: new Date(`2018-02-23T${yellowArray[i].class_time}`),
                    endTime: new Date(`2018-02-23T${yellowArray[i].class_finish}`)
                }
                console.log(classFormated)
                yellowFormatted.push(classFormated)
            }

        
        }






        const databaseRead = async () => {
            const log = () => {
                console.log("Fetching data...")
            }
            const handleSuccessRed = (resolvedValue) => {
                redArray = resolvedValue.data;
            }
            const handleSuccessBlue = (resolvedValue) => {
                blueArray = resolvedValue.data;
            }
            const handleSuccessGreen = (resolvedValue) => {
                greenArray = resolvedValue.data;
            }
            const handleSuccessYellow = (resolvedValue) => {
                yellowArray = resolvedValue.data;
            }
            await log
            await supabase
                .from('Just Move Classes')
                .select('*').eq('day', this.props.selectedDay).eq('room', 'red').then(handleSuccessRed)
            await    supabase
                .from('Just Move Classes')
                .select('*').eq('day', this.props.selectedDay).eq('room', 'blue').then(handleSuccessBlue)
            await      supabase
                .from('Just Move Classes')
                .select('*').eq('day', this.props.selectedDay).eq('room', 'green').then(handleSuccessGreen)
                await      supabase
                .from('Just Move Classes')
                .select('*').eq('day', this.props.selectedDay).eq('room', 'yellow').then(handleSuccessYellow)
            await displayingTimetable()
            await this.props.onChange(redFormatted, blueFormatted, greenFormatted, yellowFormatted)
            selector.style.opacity = 1
        }
        
        console.log(chosenDay)
        databaseRead(chosenDay)
/*
        switch (chosenDay) {
            case 'monday':
                databaseRead('monday')
                console.log("wybrany poniedzialek")
                break;
            case 'tuesday':
                databaseRead('tuesday')
                break;
            case 'wednesday':
                databaseRead('wednesday')
                console.log("wybrany sroda")
                break;
            case 'thursday':
                databaseRead('thursday')
                break;
            case 'friday':
                databaseRead('friday')
                break;


        }

       */


    }



    render() {

        return (
            <div>

                <fieldset id='dayChoice'>


                    <input type='radio' name='day' id='monday' value='monday' onClick={this.handleChange}></input>
                    <label for='monday' >PONIEDZIAŁEK</label>

                    <input type='radio' name='day' id='tuesday' value='tuesday' onClick={this.handleChange}></input>
                    <label for='tuesday' >WTOREK</label>

                    <input type='radio' name='day' id='wednesday' value='wednesday' onClick={this.handleChange}></input>
                    <label for='wednesday' >ŚRODA</label>

                    <input type='radio' name='day' id='thursday' value='thursday' onClick={this.handleChange}></input>
                    <label for='thursday' >CZWARTEK</label>

                    <input type='radio' name='day' id='friday' value='friday' onClick={this.handleChange}></input>
                    <label for='friday'>PIĄTEK</label>

                </fieldset>
    

               
            </div>

        )
    }
}
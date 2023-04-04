import React from "react";
import './ClassesForm.css';
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://cyyyiyorohhyfjtgxcvn.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5eXlpeW9yb2hoeWZqdGd4Y3ZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg4OTM1OTMsImV4cCI6MTk5NDQ2OTU5M30.5V2YVNcv6HF4mMPry3-Kd130HZA-BhG0SmDEk12OsVM"
const supabase = createClient(supabaseUrl, supabaseKey)





export class ClassesForm extends React.Component {



    submitClass(event) {
        event.preventDefault()


        async function newClassRegister() {
            let value1 = document.getElementById('class_name').value
            console.log(value1)
            let value2 = document.getElementById('day').value
            let value3 = document.getElementById('instructor1').value
            let value4 = document.getElementById('instructor2').value
            let value5 = document.getElementById('class_time').value
            let value6 = document.getElementById('class_finish').value
            let value7 = document.getElementById('class_level').value
            let value8 = document.getElementById('room').value

            await supabase
                .from('Just Move Classes')
                .insert([
                    {
                        class_name: `${value1}`,
                        day: `${value2}`,
                        instructor1: `${value3}`,
                        instructor2: `${value4}`,
                        class_time: `${value5}`,
                        class_finish: `${value6}`,
                        class_level: `${value7}`,
                        room: `${value8}`
                    }
                ])
        }
        newClassRegister()



        let prompt = document.getElementById('successAdd')
        let value = document.getElementById('class_name')
        prompt.innerHTML = `Zajęcia ${value.value} dodane!`
        let clear = () => {
            prompt.innerHTML = ''
        }
        setTimeout(clear, 3000)
    }

    clearValues() {
        let value1 = document.getElementById('class_name')
        let value2 = document.getElementById('day')
        let value3 = document.getElementById('instructor1')
        let value4 = document.getElementById('instructor2')
        let value5 = document.getElementById('class_time')
        let value6 = document.getElementById('class_finish')
        let value7 = document.getElementById('class_level')
        let value8 = document.getElementById('room')


        value1.value = ''
        value2.value = ''
        value3.value = ''
        value4.value = ''
        value5.value = ''
        value6.value = ''
        value7.value = ''
        value8.value = ''
    }

    deleteClass(event) {
        event.preventDefault()

        async function deleteRequest() {
            let value = document.getElementById("deleteInput").value
            console.log(value)
            await supabase
                .from('Just Move Classes')
                .delete()
                .eq('id', `${value}`)
        }

        deleteRequest()

        let prompt = document.getElementById('successAdd')
        prompt.innerHTML = `Zajęcia usunięte!`
        let clear = () => {
            prompt.innerHTML = ''
        }
        setTimeout(clear, 3000)
    }

    render() {


        return (
            <div id='form' className='adminForm'>
                <form className="deleteForm" onSubmit={this.deleteClass}>
                    <label for='deleteInput'>Usuń (id)</label>
                    <input id='deleteInput' type='number' required></input>
                    <div></div>
                    <input type='submit' value='Usuń' id='deleteButton'></input>
                </form>
                
                <div id='successAdd'></div>


                <form className="ClassesForm" onSubmit={this.submitClass}>
                    <label for='class_name'>Nazwa zajęć</label>
                    <input id='class_name' required></input>


                    <label for="day">Dzień:</label>
                    <select name="day" id="day" required>
                        <option value=""></option>
                        <option value="monday">Poniedziałek</option>
                        <option value="tuesday">Wtorek</option>
                        <option value="wednesday">Środa</option>
                        <option value="thursday">Czwartek</option>
                        <option value="friday">Piątek</option>
                    </select>

                    <label for="instructor1">Instruktor 1:</label>
                    <select name="instructor1" id="instructor1" required>
                        <option value=""></option>
                        <option value="Ada">Ada Przytarska</option>
                        <option value="Adam">Adam Niedziółka</option>
                        <option value="Agnieszka">Agnieszka Klotzer</option>
                        <option value="Akash">Akash Kumar</option>
                        <option value="Andrei">Andrei Nazarchuk</option>
                        <option value="Bráulia">Bráulia Chieta</option>
                        <option value="Izabela">Izabela Torres</option>
                        <option value="Jacek">Jacek Bosiacki</option>
                        <option value="Jacqueline">Jacqueline Laza Carrera</option>
                        <option value="Jakub">Jakub Chałupczak</option>
                        <option value="Joanna">Joanna Lisowska – Paszkiewicz</option>
                        <option value="Julia">Julia Novikova</option>
                        <option value="Julia">Julia Utig</option>
                        <option value="Justyna">Justyna Kasztelan</option>
                        <option value="Kamil">Kamil Mastalerz</option>
                        <option value="Krzysiek">Krzysiek Kriss Babieczko</option>
                        <option value="Kuba">Kuba Bąk</option>
                        <option value="Maciej">Maciej Blicharski</option>
                        <option value="Magdalena">Magdalena Mazij</option>
                        <option value="Marta">Marta Domagała</option>
                        <option value="Marta">Marta Falandys</option>
                        <option value="Martyna">Martyna Konowalska</option>
                        <option value="Marzena">Marzena Ulidowicz</option>
                        <option value="Kijek">Michał Kijowski</option>
                        <option value="Monika">Monika Flis</option>
                        <option value="Riccardo">Riccardo Recanati</option>
                        <option value="Swietlana">Swietlana Różycka</option>
                        <option value="Tomasz">Tomasz Szczurowski</option>
                        <option value="Wiola">Wiola Maszewska</option>
                        <option value="Yeranni">Yeranni Poll Hernandez</option>
                    </select>

                    <label for="instructor2">Instruktor 2:</label>
                    <select name="instructor2" id="instructor2">
                        <option value=""></option>
                        <option value="Ada">Ada Przytarska</option>
                        <option value="Adam">Adam Niedziółka</option>
                        <option value="Agnieszka">Agnieszka Klotzer</option>
                        <option value="Akash">Akash Kumar</option>
                        <option value="Andrei">Andrei Nazarchuk</option>
                        <option value="Bráulia">Bráulia Chieta</option>
                        <option value="Izabela">Izabela Torres</option>
                        <option value="Jacek">Jacek Bosiacki</option>
                        <option value="Jacqueline">Jacqueline Laza Carrera</option>
                        <option value="Jakub">Jakub Chałupczak</option>
                        <option value="Joanna">Joanna Lisowska – Paszkiewicz</option>
                        <option value="Julia">Julia Novikova</option>
                        <option value="Julia">Julia Utig</option>
                        <option value="Justyna">Justyna Kasztelan</option>
                        <option value="Kamil">Kamil Mastalerz</option>
                        <option value="Krzysiek">Krzysiek Kriss Babieczko</option>
                        <option value="Kuba">Kuba Bąk</option>
                        <option value="Maciej">Maciej Blicharski</option>
                        <option value="Magdalena">Magdalena Mazij</option>
                        <option value="Marta">Marta Domagała</option>
                        <option value="Marta">Marta Falandys</option>
                        <option value="Martyna">Martyna Konowalska</option>
                        <option value="Marzena">Marzena Ulidowicz</option>
                        <option value="Kijek">Michał Kijowski</option>
                        <option value="Monika">Monika Flis</option>
                        <option value="Riccardo">Riccardo Recanati</option>
                        <option value="Swietlana">Swietlana Różycka</option>
                        <option value="Tomasz">Tomasz Szczurowski</option>
                        <option value="Wiola">Wiola Maszewska</option>
                        <option value="Yeranni">Yeranni Poll Hernandez</option>
                    </select>



                    <label for="class_time">Godzina rozpoczęcia</label>
                    <input type='time' id='class_time' required></input>

                    <label for="class_finish">Godzina zakończenia</label>
                    <input type='time' id='class_finish' required></input>

                    <label for="class_level">Poziom:</label>
                    <input id='class_level' required></input>

                    <label for="room">Sala:</label>
                    <select name="room" id="room" required>
                        <option value=""></option>
                        <option value="red">Czerwona</option>
                        <option value="green">Zielona</option>
                        <option value="blue">Niebieska</option>
                        <option value="yellow">Żółta</option>

                    </select>
                    <div></div>


                    <input type='submit'></input>

                    <div></div>
                    <button id='clearValues' onClick={this.clearValues}>Wyczyść</button>

                </form>

            </div >
        )
    }
}
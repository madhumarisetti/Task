import React, { Component } from 'react'
import './index.css'

class Task extends Component {
    state = {
        data: {
            "Exam Fee": {
                "INDIA": {
                    "UG": {
                        "amount": 300
                    },
                    "PG": {
                        "amount": 400
                    }
                },
                "AMERICA": {
                    "UG": {
                        "amount": 600
                    },
                    "PG": {
                        "amount": 700
                    }
                },
                "ENGLAND": {
                    "UG": {
                        "amount": 800
                    }
                }
            },
            "Application Fee": {
                "INDIA": {
                    "UG": {
                        "amount": 500
                    }
                },
                "AUSTRALIA": {
                    "PG": {
                        "amount": 900
                    }
                }
            }
        },
        amount: 0,
        feeList: [],
        countriesList: [],
        courseList: [],
        levelList: [],
        fee: '',
        country: '',
        course: '',
        courses: '',
        level: ''
    }

    componentDidMount() {

        const { data } = this.state
        let feeList = Object.keys(data);
        this.setState({
            feeList
        })
    }

    
   
    updateCountries = (event) => {

        const { data } = this.state
        let countries = Object.keys(data[event.target.value])
        this.setState({
            countriesList: Object.values(countries),
            fee: event.target.value,
            courseList: [],
            country: '',
            course: '',
            level: '',
            amount: 0
        })
    }

    updateCourses = (event) => {
        const { data, fee } = this.state
        let courses = Object.keys(data[fee][event.target.value])
        this.setState({
            courseList: Object.values(courses),
            country: event.target.value,
            course: '',
            level: '',
            amount: 0
        })
    }


    updateAmount = (event) => {
        const { data, fee, country } = this.state
        console.log(data[fee][country])
        console.log(this.state)
        let amount = data[fee][country][event.target.value]['amount']
        console.log(amount)
        this.setState({
            amount,
            course: event.target.value
        })
    }

    render() {
        const {  countriesList, feeList, courseList, amount,
            country, course, fee } = this.state

        return (
            <div className='bg-color'>
                <h1 className='heading'>Free Structure for Courses in the University</h1>
                <select className='top-selecter' value={fee} onChange={this.updateCountries} >
                    <option hidden>Click to select Fee Type Frist</option>
                    {
                        feeList.map(i => <option>{i}</option>)
                    }
                </select>
                <div className='container'>
                    <div>
                        <p className='p-borders'>Country</p>
                        <p className='p-borders'>Courses</p>
                        <p className='p-borders'>level</p>
                    </div>
                    <div className='select-container'>

                        <select className='select-country' value={country} disabled={!fee} onChange={this.updateCourses}>

                            <option value="" disabled selected hidden>Select Country</option>
                            {
                                countriesList.map(i => <option key={i}>{i}</option>)
                            }
                        </select>
                        <br />
                        <select className='select-country' value={country} disabled={!fee} onChange={this.updateCourses}>

                            <option value="" disabled selected hidden>Select Course</option>
                             <option>Medical</option>
                             <option>Dental</option>
                             <option>ayur veda</option>

                         </select>
                        <br />
                        <select className='select-country' value={course} disabled={!country} onChange={this.updateAmount}>

                            <option value="" disabled selected hidden>Select Level</option>
                            {
                                Object.values(courseList).map(i => <option key={i}>{i}</option>)
                            }
                        </select>
                        <br />
                    </div>

                    <div className='free-data'>
                        <u >Fee</u>
                        <p className='text-content'>{amount}</p>

                    </div>



                </div>
            </div>


        )
    }
}

export default Task
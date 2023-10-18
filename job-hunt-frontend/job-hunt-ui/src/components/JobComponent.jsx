import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getAllTitles } from '../services/TitleService';
import { createJob, getJobById, updateJob } from '../services/JobService';
import { getAllPositions } from '../services/PositionService';
import { getAllStages } from '../services/StageService';
import {getAllLocations} from '../services/LocationService';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const JobComponent = () => {

    const [companyName, setCompanyName] = useState('');
    const [hirer, setHirer] = useState('');
    const [date, setDate] = useState('');

    const [titleId, setTitleId] = useState('')
    const [titles, setTitles] = useState([]);

    const [positionId, setPositionId] = useState('')
    const [positions, setPositions] = useState([])

    const [stageId, setStageId] = useState('')
    const [stages, setStages] = useState([])

    const [locationId, setLocationId] = useState('')
    const [locations, setLocations] = useState([])


    const {id} = useParams();

    const navigator = useNavigate();

    // titles
    useEffect(() => {
        getAllTitles().then((response) => {
            setTitles(response.data)
        }).catch((error) => {
            console.log(error);
        });
    }, [])

    // positions
    useEffect(() => {
        getAllPositions().then((response) => {
            setPositions(response.data)
        }).catch((err) => {
            console.error(err);
        });
    }, [])

    // stages
    useEffect(() => {
        getAllStages().then((response) => {
            setStages(response.data)
        }).catch((err) => {
            console.error(err);
        });
    }, [])

    // locations
    useEffect(() => {
        getAllLocations().then((response) => {
            setLocations(response.data)
        }).catch((err) => {
            console.error(err);
        });
    })


    function saveOrUpdateJob(e){
        e.preventDefault();
        const jobObj = {companyName, hirer, date, titleId, positionId, stageId, locationId}

        if(id) {
            updateJob(id, jobObj).then((response) => {
                navigator('/jobs')
            }).catch((err) => {
                console.log(err);
            });
        }
        else {
            createJob(jobObj).then((response) => {
                navigator('/jobs');
            }).catch((err) => {
                console.log(err);
            });
        }
    }

    useEffect(() => {
        getJobById(id).then((response) => {
            setCompanyName(response.data.companyName)
            setHirer(response.data.hirer)
            setDate(response.data.date)
            setTitleId(response.data.titleId)
            setPositionId(response.data.positionId)
            setStageId(response.data.stageId)
            setLocationId(response.data.locationId)
        }).catch((error) => {
            console.error(error);
        });
    }, [id])



    function pageTitle(){
        if(id){
            return <h2 className="text-center" style={{"color":"white"}}>Update Application</h2>
        }
        else {
            return <h2 className="text-center" style={{"color":"white"}}>New Application</h2>
        }
    }

  return (
    <div className="container">
        <br />
        <div className="row">
            <div className="card col-md-4 offset-md-4 accordion-body shadowt">
                <div className="card-header mb-3">
                    {pageTitle()}
                </div>

                <div className="card-body">
                    <form>
                        <div className="form-group mb-3">
                            <input
                                type='text'
                                className='form-control'
                                placeholder='enter company name'
                                name='companyName'
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                            >
                            </input>
                        </div>
                        <div className='form-group mb-3'>
                        <input
                                type='text'
                                className='form-control '
                                placeholder='enter hirer name'
                                name='hirer'
                                value={hirer}
                                onChange={(e) => setHirer(e.target.value)}
                            >
                            </input>
                        </div>
                        <div className="form-group mb-3">
                        <input
                                type='date'
                                className='form-control'
                                placeholder='when did you apply ?'
                                name='date'
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            >
                            </input>
                        </div>
                        {/*<DatePicker 
                            selected={date} 
                            onChange={(e) => setDate(e)} 
                            value={date} 
                            dateFormat={"yyyy/MM/dd"} 
                            className='form-control'  
                            name='date'
                            language="TR"
                            />
                        */}
                        {/** title dropdown */}
                        <div className="form-group mb-3">
                            <select
                                    className='form-control'
                                    value={titleId}
                                    onChange={(e) => setTitleId(e.target.value)}
                                >
                                <option value="select job title">select title</option>
                                {
                                    titles.map(title =>
                                        <option key={title.id} value={title.id}>
                                            {title.titleName}
                                        </option>

                                    )
                                }
                                </select>
                        </div>
                        
                        {/** position dropdown */}
                        <div className="form-group mb-3">
                            <select
                                className='form-control'
                                value={positionId}
                                onChange={(e) => setPositionId(e.target.value)}
                            >
                            <option value="select job position">select position</option>
                            {
                                positions.map(position => 
                                    <option key={position.id} value={position.id}>
                                        {position.positionName}
                                    </option>
                                )
                            }
                            </select>
                        </div>

                        {/** stage dropdown */}
                        <div className="form-group mb-3">
                            <select
                                    className='form-control'
                                    value={stageId}
                                    onChange={(e) => setStageId(e.target.value)}
                                >
                                <option value="select current stage">select stage</option>
                                {
                                    stages.map(stage =>
                                        <option key={stage.id} value={stage.id}>
                                            {stage.stageName}
                                        </option>

                                    )
                                }
                                </select>
                        </div>

                        {/** location dropdown */}
                        <div className="form-group mb-3">
                            <select
                                    className='form-control'
                                    value={locationId}
                                    onChange={(e) => setLocationId(e.target.value)}
                                >
                                <option value="select city">select city</option>
                                {
                                    locations.map(location =>
                                        <option key={location.id} value={location.id}>
                                            {location.locationName}
                                        </option>

                                    )
                                }
                                </select>
                        </div>
                        <button className="btn " onClick={saveOrUpdateJob} style={{background:'#2AB855', color:"white"}} >submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default JobComponent
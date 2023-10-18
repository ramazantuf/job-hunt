import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { addLocation, getLocation, updateLocation } from '../services/LocationService'

const LocationComponent = () => {

    const [locationName, setLocationName] = useState('')

    const {id} = useParams()

    const navigator = useNavigate()

    function pageTitle() {
        if(id){
            return <h2 className="text-center" style={{"color":"white"}}>Update Location</h2>
        }
        else {
            return <h2 className="text-center" style={{"color":"white"}}>Add Location</h2>
        }
    }

    function saveOrUpdateLocation(e){
        e.preventDefault()

        const location = {locationName}

        if(id){
            updateLocation(id, location).then((result) => {
                navigator('/locations')
            }).catch((err) => {
                console.error(err);
            });
        }
        else {
            addLocation(location).then((response) => {
                navigator('/locations')
            }).catch((error) => {
                console.error(error);
            });
        }
    }

    useEffect(() => {
        if(id) {
            getLocation(id).then((response) => {
                setLocationName(response.data.locationName)
            }).catch((err) => {
                console.error(err);
            });
        }
    }, [id])

   

  return (
    <div className="container">
        <br /> <br />
        <div className="row">
            <div className="card col-md-4 offset-md-4 offset-md-4 accordion-body shadowt">
            <div className="card-header  mb-3">
                    {pageTitle()}
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-group mb-3">
                            <input 
                                type="text" 
                                className='form-control'
                                placeholder='enter location'
                                name='locationName'
                                value={locationName}
                                onChange={(e) => setLocationName(e.target.value)}
                            />
                        </div>
                        <button className="btn" onClick={(e) => saveOrUpdateLocation(e)} style={{background:'#2AB855', color:"white"}}>submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LocationComponent
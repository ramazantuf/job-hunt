import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs'
import { deleteLocation, getAllLocations } from '../services/LocationService'

const ListLocationComponent = () => {

    const [locations, setLocations] = useState([])

    const { id } = useParams()
    const navigator = useNavigate()

    function listLocations() {
        getAllLocations().then((response) => {
            setLocations(response.data)
        }).catch((err) => {
            console.error(err);
        });
    }

    useEffect(() => {
        listLocations();
    }, [])

    function updateLocation(id){
        navigator(`/update-location/${id}`)
    }

    function removeLocation(id){
        deleteLocation(id).then((result) => {
            listLocations()
        }).catch((err) => {
            console.error(err);
        });
    }
  return (
    <div className="container">
        <h2 className='text-center font-monospace page-title'>List of Locations</h2>
        <div className="table-card offset-3">
        <Link to='/add-location' className='btn mb-2'>new location</Link>
            <div className="table-responsive tb-shadow">
            <table className="table table-hover table-striped table-bordered">
                <thead className="table-warning">
                    <tr>
                        <th>#</th>
                        <th>Location</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        locations.map(location => 
                        <tr key={location.id}>
                            <td>{location.id}</td>
                            <td>{location.locationName}</td>
                            <td>
                                    <button className='icon-btn' onClick={() => updateLocation(location.id)} ><BsFillPencilFill style={{color:'#29be2c'}}/></button>
                                    <button className='icon-btn' onClick={() => removeLocation(location.id)} ><BsFillTrashFill style={{color:'red'}}/></button>
                            </td>                                    

                        </tr>
                            )
                    }
                </tbody>
            </table>
            </div>
        </div>
    </div>
  )
}

export default ListLocationComponent
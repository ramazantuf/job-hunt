import React, { useEffect, useState } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa';
import { deletePosition, getAllPositions } from '../services/PositionService';
import { Link, useNavigate } from 'react-router-dom';

const ListPositionComponent = () => {

    const [positions, setPositions] = useState([])

    const navigator = useNavigate()

    useEffect(() => {
        listPositions();
    }, [])

    function listPositions(){
        getAllPositions().then((result) => {
            setPositions(result.data)
        }).catch((err) => {
            console.error(err);
        });
    }

    function removePosition(id){
        deletePosition(id).then((result) => {
            listPositions()
        }).catch((err) => {
            console.error(err);
        });
    }


    function updatePosition(id){
        console.log(id);
        navigator(`/update-position/${id}`)
    }

  return (
    <div className="container">
        <h2 className="text-center font-monospace page-title">List of Job Positions</h2>
        <div className="table-card offset-3">
        <Link to='/add-position' className='btn mb-2'>new position</Link>
            <div className="table-responsive tb-shadow">
            <table className="table table-striped table-bordered">
                <thead className="table-warning">
                    <tr>
                        <th>#</th>
                        <th>Position</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        positions.map(position => 
                            <tr key={position.id}>
                                <td>{position.id}</td>
                                <td>{position.positionName}</td>
                                <td>
                                    <button className='icon-btn' onClick={() => updatePosition(position.id)} ><FaEdit style={{color:'#29be2c'}}/></button>
                                    <button className='icon-btn' onClick={() => removePosition(position.id)} style={{marginLeft: '10px'}}><FaTrash style={{color:'red'}}/></button>
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

export default ListPositionComponent
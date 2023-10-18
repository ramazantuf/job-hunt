import React, { useEffect, useState } from 'react'
import { deleteStage, getAllStages } from '../services/StageService'
import { BsFillPencilFill,BsFillTrashFill } from 'react-icons/bs'
import { Link, useNavigate, useParams } from 'react-router-dom'

const ListStageComponent = () => {

    const [stages, setStages] = useState([])

    const navigator = useNavigate()

    const { id } = useParams()

    useEffect(() => {
        listStages();
    }, [])

    function listStages() {
        getAllStages().then((response) => {
            setStages(response.data)
        }).catch((err) => {
            console.error(err);
        });
    }

    function removeStage(id){
        deleteStage(id).then((response) => {
            listStages()
        }).catch((err) => {
            console.error(err);
        });
    }


    function updateStage(id){
        navigator(`/update-stage/${id}`)
    }


  return (
    <div className="container">
        <h2 className='text-center font-monospace page-title'>List of Stages</h2>
        <div className="table-card offset-3">
        <Link to='/add-stage' className='btn mb-2'>new stage</Link>
            <div className="table-responsive tb-shadow">
            <table className="table table-hover table-striped table-bordered">
                <thead className="table-warning">
                    <tr>
                        <th>#</th>
                        <th>Stage</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        stages.map(stage => 
                        <tr key={stage.id}>
                            <td>{stage.id}</td>
                            <td>{stage.stageName}</td>
                            <td>
                                    <button className='icon-btn' onClick={() => updateStage(stage.id)} ><BsFillPencilFill style={{color:'#29be2c'}}/></button>
                                    <button className='icon-btn' onClick={() => removeStage(stage.id)} style={{marginLeft: '10px'}}><BsFillTrashFill style={{color:'red'}}/></button>
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

export default ListStageComponent
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { addStage, getStage, updateStage } from '../services/StageService'

const StageComponent = () => {

    const [stageName, setStageName] = useState('')

    const {id} = useParams()

    const navigator = useNavigate()

    function pageTitle(){
        if(id){
            return <h2 className="text-center" style={{"color":"white"}}>Update Stage</h2>
        }
        else {
            return <h2 className="text-center" style={{"color":"white"}}>Add Stage</h2>
        }
    }

    function saveOrUpdateStage(e){
        e.preventDefault()

        const stage = {stageName}

        if(id){
            updateStage(id, stage).then((response) => {
                navigator('/stages')
            }).catch((err) => {
                console.error(err);
            });
        }
        else {
            addStage(stage).then((response) => {
                navigator('/stages')
            }).catch((err) => {
                console.error(err);
            });
        }
    }

    useEffect(() => {
        if(id){
            getStage(id).then((response) => {
                setStageName(response.data.stageName)
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
            <div className="card-header mb-3">
                    {pageTitle()}
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-group mb-3">
                            <input 
                                type="text" 
                                className='form-control'
                                placeholder='enter stage'
                                name='stageName'
                                value={stageName}
                                onChange={(e) => setStageName(e.target.value)}
                            />
                        </div>
                        <button className="btn" onClick={(e) => saveOrUpdateStage(e)} style={{background:'#2AB855', color:"white"}}>submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StageComponent
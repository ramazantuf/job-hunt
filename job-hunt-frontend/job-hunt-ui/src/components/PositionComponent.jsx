import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { addPosition, getPosition, updatePosition } from '../services/PositionService'

const PositionComponent = () => {

    const [positionName, setPositionName] = useState('')
    
    const navigator = useNavigate()

    const {id} = useParams()


    function saveOrUpdatePosition(e){
        e.preventDefault()

        const position = {positionName}

        if(id){
            updatePosition(id, position).then((result) => {
                navigator('/positions')
            }).catch((err) => {
                console.error(err);
            });
        }
        else {
            addPosition(position).then((result) => {
                console.log(result);
                navigator('/positions')
            }).catch((err) => {
                console.error(err);
            });
        }
    }

    useEffect(() => {
        if(id) {
            getPosition(id).then((result) => {
                setPositionName(result.data.positionName)
            }).catch((err) => {
                console.error(err);
            });
        }
    }, [id])

    function pageTitle(){
        if(id){
            return <h2 className="text-center" style={{"color":"white"}}>Update Position</h2>
        }
        else {
            return <h2 className="text-center" style={{"color":"white"}}>New Position</h2>
        }
    }

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
                                placeholder='enter position'
                                name='positionName'
                                value={positionName}
                                onChange={(e) => setPositionName(e.target.value)}
                            >
                            </input>
                        </div>
                        <button className="btn" onClick={(e) => saveOrUpdatePosition(e)} style={{background:'#2AB855', color:"white"}}>submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PositionComponent
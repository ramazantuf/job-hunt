import React, { useEffect, useState } from 'react'
import { addTitle, getTitle, updateTitle } from '../services/TitleService';
import { useNavigate, useParams } from 'react-router-dom';

const TitleComponent = () => {
    const [titleName, setTitleName] = useState('');
    const navigator = useNavigate();
    const {id} = useParams()
    

    function saveOrUpdateTitle(e){
        e.preventDefault();
        const t = {titleName}

        if(id){
            updateTitle(id, t).then((response) => {
                console.log(response);
                navigator('/titles')
            }).catch((err) => {
                console.error(err);
            });
        } else {
            addTitle(t).then((response) => {
                console.log(response);
                navigator('/titles')
            }).catch((err) => {
                console.error(err);
            });
        }
    }

    useEffect(() => {
        if(id){
            getTitle(id).then((response) => {
                console.log(response.data)
                setTitleName(response.data.titleName)
            }).catch((error) => {
                console.error(error)
            });
        }
    }, [id])

    function pageTitle(){
        if(id){
            return <h2 className="text-center" style={{"color":"white"}}>Update Title</h2>
        }
        else {
            return <h2 className="text-center" style={{"color":"white"}}>New Title</h2>
        }
    }

  return (
    <div className="container">
        <br /> <br />

        <div className="row">
            <div className="card col-md-4 offset-md-4 offset-md-4 accordion-body shadowt ">
                <div className="card-header mb-3" >
                    {pageTitle()}
                </div>

                <div className="card-body">
                    <form>
                        <div className="form-group mb-3">
                            <input 
                                type='text' 
                                className='form-control' 
                                placeholder='enter title' 
                                name='titleName' 
                                value={titleName} 
                                onChange={(e) => setTitleName(e.target.value)} 
                            >
                            </input>

                            
                        </div>
                        <button className="btn" onClick={(e) => saveOrUpdateTitle(e)} style={{background:'#2AB855', color:"white"}}>submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TitleComponent
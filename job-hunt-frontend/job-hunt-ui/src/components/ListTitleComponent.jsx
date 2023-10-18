import React, { useEffect, useState } from 'react'
import { deleteTitle, getAllTitles } from '../services/TitleService';
import { Link, useNavigate } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';

const ListTitleComponent = () => {

    const [titles, setTitles] = useState([]);

    useEffect(() => {
        listTitles();
    }, [])

    const navigator = useNavigate();
    
    function listTitles() {
        getAllTitles().then((response) => {
            setTitles(response.data)
        }).catch((error) => {
            console.error(error);
        });
    }

    function removeTitle(id){
        deleteTitle(id).then((response) => {
            listTitles();
        }).catch((error) => {
            console.error(error)
        });
    }

    // or <Link to={`/update-title/${title.id}`}><FaEdit style={{color:'#29be2c'}}/></Link>
    function updateTitle(id){
        navigator(`/update-title/${id}`)
    }

  return (
    <div className="container">
        <h2 className="text-center font-monospace page-title">List of Job Titles</h2>
        <div className='table-card offset-3'>
            <Link to='/add-title' className='btn mb-2'>new title</Link>
            <div className="table-responsive tb-shadow">
            <table className="table table-striped table-bordered">
                <thead className='table-warning'>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        titles.map(title =>
                            <tr key={title.id}>
                                <td>{title.id}</td>
                                <td>{title.titleName}</td>
                                
                                <td>
                                    
                                    <button className='icon-btn' onClick={() => updateTitle(title.id)} ><FaEdit style={{color:'#29be2c'}}/></button>
                                    <button className='icon-btn' onClick={() => removeTitle(title.id)} style={{marginLeft: '10px'}}><FaTrash style={{color:'red'}}/></button>
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

export default ListTitleComponent
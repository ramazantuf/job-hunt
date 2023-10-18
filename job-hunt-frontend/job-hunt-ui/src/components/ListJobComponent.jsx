import React, { useEffect, useState } from 'react'
import { deleteJob, getAllJobs } from '../services/JobService';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import {BsFillPencilFill, BsFillTrashFill} from 'react-icons/bs'


const ListJobComponent = () => {

    const [jobs, setJobs] = useState([]);

    const navigator = useNavigate();

   
    useEffect(() => {
        listAllJobs();
    }, [])

    function listAllJobs() {
        getAllJobs().then((response) => {
            setJobs(response.data);
        }).catch((err) => {
            console.log(err);
        });
    }


    function updateJob(id){
        navigator(`/edit-job/${id}`)
    }
    function removeJob(id){
        deleteJob(id).then((response) => {
            listAllJobs();
        }).catch((error) => {
            console.error(error);
        });
    }

  return (
    <div className='container'>
        <h2 className='text-center font-monospace page-title'>List of Job Applications</h2>
        <Link to='/add-job' className='btn mb-2'>new application</Link>
        <div className="table-responsive tb-shadow">
        <table className="table table-hover table-striped table-bordered">
            <thead className='table-warning'>
                <tr>
                    <th>#</th>
                    <th>Company</th>
                    <th>Hirer</th>
                    <th>Date</th>
                    <th>Title</th>
                    <th>Position</th>
                    <th>Stage</th>
                    <th>Location</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    jobs.map(job => 
                    <tr key={job.id}>
                        <td>{job.id}</td>
                        <td>{job.companyName}</td>
                        <td>{job.hirer}</td>
                        <td>{job.date}</td>
                        <td>{job.titleName}</td>
                        <td>{job.positionName}</td>
                        <td>{job.stageName}</td>
                        <td>{job.locationName}</td>
                        
                        <td>
                            <button className='icon-btn' onClick={() => updateJob(job.id)} ><BsFillPencilFill style={{color:'#29be2c'}}/></button>
                            <button className='icon-btn' onClick={() => removeJob(job.id)} style={{marginLeft: '10px'}}><BsFillTrashFill style={{color:'red'}}/></button>
                        </td>
                    </tr>
                        )
                }
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default ListJobComponent
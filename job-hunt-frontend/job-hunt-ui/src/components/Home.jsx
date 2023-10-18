import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
            <div className="banner-container">
                <div className="text-center" >
                    <h1 className="text-white">Welcome to Job Hunt</h1>
                    <h4 className="text-white">It's time to find a JOB !</h4>
                    <div className='home-d'>
                    <p><span className='home-span'>Job Hunt</span> is what you need to keep track on your job applications. <br /><br />
                    It's built with using the Spring Boot framework for the backend and React framework for the frontend. This project showcases my proficiency in building robust, end-to-end solutions in which I
                    designed and implemented RESTful APIs in Spring Boot, enabling efficient data retrieval and manupilation and
                    created a responsive and user-friendly frontend with React, providing a seamless user experience.

                    </p>
                    </div>
                    <button className='home-btn'><a href='/login'>login</a></button>
                    <button className='home-btn'><a href='/register'>register</a></button>
                </div>
                
            </div>
        </div>
  )
}

export default Home
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { Golovna } from './Components/Golovna/Golovna';
import { CoursesContainer } from './Components/Courses/CoursesContainer';
import { CourseContainer } from './Components/Courses/Course/CourseContainer';
import { ProfileContainer } from './Components/Profile/ProfileContainer';

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path='/*' element={<div></div>} />
                <Route path='/my' element={<ProfileContainer />} />
                <Route path='/my-courses' element={<CoursesContainer />} />
                <Route path='/cours/:id' element={<CourseContainer />} />
                <Route path='/authorization' element={<div></div>} />
                <Route path='/change' element={<div></div>} />
            </Routes>
        </div>
    );
}

export default App;

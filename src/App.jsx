import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { Golovna } from './Components/Golovna/Golovna';
import { CoursesContainer } from './Components/Courses/CoursesContainer';
import { CourseContainer } from './Components/Courses/Course/CourseContainer';
import { ProfileContainer } from './Components/Profile/ProfileContainer';
import { AuthorizationContainer } from './Components/Authorization/AuthorizationContainer';
import { Admin } from './Components/Admin/Admin';
import { AdminContainer } from './Components/Admin/AdminContainer';
import { AddUser } from './Components/Admin/Users/AddUser/AddUser';
import { ViewCourses } from './Components/Admin/Courses/ViewCourses/ViewCourses';
import { ViewCoursesContainer } from './Components/Admin/Courses/ViewCourses/ViewCoursesContainer';
import { AddCourse } from './Components/Admin/Courses/AddCourse/AddCourse';

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path='/*' element={<Golovna />} />
                <Route path='/my' element={<ProfileContainer />} />
                <Route path='/my-courses' element={<CoursesContainer />} />
                <Route path='/cours/:id' element={<CourseContainer />} />
                <Route path='/authorization' element={<AuthorizationContainer />} />
                <Route path='/change' element={<div></div>} />
                <Route path='/admin' element={<AdminContainer />} />
                <Route path='/postOneUser' element={<AddUser />} />
                <Route path='/getAllCourses' element={<ViewCoursesContainer />} />
                <Route path='/postOneCourses' element={<AddCourse />} />
            </Routes>
        </div>
    );
}

export default App;

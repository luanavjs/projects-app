import { BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import ProjectsPage from '../pages/ProjectsPage'
import ProjectPage from '../pages/ProjectPage'
import NotFoundPage from '../pages/NotFoundPage'
import UsersPage from '../pages/admin/UsersPage'
import AccountPage from '../pages/AccountPage'


export default function AppRouter() {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>
                    <Route path="/account" element={<AccountPage/>}/>
                    <Route path="/projects" element={<ProjectsPage/>}/>
                    <Route path="/project/:projectId" element={<ProjectPage/>}/>
                    <Route path="/admin/users" element={<UsersPage/>}/>

                    <Route path="*" element={NotFoundPage}/>

                </Routes>
            </BrowserRouter>
    )
}

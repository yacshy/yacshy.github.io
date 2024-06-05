import { Outlet } from 'react-router'
import './index.scss'

export default function App() {
    return (
        <main className='container'>
            <Outlet />
        </main>
    )
}

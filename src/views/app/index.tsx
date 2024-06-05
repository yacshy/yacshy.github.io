import { Outlet } from 'react-router'
import scss from './index.module.scss'

export default function App() {
    return (
        <main className={scss.container}>
            <Outlet />
        </main>
    )
}

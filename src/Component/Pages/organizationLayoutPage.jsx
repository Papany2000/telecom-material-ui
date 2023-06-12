import { NavLink, Outlet } from 'react-router-dom'


const OrganizationLayoutPage = () => {
    return (
        <div>
            <NavLink to="/exsel" style={
                {
                    top: '1.6rem',
                    left: '15rem',
                    position: 'relative',
                    color: 'rgb(25, 118, 210)'
                }
            }>Exsel</NavLink>
            <Outlet />

        </div>
    )
}

export default OrganizationLayoutPage
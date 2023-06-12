import { NavLink, Outlet } from 'react-router-dom'


const OrderLayoutPage = () => {
    return (
        <div>
            <NavLink to="/order/exsel" style={
                {
                    top: '1.6rem',
                    left: '10rem',
                    position: 'relative',
                    color: 'rgb(25, 118, 210)'
                }
            }>Exsel</NavLink>
            <Outlet />

        </div>
    )
}

export default OrderLayoutPage
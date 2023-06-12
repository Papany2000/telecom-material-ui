import { NavLink, Outlet } from 'react-router-dom'


const ContractLayoutPage = () => {
    return (
        <div>
            <NavLink to="/contract/exsel" style={
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

export default ContractLayoutPage;
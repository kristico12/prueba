// Dependencies
import React, { Fragment } from 'react';

//Components
import SideBar from '../components/sideBar.jsx';

//Routes
import { RouteMenu } from '../routes.jsx';

function Dasboard() {
    return (
        <Fragment>
            <div className="dasboard-container">
                <SideBar />
                {
                    RouteMenu
                }
            </div>
            <style jsx>{`
                .dasboard-container {
                    display: grid;
                    grid-template-columns: 25% 75%;
                }
            `}</style>
        </Fragment>
    )
}
export default Dasboard;
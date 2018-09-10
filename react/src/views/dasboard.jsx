// Dependencies
import React, { Fragment } from 'react';

//Components
import SideBar from '../components/sideBar.jsx';
import TopBar from '../components/topBar.jsx';

//Routes
import { RouteMenu } from '../routes.jsx';

function Dasboard() {
    return (
        <Fragment>
            <div className="dasboard-container">
                <SideBar />
                <main className="dasboard-content">
                    <TopBar />
                    <article className="dasboard-content-routes">
                        {
                            RouteMenu
                        }
                    </article>
                </main>
            </div>
            <style jsx>{`
                .dasboard-container {
                    display: grid;
                    grid-template-columns: 25% 75%;
                }
                .dasboard-content {
                    display: grid;
                    grid-template-rows: 3em auto;
                }
                .dasboard-content-routes {
                    padding: 1.5em 1em 0 1em;
                }
            `}</style>
        </Fragment>
    )
}
export default Dasboard;
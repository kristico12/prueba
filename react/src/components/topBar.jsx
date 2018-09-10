// Dependencies
import React, { Fragment } from 'react';

function TopBar() {
    return (
        <Fragment>
            <article className="topbar-container">
                <span className="title">Jesus Ricardo</span>
                <img src="static/img/user.png" />
            </article>
            <style jsx>{`
                .topbar-container {
                    display: Flex;
                    justify-content: space-evenly;
                    align-items: center;
                    background-color: #acacac;
                }
                .title {
                    font-family: 'Abel', sans-serif;
					text-transform: capitalize;
					font-size: 2em;
					color: white;
                }
            `}</style>
        </Fragment>
    )
}

export default TopBar;
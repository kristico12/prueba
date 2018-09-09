// Dependencies
import React, { Fragment } from 'react';
import { withRouter, Link } from 'react-router-dom';

function SideBar() {
	const links = [
		{name: 'Home', to:"/", img:"static/img/home.png"}
	]
    return (
		<Fragment>
			<div className="sidebar">
				<div className="title-flex">
					<img src="static/img/Books.png" alt="libros" />
					<span className="title-letter">Libros</span>
				</div>  			
				<nav className="nav-flex">
					<ul>
						{
							links.map((item) => (
								<li key={item.to}>
									<Link className="link" to={item.to} href={item.to}>
										<img src={item.img} alt="home" />
										<span>{item.name}</span>
									</Link>
								</li>
							))	
						}
					</ul>
				</nav>
				<footer className="footer-flex">
					<span className="footer-text">Desing by Jesus Ricardo</span>
				</footer>
			</div>
			<style jsx>{`
				.sidebar {
					height: 100vh;
					overflow-y: hidden;
					background-color: #acacac;
					box-shadow: 5px 0px #bdbdbd;

					display: grid;
					grid-template-rows:  12em 1fr 3em;
					grid-row-gap: 1.5em;
				}
				.title-flex {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: space-evenly;
				}
				.title-letter {
					font-family: 'Abel', sans-serif;
					text-transform: uppercase;
					font-size: 2em;
					color: white;
				}
				.nav-flex {
					overflow-y: auto;
				}
				nav :global(.link) {
					display: flex;
					justify-content: space-evenly;
					align-items: center;
					text-decoration: none;
					color: white;
				}
				nav :global(.link:hover) {
					background-color:  #cfcfcf;
				}
				.footer-flex {
					display: flex;
					justify-content: center;
					align-items: center;
				}
				.footer-text {
					color: white;
				}
			`}</style>
		</Fragment>
    )
}

export default withRouter(SideBar);
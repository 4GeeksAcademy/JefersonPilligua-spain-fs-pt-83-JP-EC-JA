import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar bg-body-tertiary">
			<div className="container-fluid px-5">
				<div className="col-3">
					<h1 className="h3">TIENDA</h1>
				</div>
				<div className="col-5">
					<form className="d-flex" role="search">
						<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
						<button className="btn btn-outline-success" type="submit">Search</button>
					</form>
				</div>
				<div className="col-4 text-end">
					<div class="btn-group px-3">
						<button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							CATEGORIA
						</button>
						<ul class="dropdown-menu">
							<li><a class="dropdown-item" href="#">Action</a></li>
							<li><a class="dropdown-item" href="#">Another action</a></li>
							<li><a class="dropdown-item" href="#">Something else here</a></li>
						</ul>
					</div>
					<i class="bi bi-person"></i>
					<i class="bi bi-heart"></i>
					<i class="bi bi-cart3"></i>
				</div>
			</div>
		</nav>
	);
};


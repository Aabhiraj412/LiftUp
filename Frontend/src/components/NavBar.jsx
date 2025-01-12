import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
	const navigate = useNavigate();

	const navigateTo = (path) => {
		navigate(path);
	};

	return (
		<div className="navbar bg-white/70 rounded-xl mt-5 mx-4 shadow-md">
			{/* Navbar Start */}
			<div className="navbar-start">
				{/* Mobile Dropdown Menu */}
				<div className="dropdown">
					<button
						tabIndex={0}
						className="btn btn-ghost lg:hidden bg-purple-300"
						aria-label="Open menu"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5 text-gray-700"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</button>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content bg-white/50 rounded-box z-[1] mt-3 w-52 p-2 shadow text-gray-600"
					>
						<li>
							<button onClick={() => navigateTo("/TrackSkills")}>
								Track Skills
							</button>
						</li>
						<li tabIndex={0}>
							<span>Develop New Skill</span>
							<ul className="p-2 bg-white/50">
								<li>
									<button onClick={() => navigateTo("/ExploreSkills")}>
										Explore Skills
									</button>
								</li>
								<li>
									<button onClick={() => navigateTo("/TestYourself")}>
										Test Yourself
									</button>
								</li>
							</ul>
						</li>
						<li>
							<button onClick={() => navigateTo("/Communities")}>Communities</button>
						</li>
					</ul>
				</div>
				<a
					className="btn btn-ghost text-3xl text-purple-500 font-[Diphylleia]"
					href="/"
				>
					LiftUP
				</a>
			</div>

			{/* Navbar Center */}
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1 text-gray-600">
					<li className="mx-4">
						<button
							className="hover:text-purple-600"
							onClick={() => navigateTo("/TrackSkills")}
						>
							Track Skills
						</button>
					</li>
					<li className="mx-4" tabIndex={0}>
						<details>
							<summary className="cursor-pointer hover:text-purple-600">
								Develop New Skill
							</summary>
							<ul className="p-2 bg-white/50">
								<li>
									<button onClick={() => navigateTo("/ExploreSkills")}>
										Explore Skills
									</button>
								</li>
								<li>
									<button onClick={() => navigateTo("/TestYourself")}>
										Test Yourself
									</button>
								</li>
							</ul>
						</details>
					</li>
					<li className="mx-4">
						<button
							className="hover:text-purple-600"
							onClick={() => navigateTo("/Communities")}
						>
							Communities
						</button>
					</li>
				</ul>
			</div>

			{/* Navbar End */}
			{/* Uncomment this section if needed */}
			{/* <div className="navbar-end">
				<button
					className="btn bg-purple-300 border-purple-800 border-2 shadow-lg text-gray-600 pr-4 hover:bg-purple-500"
					onClick={() => navigateTo("/Login")}
				>
					Login
				</button>
			</div> */}
		</div>
	);
};

export default NavBar;

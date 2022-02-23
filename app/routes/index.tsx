/*
 * ▓▓▓▓▓▓ IMPORT
 */

import React, { useState } from "react"
import Footer from "~/components/Footer"
import Floor from "~/components/layout/Floor"
import SimpleCard from "~/components/SimpleCard"
//

/*
 * ▓▓▓▓▓▓ SERVER-SIDE
 */



/*
 * ▓▓▓▓▓▓ CLIENT-SIDE
 */

export default function Index() {
	const [light, setLight] = useState(false)
	return (
		<Floor>
			<div className="container flex flex-col justify-center p-10 bg-slate-200">
				<SimpleCard/>
				<div className="my-5 shadow-lg alert alert-success">
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
						<span>Your purchase has been confirmed!</span>
					</div>
				</div>
				<form>
					<label>
						<input type="checkbox" className="form-checkbox"
							checked={light}  onChange={() => {
								setLight(i=>{
									const nextTheme = !i
									localStorage.setItem("theme",nextTheme ? "light" : "dark")
									return nextTheme
								})
							}}
						/>
						{light ? "Light" : "Dark"}
					</label>
				</form>

				<button data-toggle-theme="dark,light" data-act-class="ACTIVECLASS"></button>

				<select data-choose-theme>
					<option value="">Default</option>
					<option value="dark">Dark</option>
					<option value="pink">Pink</option>
				</select>

			</div>
			<Footer />
		</Floor>
	)
}

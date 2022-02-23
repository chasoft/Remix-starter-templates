/*
 * ▓▓▓▓▓▓ IMPORT
 */

import React from "react"

/*
 * ▓▓▓▓▓▓ SERVER-SIDE
 */

/*
 * ▓▓▓▓▓▓ CLIENT-SIDE
 */

export default function SimpleCard({className}:{className?: string}){
	return (
		<div className={`shadow-xl bg-base-100 card w-96 ${className ?? ""}`}>
			<figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
			<div className="card-body">
				<h2 className="card-title">Shoes!</h2>
				<p>If a dog chews shoes whose shoes does he choose?</p>
				<div className="justify-end card-actions">
					<button className="btn btn-primary">Buy Now</button>
				</div>
			</div>
		</div>
	)
}
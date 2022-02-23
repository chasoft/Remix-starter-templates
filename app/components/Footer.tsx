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

export default function Footer({className}:{className?: string}){
	return (
		<footer className={"container relative py-10 mt-auto " + className}>
			Your Copyright © 2022
		</footer>
	)
}
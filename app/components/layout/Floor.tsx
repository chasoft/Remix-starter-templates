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

export default function Floor({children, className}:{children: React.ReactNode, className?: string}){
	return (
		<div className={"flex flex-col w-screen min-h-screen " + className}>
			{children}
		</div>
	)
}
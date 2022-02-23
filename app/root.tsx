/*
 * ▓▓▓▓▓▓ IMPORT
 */

//Core
import React, { useEffect, useState } from "react"
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useCatch } from "remix"
import type { MetaFunction } from "remix"

//Styles
import styles from "./styles/app.css"

/*
 * ▓▓▓▓▓▓ SERVER-SIDE
 */

export function links() {
	return [{ rel: "stylesheet", href: styles }]
}

export const meta: MetaFunction = () => {
	return { title: "New Remix App" }
}

interface DocumentProps {
	children: React.ReactNode
	title?: string
}

function Document({ children, title }: DocumentProps) {
	const [theme, setTheme] = useState("light")
	// useEffect(() => {
	// 	const theme = localStorage.getItem("theme") ?? "light"
	// 	setTheme(theme)
	// }, [])
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width,initial-scale=1" />
				<Meta />
				{title ? <title>{title}</title> : null}
				<Links />
			</head>
			<body>
				<div data-theme={theme}>
					{children}
				</div>

				{/* <form>
					<label>
						<input type="checkbox" className="form-checkbox"
							checked={theme === "light"} onChange={() => {
								setTheme(i => {
									const nextTheme = (i === "light") ? "dark" : "light"
									// localStorage.setItem("theme", nextTheme)
									return nextTheme
								})
							}}
						/>
						{theme}
					</label>
				</form> */}
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body >
		</html >
	)
}

export function ErrorBoundary({ error }: { error: Error }) {
	return (
		<Document title="Uh-oh!">
			<div className="error-container">
				<h1>App Error</h1>
				<pre>
					<code>{error.message}</code>
				</pre>
			</div>
		</Document>
	)
}

export function CatchBoundary() {
	const caught = useCatch()
	return (
		<Document title={`${caught.status} ${caught.statusText}`}>
			<div className="error-container">
				<h1>{caught.status}</h1>
				<pre>
					<code>{JSON.stringify(caught.data, null, 2)}</code>
				</pre>
			</div>
		</Document>
	)
}

/*
 * ▓▓▓▓▓▓ CLIENT-SIDE
 */

export default function App() {
	return (
		<Document>
			<Outlet />
		</Document>
	)
}

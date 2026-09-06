import Link from "next/link";

export default function NotFound() {
	return (
			<div className="relative flex flex-col items-center justify-center px-6 text-center space-y-3 my-9">
				<h1 className="text-6xl font-light">404</h1>
				<p className="">Page not found</p>
				<div className="pb-5 my-9">
					<button className="text-2xl font-bold hover:text-lime-500 space-y-5">
						<Link href="/">Homepage</Link>
					</button>
				</div>
			</div>
	);
}
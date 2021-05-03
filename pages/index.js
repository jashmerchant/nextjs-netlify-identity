import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Netlify Authenticator</title>
				<link rel="icon" href="/Netlify.ico" />
				<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous" />
				<link rel="canonical" href="https://getbootstrap.com/docs/5.0/examples/headers/"></link>
				<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>

			</Head>
			<header class="p-3 bg-dark text-white">
				<div class="container">
					<div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
						<ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
							<li><a href="#" class="nav-link px-2 text-secondary">Home</a></li>
							<li><a href="#" class="nav-link px-2 text-white">Features</a></li>
							<li><a href="#" class="nav-link px-2 text-white">Pricing</a></li>
							<li><a href="#" class="nav-link px-2 text-white">FAQs</a></li>
							<li><a href="#" class="nav-link px-2 text-white">About</a></li>
						</ul>
						<div class="text-end">
							<button type="button" class="btn btn-outline-light me-2">Login</button>
							<button type="button" class="btn btn-warning">Sign-up</button>
						</div>
					</div>
				</div>
			</header>
			<main>
				<div class="container py-4">
					<div class="p-5 mb-4 bg-light rounded-3">
						<div class="container-fluid py-5">
							<h1 class="display-5 fw-bold">Custom jumbotron</h1>
							<p class="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
							<button class="btn btn-primary btn-lg" type="button">Example button</button>
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}

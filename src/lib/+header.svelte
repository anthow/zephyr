<script>
	let showMenu = false;

	function toggleNavbar() {
		showMenu = !showMenu;
	}
</script>

<header>
	<article class="container px-2 py-5			 mx-auto md:flex md:justify-between md:items-center">
		<section class="flex items-center justify-between">
			<a  href="/home"
				>
				<img src="https://res.cloudinary.com/liono/image/upload/v1673538982/Z%C3%A9phyr/logo_zephyr_itor5r.png
				"
				width="100"
				/>
			</a>

			<!-- Mobile menu button -->
			<div on:click={toggleNavbar} class="flex md:hidden">
				<button
					type="button"
					class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
				</button>
			</div>
		</section>

		<!-- Mobile Menu open: "block", Menu closed: "hidden" -->
		<section
			class="flex-col md:gap-20 gap-5 mt-8 space-y-4 md:flex md:justify-between md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 {showMenu
				? 'flex'
				: 'hidden'}"
		>
			<nav class="flex flex-col md:flex-row gap-5">
				<a class="text-gray-800 hover:text-blue-400" href="/">Accueil</a>
				<a class="text-gray-800 hover:text-blue-400" href="/asbl">L'Asbl</a>
				<a class="text-gray-800 hover:text-blue-400" href="/formations">Nos formations</a>
				<a class="text-gray-800 hover:text-blue-400" href="/activites">Nos Activités</a>
				<a class="text-gray-800 hover:text-blue-400" href="/actualites">Actualités</a>
				<a class="text-gray-800 hover:text-blue-400" href="/about">Contact</a>
			</nav>
			<div>
				<button class="bg-gray-600 px-4 py-2 rounded-lg text-white font-bold hover:bg-gray-500"
					>S'inscrire</button
				>
			</div>
			<div class="flex flex-row gap-2">
				<svg width="25" height="25" viewBox="0 0 24 24"
					><path
						fill="currentColor"
						d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
					/></svg
				>

				<svg width="25" height="25" viewBox="0 0 24 24"
					><path
						fill="currentColor"
						d="M16.6 14c-.2-.1-1.5-.7-1.7-.8c-.2-.1-.4-.1-.6.1c-.2.2-.6.8-.8 1c-.1.2-.3.2-.5.1c-.7-.3-1.4-.7-2-1.2c-.5-.5-1-1.1-1.4-1.7c-.1-.2 0-.4.1-.5c.1-.1.2-.3.4-.4c.1-.1.2-.3.2-.4c.1-.1.1-.3 0-.4c-.1-.1-.6-1.3-.8-1.8c-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3c-.6.6-.9 1.3-.9 2.1c.1.9.4 1.8 1 2.6c1.1 1.6 2.5 2.9 4.2 3.7c.5.2.9.4 1.4.5c.5.2 1 .2 1.6.1c.7-.1 1.3-.6 1.7-1.2c.2-.4.2-.8.1-1.2l-.4-.2m2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2c5.5 0 9.9-4.4 9.9-9.9c.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3c-1.5 0-2.9-.4-4.2-1.1l-.3-.2l-3.1.8l.8-3l-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4"
					/></svg
				>
			</div>
		</section>
	</article>
</header>

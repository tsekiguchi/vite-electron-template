export const prerender = true;

<script>
	import '../app.css';
	import { page } from '$app/stores';
	import PrimarySidebar from '$lib/PrimarySidebar.svelte';
	import SearchBar from '$lib/SearchBar.svelte';
	import { Search } from 'flowbite-svelte';
</script>

<div class="flex flex-row items-center justify-left w-screen h-screen">
	<PrimarySidebar />
	<div class="self-stretch inline-flex bg-gray-50 flex-col justify-top items-start inline-flex h-full w-full">
		<SearchBar />
		<slot />
	</div>
</div>


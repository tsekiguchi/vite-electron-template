<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, Input } from 'flowbite-svelte';
    import { SearchOutline } from 'flowbite-svelte-icons';

    let search = '';
  </script>


<div class="w-full bg-white flex flex-col items-center justify center border-b">
    <div class="px-8 py-6 flex justify-center items-center w-full">
        <div class="flex items-center justify-center gap-2.5 max-w-lg w-full">
            <Input type="text" placeholder="Search" class="w-full px-4 py-3.5 bg-gray-50 rounded-full shadow-md hover:shadow-lg transition duration-300 border border-gray-300"
            bind:value={search} on:input={() => console.log(search)} on:keydown={(e) => { if (e.key === 'Enter') { console.log('searching for', search); } }}>
                <SearchOutline class="w-4 h-4 text-gray-500" slot="left"></SearchOutline>
            </Input>
        </div>
    </div>
</div>
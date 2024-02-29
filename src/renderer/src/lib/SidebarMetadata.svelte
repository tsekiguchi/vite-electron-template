<script>
    import { fly } from 'svelte/transition';

    export let selectedItem = {
        'name': "SHUTTLE_01",
        'type': "directory",
        'mDate': "2021-10-01",
        'size': '835 MB',
        'fileHash': 'd0acf005c5802aba34b32a0bf8e3822f',
    }
</script>

<div in:fly={{ x: 475, duration: 400 }} out:fly={{ x: 200, duration: 200 }} class='flex flex-col gap-2 h-full w-[400px] bg-white shadow p-4'>
    <img src="/images/thumbnail.jpg" alt="Descriptive alt text" class="shadow-lg rounded-lg object-contain" />
    <h3 class='font-semibold text-lg'>{selectedItem.name}</h3>
    <h4 class='text-sm font-medium font-light text-gray-500'>File Information:</h4>
    <p class='text-xs font-light text-gray-500'>Size: {selectedItem.size}</p>
    <p class='text-xs font-light text-gray-500'>Last Modified: {selectedItem.mDate}</p>
</div>

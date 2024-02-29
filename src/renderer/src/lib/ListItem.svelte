<script>
    import { ChevronRightOutline, DotsVerticalOutline, FileOutline } from 'flowbite-svelte-icons';
    import { Button } from 'flowbite-svelte';
    import { createEventDispatcher } from 'svelte';

    function onClick() {
        dispatch('click', { item })
        isSelected = !isSelected;
        dispatch('change', { isSelected })
    }

    export let isSelected = false;
    export let item = {
        'name': "",
        'type': "",
        'mDate': "",
        'size': '',
        'children': []
    }

    const dispatch = createEventDispatcher();

</script>

<button on:click={() => onClick()} class='flex flex-row items-center justify-start gap-2 p-1 hover:bg-gray-100 rounded-lg {isSelected ? 'bg-gray-100' : ''}'>
    {#if item.type === 'directory'}
        <ChevronRightOutline class='w-5 h-5 text-gray-500' />
        <img src="/images/folder-icon-mac.png" alt="Descriptive alt text" class="shrink-0 object-contain h-5" />
    {:else}
        <div class='w-5 h-5'></div>
        <FileOutline class='w-5 h-5 text-gray-500' />
    {/if}
    <p class='justify-start grow text-left text-sm'>{item.name}</p>
    <div class='inline-flex shrink gap-6 items-center'>
        <p class='text-xs font-light text-gray-500'>{item.size}</p> 
        <p class='text-xs font-light text-gray-500'>{item.mDate}</p>
        <Button size='xs' class='!p-2 hover:bg-light transition duration-200' pill={true} color='light'>
            <DotsVerticalOutline class='w-3 h-3' />
        </Button>
    </div>
</button>
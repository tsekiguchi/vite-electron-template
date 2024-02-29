<script lang='ts'>
    import { Breadcrumb, BreadcrumbItem, Button, Input } from "flowbite-svelte";
    import { HomeSolid, FileOutline, ChevronRightSolid, ChevronDownSolid, SearchOutline, ChevronRightOutline, DotsVerticalOutline } from "flowbite-svelte-icons";
    import ListItem from "$lib/ListItem.svelte";
    import { onMount, onDestroy } from "svelte";


    import { writable } from "svelte/store";
	import SidebarMetadata from "$lib/SidebarMetadata.svelte";

    let selectedItem = writable<Item | undefined>(undefined);
    let listContainer: HTMLElement

    onMount(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (listContainer && !listContainer.contains(event.target as Node)) {
                selectedItem.set(undefined);
            }
        };

        window.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    });

    interface Item {
        name: string;
        type: string;
        mDate: string;
        size: string;
        fileHash: string;
        children: Item[];
    }

    let drive = {
        'name': "SHUTTLE_01",
        'type': "directory",
        'mDate': "2021-10-01",
        'size': '835 MB',
        'fileHash': 'd0acf005c5802aba34b32a0bf8e3822f',
        'children': [
            {
                'name': '00_PROJECTS',
                'type': 'directory',
                'mDate': "2021-10-01 1:15 PM",
                'size': '835 MB',
                'fileHash': 'd0acf005c5802aba34b32a0bf8e3822f',
                'children': []
            },
            {
                'name': '01_FOOTAGE',
                'type': 'directory',
                'mDate': "2021-10-01 1:15 PM",
                'size': '835 MB',
                'fileHash': 'd0acf005c5802aba34b32a0bf8e3822f',
                'children': []
            },
            {
                'name': 'Circle.png',
                'type': 'file',
                'mDate': "2021-10-01 1:15 PM",
                'size': '835 MB',
                'fileHash': 'd0acf005c5802aba34b32a0bf8e3822f',
                children: []
            },
        ]
    }

</script>

<div class='flex flex-row w-full h-full'>
    <div class='flex p-4 w-full'>
        <div class='flex flex-col w-full bg-white shadow rounded-lg px-3 py-6 gap-4'>
            <div class='flex flex-row items-center justify-start gap-2'>
                <img src="/images/generic-drive-icon-mac.webp" alt="Descriptive alt text" class="shrink-0 object-contain h-5" />
                <h3 class='text-md font-semibold'>{drive.name}</h3>
            </div>
            <Input size='sm' placeholder='Search {drive.name}...'>
                <SearchOutline slot='left' class='w-4 h-4 text-gray-500' />
            </Input>
            <Breadcrumb>
                <BreadcrumbItem href='/' home>{drive.name}</BreadcrumbItem>
            </Breadcrumb>
            <div class="border-t border-dotted border-gray-300 w-full"></div>
            <div class='flex flex-col gap-0.5' bind:this={listContainer}>
                {#each drive.children as item}
                    <ListItem {item} on:click={({ detail }) => selectedItem.set(detail.item)} isSelected={($selectedItem && item.name === $selectedItem.name)}/>
                {/each}
            </div>
        </div>   
    </div>
    {#if $selectedItem?.type === 'file'}
        <SidebarMetadata selectedItem={$selectedItem} />
    {/if}
</div>
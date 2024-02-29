<script>
    import DriveCard from "$lib/DriveCard.svelte";
    import { Tabs, TabItem, ButtonGroup, Button } from "flowbite-svelte";
    import { GridSolid, ListSolid } from "flowbite-svelte-icons";
	import { writable } from "svelte/store";

    const viewMode = writable("grid");
</script>

<div class="flex w-full px-6 py-4 bg-white rounded-lg shadow flex-col justify-start items-start gap-4 inline-flex">
    <div class="flex flex-row h-10 w-full justify-between items-center">
        <div class="text-black text-xl font-semibold ">Recent Drives</div>
        <ButtonGroup class="rounded-lg">
            <Button color={$viewMode === 'grid' ? "dark" : "light"} size="sm" variant="outline" class="flex items-center justify-center gap-1.5 transition duration=100" on:click={() => viewMode.set('grid')}>
                <GridSolid class="w-3 h-3" />
                <span class="text-xs font-medium">Grid View</span>
            </Button>
            <Button color={$viewMode === 'list' ? "dark" : "light"} size="sm" variant="outline" class="flex items-center justify-center gap-1.5 transition duration=100" on:click={() => viewMode.set('list')}>
                <ListSolid class="w-3 h-3" />
                <span class="text-xs font-medium">List View</span>
            </Button>
        </ButtonGroup>
    </div>
    <div class="border-t border-dotted border-gray-300 w-full"></div>
    {#if $viewMode === 'grid'}
        <div class="h-auto py-2 flex flex-wrap gap-4">
            <DriveCard />
            <DriveCard active={false}/>
            <DriveCard />
            <DriveCard />
            <DriveCard />
            <DriveCard />
        </div>
    {:else}
        <div class="flex flex-col w-full justify-start items-start gap-4">
            <DriveCard />
            <DriveCard />
            <DriveCard />
            <DriveCard />
        </div>
    {/if}
</div> 


<script>
    import { Button, Dropdown, DropdownItem } from 'flowbite-svelte';
    import { SearchOutline, CogOutline, ImageOutline, LinkOutline, FingerprintOutline, InfoCircleSolid, FolderArrowRightOutline, ArrowRightToBracketOutline, InfoCircleOutline } from 'flowbite-svelte-icons';

    export let drive = {
        name: 'Drive 1',
        size: '2TB',
        free: '568 GB',
        files: 1783,
        duplicates: 52
    }

    export let active = true;

    let activeUrl = $page.url.pathname;

    import {page} from '$app/stores';
    let activeClass = 'flex items-center p-2 text-base font-normal text-primary-900 bg-primary-200 dark:bg-primary-700 rounded-lg dark:text-white hover:bg-primary-100 dark:hover:bg-gray-700';
    
    
</script>

<div class="px-4 py-4 inline-flex items-center justify-start items-start gap-4 flex flex-row shadow rounded-lg">
    <img src="/images/generic-drive-icon-mac.webp" alt="Descriptive alt text" class="shrink-0 object-contain h-[75px]" />
    <div class="shrink-0 inline-flex flex-col justify-start items-start gap-2">
        <div class="justify-start items-center gap-2 inline-flex">
            <div class="w-3 h-3 { active ? 'bg-lime-300' : 'bg-gray-300' } rounded-full border border-gray-400"></div>
            <div class="text-gray-700 text-lg font-semibold leading-tight">{drive.name}</div>
        </div>
        <div class="flex-col justify-start items-start gap-1 flex">
            <div class="text-gray-500 text-xs font-normal font-['Inter'] leading-[18px]">Size: {drive.size} ({drive.free} Free)</div>
            <div class="text-gray-500 text-xs font-normal font-['Inter'] leading-[18px]">{drive.files} Files ({drive.duplicates} duplicates)</div>
        </div>
        <div class="justify-start items-start gap-3.5 inline-flex">
            <Button color="light" size="sm" variant="outline" class="flex items-center justify-center gap-1.5 rounded-md transition duration=100">
                <CogOutline class="w-3 h-3" />
                <span class="text-gray-700 text-xs font-medium">Actions</span>
            </Button>
            <Dropdown {activeUrl} {activeClass} placement='bottom-start'>
                <DropdownItem class="flex items-center justify-start gap-2 font-light">
                    <SearchOutline class="w-4 h-4 text-gray-500" />
                    Search this drive
                </DropdownItem>
                <DropdownItem class="flex items-center justify-start gap-2 font-light">
                    <ImageOutline class="w-4 h-4 text-gray-500" />
                    Generate Thumbnails
                </DropdownItem>
                <DropdownItem class="flex items-center justify-start gap-2 font-light">
                    <LinkOutline class="w-4 h-4 text-gray-500" />
                    Generate Link
                </DropdownItem>
                <DropdownItem class="flex items-center justify-start gap-2 font-light">
                    <FingerprintOutline class="w-4 h-4 text-gray-500" />
                    Connect to QR code
                </DropdownItem>
                <DropdownItem class="flex items-center justify-start gap-2 font-light">
                    <InfoCircleOutline class="w-4 h-4 text-gray-500" />
                    Drive info
                </DropdownItem>
                <DropdownItem class="flex items-center justify-start gap-2 font-light">
                    <FolderArrowRightOutline class="w-4 h-4 text-gray-500" />
                    Assign to project
                </DropdownItem>
                <DropdownItem class="flex items-center justify-start gap-2 font-light">
                    <ArrowRightToBracketOutline class="w-4 h-4 text-gray-500" />
                    Check out drive
                </DropdownItem>
            </Dropdown>
        </div>
    </div>
</div>
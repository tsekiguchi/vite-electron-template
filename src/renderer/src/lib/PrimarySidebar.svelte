<script>
	import { page } from '$app/stores';
	import {
		Input,
		Sidebar,
		Button,
		SidebarBrand,
		SidebarCta,
		SidebarDropdownItem,
		SidebarDropdownWrapper,
		SidebarGroup,
		SidebarItem,
		SidebarWrapper,
		Navbar,
		NavBrand,
		NavHamburger,
		NavUl,
		NavLi,
		Indicator,
		Avatar

	} from 'flowbite-svelte';
	import {
		UserAddSolid,
		SearchOutline,
		BookmarkSolid,
		ChartMixedSolid,
		UsersGroupSolid,
		HomeSolid,
		FolderOpenSolid,
		DatabaseSolid,
		VideoCameraSolid,
		CameraFotoSolid,
		FileMusicSolid,
		FileCopySolid,
		LinkSolid,
		CogSolid,
		LifeSaverSolid,
		FileCheckOutline,
		LinkOutline,
		ChartMixedOutline,
		UserAddOutline
	} from 'flowbite-svelte-icons';

	let activeUrl = $page.url.pathname;
	let activeClass =
		'flex items-center p-2 text-base font-normal text-primary-900 bg-primary-200 dark:bg-primary-700 rounded-lg dark:text-white hover:bg-primary-100 dark:hover:bg-gray-700';
	let nonActiveClass =
		'flex items-center p-2 text-base font-normal rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-green-700';

	let spanClass = 'flex-1 ms-3 whitespace-nowrap';

	let site = {
		name: '',
		href: '/dashboard',
		img: '/images/recallLogo.svg'
	};
</script>

<Sidebar {activeUrl} {activeClass} {nonActiveClass}>
	<SidebarWrapper class="bg-white px-4 flex flex-col justify-between border-r h-screen">
		<SidebarGroup class="content">
			<SidebarBrand {site} {spanClass}/>
			<SidebarGroup>
				<SidebarItem label="Dashboard" icon={HomeSolid} href='/dashboard'>
					<svelte:fragment slot="icon">
						<HomeSolid
							class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
						/>
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Team" icon={UsersGroupSolid}>
					<svelte:fragment slot="icon">
						<UsersGroupSolid
							class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
						/>
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Activity" icon={ChartMixedOutline}>
					<svelte:fragment slot="icon">
						<ChartMixedOutline
							class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
						/>
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Backup Index" icon={FileCopySolid}>
					<svelte:fragment slot="icon">
						<FileCopySolid
							class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
						/>
					</svelte:fragment>
				</SidebarItem>
			</SidebarGroup>
			<SidebarGroup border>
				<Input id="search" placeholder="Search Projects" size="sm" >
					<SearchOutline slot="left" class="w-4 h-4 text-gray-500 dark:text-gray-400" />
				</Input>
				<SidebarDropdownWrapper label="Projects" icon={FolderOpenSolid}>
					<SidebarDropdownItem label="Project 1" />
					<SidebarDropdownItem label="Project 2" />
					<SidebarDropdownItem label="Project 3" />
					<SidebarDropdownItem label="Project 4" />
				</SidebarDropdownWrapper>
			</SidebarGroup>
			<SidebarGroup border>
				<SidebarItem label="Drives" icon={DatabaseSolid} href='/drives'>
					<svelte:fragment slot="icon">
						<DatabaseSolid
							class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
						/>
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Videos" icon={VideoCameraSolid}>
					<svelte:fragment slot="icon">
						<VideoCameraSolid
							class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
						/>
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Photos" icon={CameraFotoSolid}>
					<svelte:fragment slot="icon">
						<CameraFotoSolid
							class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
						/>
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Audio" icon={FileMusicSolid}>
					<svelte:fragment slot="icon">
						<FileMusicSolid
							class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
						/>
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Tags" icon={BookmarkSolid}>
					<svelte:fragment slot="icon">
						<BookmarkSolid
							class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
						/>
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Duplicates" icon={FileCopySolid}>
					<svelte:fragment slot="icon">
						<FileCopySolid
							class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
						/>
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Links" icon={LinkOutline}>
					<svelte:fragment slot="icon">
						<LinkOutline
							class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
						/>
					</svelte:fragment>
				</SidebarItem>
			</SidebarGroup>
		</SidebarGroup>
		<SidebarGroup class="footer">
			<SidebarGroup>
				<SidebarItem label="Settings" icon={CogSolid}>
					<svelte:fragment slot="icon">
						<CogSolid
							class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
						/>
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Support" icon={LifeSaverSolid}>
					<svelte:fragment slot="icon">
						<LifeSaverSolid
							class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
						/>
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Invite Teammates" icon={UserAddSolid}>
					<svelte:fragment slot="icon">
						<UserAddSolid
							class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
						/>
					</svelte:fragment>
				</SidebarItem>
			</SidebarGroup>
			<SidebarGroup border>
				<SidebarItem label="Bonnie Green">
					<svelte:fragment slot="icon">
						<Avatar border size='sm' dot={{ color: 'green', placement: 'top-right'}} />
					</svelte:fragment>
				</SidebarItem>
			</SidebarGroup>
		</SidebarGroup>
	</SidebarWrapper>
</Sidebar>
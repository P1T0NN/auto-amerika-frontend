<script lang="ts">
	// COMPONENTS
	import { Button } from '@/shared/components/ui/button';
	import * as DropdownMenu from '@/shared/components/ui/dropdown-menu/index.js';
	import * as Avatar from '@/shared/components/ui/avatar/index.js';
    import LogoutButton from './logout-button.svelte';

    // UTILS
    import { getInitials } from '@/shared/utils/name-utils';

	// TYPES
	import type { typesUser } from '@/features/auth/types/auth-types';

	let { user }: { user: typesUser } = $props();
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger>
		<Button variant="ghost" class="h-auto p-2 hover:bg-zinc-800">
			<div class="flex items-center space-x-2">
				<Avatar.Root class="h-8 w-8">
					<Avatar.Fallback class="bg-primary text-primary-foreground text-sm font-medium">
						{getInitials(user.name)}
					</Avatar.Fallback>
				</Avatar.Root>
				<div class="flex flex-col items-start">
					<span class="text-sm font-medium text-white">{user.name}</span>
					<span class="text-xs text-zinc-400">{user.email}</span>
				</div>
			</div>
		</Button>
	</DropdownMenu.Trigger>

	<DropdownMenu.Content class="w-56 bg-zinc-900 border-zinc-800" align="start">
		<DropdownMenu.Label class="px-2 py-1.5">
			<div class="flex flex-col space-y-1">
				<p class="text-sm font-medium leading-none text-white">{user.name}</p>
				<p class="text-xs leading-none text-zinc-400">{user.email}</p>
			</div>
		</DropdownMenu.Label>
		<DropdownMenu.Group>
			<DropdownMenu.Item class="text-zinc-300 hover:text-white hover:bg-zinc-800">
				Profile
			</DropdownMenu.Item>

			<DropdownMenu.Item class="text-zinc-300 hover:text-white hover:bg-zinc-800">
				Settings
			</DropdownMenu.Item>

            <DropdownMenu.Item class="text-zinc-300 hover:text-white hover:bg-zinc-800">
                Privacy Policy
            </DropdownMenu.Item>

            <DropdownMenu.Item class="text-zinc-300 hover:text-white hover:bg-zinc-800">
                Terms of Use
            </DropdownMenu.Item>
		</DropdownMenu.Group>

		<DropdownMenu.Separator class="bg-zinc-800" />

		<LogoutButton />
	</DropdownMenu.Content>
</DropdownMenu.Root>

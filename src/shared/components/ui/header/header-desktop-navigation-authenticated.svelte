<script lang="ts">
	// CONFIG
	import { UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/config';

	// COMPONENTS
	import { Button } from '@/shared/components/ui/button';
	import * as DropdownMenu from '@/shared/components/ui/dropdown-menu/index.js';
	import * as Avatar from '@/shared/components/ui/avatar/index.js';

    // UTILS
    import { getInitials } from '@/shared/utils/name-utils';

	// TYPES
	import type { typesUser } from '@/features/auth/types/auth-types';
	import LogoutButton from './logout-button.svelte';

	let { user }: { user: typesUser } = $props();
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="ghost" class="h-auto p-2">
				<div class="flex items-center space-x-2">
					<Avatar.Root class="h-8 w-8">
						<Avatar.Fallback class="bg-primary text-primary-foreground text-sm font-medium">
							{getInitials(user.name)}
						</Avatar.Fallback>
					</Avatar.Root>
					<div class="flex flex-col items-start">
						<span class="text-sm font-medium">{user.name}</span>
						<span class="text-xs text-muted-foreground">{user.email}</span>
					</div>
				</div>
			</Button>
		{/snippet}
	</DropdownMenu.Trigger>

	<DropdownMenu.Content class="w-56" align="start">
		<DropdownMenu.Label class="px-2 py-1.5">
			<div class="flex flex-col space-y-1">
				<p class="text-sm font-medium leading-none">{user.name}</p>
				<p class="text-xs leading-none text-muted-foreground">{user.email}</p>
			</div>
		</DropdownMenu.Label>
		<DropdownMenu.Group>
			<DropdownMenu.Item>
				Profile
			</DropdownMenu.Item>

			<DropdownMenu.Item>
				Settings
			</DropdownMenu.Item>

            <DropdownMenu.Item>
                Privacy Policy
            </DropdownMenu.Item>

            <DropdownMenu.Item>
                Terms of Use
            </DropdownMenu.Item>
		</DropdownMenu.Group>

		<DropdownMenu.Separator />

		<LogoutButton />
	</DropdownMenu.Content>
</DropdownMenu.Root>

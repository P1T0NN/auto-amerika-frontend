<script lang="ts">
	// LIBRARIES
	import { m } from '@/shared/lib/paraglide/messages';

	// COMPONENTS
	import {
		Card,
		CardContent,
		CardDescription,
		CardHeader,
		CardTitle
	} from '@/shared/components/ui/card';
	import GoogleLoginButton from '@/shared/components/ui/google-login-button/google-login-button.svelte';
</script>

<Card class="border-0 bg-card/80 shadow-xl backdrop-blur-sm">
	<CardHeader class="pb-6 text-center">
		<CardTitle class="text-2xl font-bold text-foreground">{m['LoginPage.Card.title']()}</CardTitle>
		<CardDescription class="text-muted-foreground">
			{m['LoginPage.Card.description']()}
		</CardDescription>
	</CardHeader>

	<CardContent class="space-y-6">
		<GoogleLoginButton />

		<div class="text-center">
			<p class="text-xs text-muted-foreground">
				{m['LoginPage.Card.autoRegisterNote']()}
			</p>
		</div>
	</CardContent>
</Card>

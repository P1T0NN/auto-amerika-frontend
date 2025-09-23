<script lang="ts">
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
		<CardTitle class="text-2xl font-bold text-foreground">Dobrodošli</CardTitle>
		<CardDescription class="text-muted-foreground">
			Prijavite se ili kreirajte nalog da pristupite ekskluzivnim automobilima
		</CardDescription>
	</CardHeader>

	<CardContent class="space-y-6">
		<GoogleLoginButton />

		<div class="text-center">
			<p class="text-xs text-muted-foreground">
				Automatski ćete biti registrovani ako je ovo vaša prva prijava
			</p>
		</div>
	</CardContent>
</Card>

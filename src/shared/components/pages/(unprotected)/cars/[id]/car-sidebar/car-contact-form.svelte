<script lang="ts">
    // COMPONENTS
	import { Button } from '@/shared/components/ui/button';
	import {
		Card,
		CardContent,
		CardDescription,
		CardHeader,
		CardTitle
	} from '@/shared/components/ui/card';
	import { Input } from '@/shared/components/ui/input';
	import { Label } from '@/shared/components/ui/label';
	import { Textarea } from '@/shared/components/ui/textarea';

	let { carTitle = '' } = $props();

	let formData = $state({
		name: '',
		email: '',
		phone: '',
		message: `Zdravo, zanima me ${carTitle}. Molim vas pošaljite mi više informacija.`
	});

	let isSubmitting = $state(false);
	let isSubmitted = $state(false);

	async function handleSubmit(event: Event) {
		event.preventDefault();
		isSubmitting = true;

		// Simulate form submission
		await new Promise((resolve) => setTimeout(resolve, 1000));

		isSubmitted = true;
		isSubmitting = false;

		// Reset form after 3 seconds
		setTimeout(() => {
			isSubmitted = false;
			formData = {
				name: '',
				email: '',
				phone: '',
				message: `Zdravo, zanima me ${carTitle}. Molim vas pošaljite mi više informacija.`
			};
		}, 3000);
	}
</script>

<Card>
	<CardHeader>
		<CardTitle>Kontaktirajte nas</CardTitle>
		<CardDescription>Pošaljite nam poruku i odgovoriće vam u najkraćem roku</CardDescription>
	</CardHeader>
	<CardContent>
		{#if isSubmitted}
			<div class="py-8 text-center">
				<div
					class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100"
				>
					<svg class="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M5 13l4 4L19 7"
						/>
					</svg>
				</div>
				<h3 class="mb-2 text-lg font-semibold text-foreground">Poruka poslata!</h3>
				<p class="text-muted-foreground">Kontaktiraće vas naš tim u najkraćem roku.</p>
			</div>
		{:else}
			<form onsubmit={handleSubmit} class="space-y-4">
				<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
					<div>
						<Label for="name">Ime i prezime *</Label>
						<Input
							id="name"
							type="text"
							bind:value={formData.name}
							required
							placeholder="Vaše ime i prezime"
						/>
					</div>
					<div>
						<Label for="email">Email *</Label>
						<Input
							id="email"
							type="email"
							bind:value={formData.email}
							required
							placeholder="vas@email.com"
						/>
					</div>
				</div>

				<div>
					<Label for="phone">Telefon</Label>
					<Input id="phone" type="tel" bind:value={formData.phone} placeholder="+381 11 123 4567" />
				</div>

				<div>
					<Label for="message">Poruka *</Label>
					<Textarea
						id="message"
						bind:value={formData.message}
						required
						rows={4}
						placeholder="Vaša poruka..."
					/>
				</div>

				<Button type="submit" class="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
					{#if isSubmitting}
						<svg
							class="mr-3 -ml-1 h-5 w-5 animate-spin text-white"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
						>
							<circle
								class="opacity-25"
								cx="12"
								cy="12"
								r="10"
								stroke="currentColor"
								stroke-width="4"
							></circle>
							<path
								class="opacity-75"
								fill="currentColor"
								d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
							></path>
						</svg>
						Šalje se...
					{:else}
						Pošalji poruku
					{/if}
				</Button>
			</form>
		{/if}
	</CardContent>
</Card>

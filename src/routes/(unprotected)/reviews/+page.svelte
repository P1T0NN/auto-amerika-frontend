<script lang="ts">
    // LIBRARIES
    import { m } from '@/shared/lib/paraglide/messages';

    // COMPONENTS
	import { Button } from '@/shared/components/ui/button';
	import {
		Card,
		CardContent,
		CardHeader,
		CardTitle
	} from '@/shared/components/ui/card';
	import { Input } from '@/shared/components/ui/input';
	import StarRating from '@/shared/components/ui/star-rating/star-rating.svelte';
	import ReviewCard from '@/shared/components/ui/review-card/review-card.svelte';

	let searchQuery = $state('');
	let filterRating = $state('all');
	let sortBy = $state('newest');

	// Sample reviews data - in real app this would come from API/database
	const allReviews = [
		{
			id: 1,
			customerName: 'Marko Stojanović',
			rating: 5,
			date: '2024-01-15',
			carPurchased: 'Ford Mustang GT 2023',
			verified: true,
			comment:
				'Fantastično iskustvo! Tim AutoAmerike je bio profesionalan od početka do kraja. Vozilo je stiglo u savršenom stanju, tačno onako kako je opisano. Preporučujem svima koji razmišljaju o uvozu automobila iz Amerike.',
			pros: ['Transparentne cene', 'Brza komunikacija', 'Kvalitetno vozilo', 'Kompletna usluga'],
			helpful: 12
		},
		{
			id: 2,
			customerName: 'Ana Petrović',
			rating: 5,
			date: '2024-01-10',
			carPurchased: 'Tesla Model S 2023',
			verified: true,
			comment:
				'Uvoz Tesle je prošao bez ikakvih problema. Marko i njegov tim su me vodili kroz svaki korak procesa. Vozilo je stiglo pre očekivanog roka i u odličnom stanju. Definitivno ću ponovo koristiti njihove usluge.',
			pros: ['Stručnost tima', 'Brzina isporuke', 'Odličan kvalitet', 'Podrška nakon kupovine'],
			helpful: 8
		},
		{
			id: 3,
			customerName: 'Stefan Nikolić',
			rating: 4,
			date: '2024-01-05',
			carPurchased: 'Chevrolet Camaro SS 2022',
			verified: true,
			comment:
				'Vrlo zadovoljan kupovinom. Jedina manja zamerka je što je proces trajao nešto duže od očekivanog, ali je na kraju sve prošlo kako treba. Vozilo je u odličnom stanju i cena je bila fer.',
			pros: ['Fer cene', 'Kvalitetno vozilo', 'Dobra komunikacija'],
			helpful: 5
		},
		{
			id: 4,
			customerName: 'Milica Jovanović',
			rating: 5,
			date: '2023-12-28',
			carPurchased: 'Jeep Grand Cherokee 2022',
			verified: true,
			comment:
				'Odličan izbor za uvoz vozila! AutoAmerika je pokazala visok nivo profesionalizma. Sve informacije su bile tačne, a vozilo je stiglo u roku. Preporučujem bez rezerve.',
			pros: ['Profesionalizam', 'Tačnost informacija', 'Poštovanje rokova'],
			helpful: 15
		},
		{
			id: 5,
			customerName: 'Aleksandar Mitrović',
			rating: 5,
			date: '2023-12-20',
			carPurchased: 'Dodge Challenger SRT 2023',
			verified: true,
			comment:
				'Sanjao sam o ovom automobilu godinama i AutoAmerika mi je pomogla da ostvarim san. Proces je bio transparentan, a rezultat je prevazišao očekivanja. Hvala vam!',
			pros: ['Ostvarenje snova', 'Transparentnost', 'Odličan rezultat'],
			helpful: 9
		},
		{
			id: 6,
			customerName: 'Jovana Radić',
			rating: 4,
			date: '2023-12-15',
			carPurchased: 'Cadillac Escalade 2023',
			verified: true,
			comment:
				'Luksuzno vozilo stiglo u odličnom stanju. Komunikacija je bila dobra, mada bih volela da budem češće obaveštavana o statusu. Ukupno iskustvo je pozitivno.',
			pros: ['Luksuzno vozilo', 'Dobro stanje', 'Pozitivno iskustvo'],
			helpful: 7
		}
	];

	let filteredReviews = $state(allReviews);

	// Calculate statistics
	const totalReviews = allReviews.length;
	const averageRating = allReviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews;
	const ratingDistribution = [5, 4, 3, 2, 1].map((rating) => ({
		rating,
		count: allReviews.filter((review) => review.rating === rating).length,
		percentage:
			(allReviews.filter((review) => review.rating === rating).length / totalReviews) * 100
	}));

	function applyFiltersAndSearch() {
		let result = allReviews;

		// Apply search
		if (searchQuery.trim()) {
			const query = searchQuery.toLowerCase();
			result = result.filter(
				(review) =>
					review.customerName.toLowerCase().includes(query) ||
					review.comment.toLowerCase().includes(query) ||
					review.carPurchased.toLowerCase().includes(query)
			);
		}

		// Apply rating filter
		if (filterRating !== 'all') {
			result = result.filter((review) => review.rating === parseInt(filterRating));
		}

		// Apply sorting
		if (sortBy === 'newest') {
			result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
		} else if (sortBy === 'oldest') {
			result.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
		} else if (sortBy === 'highest') {
			result.sort((a, b) => b.rating - a.rating);
		} else if (sortBy === 'lowest') {
			result.sort((a, b) => a.rating - b.rating);
		} else if (sortBy === 'helpful') {
			result.sort((a, b) => (b.helpful || 0) - (a.helpful || 0));
		}

		filteredReviews = result;
	}

	// Reactive search and filtering
	$effect(() => {
		applyFiltersAndSearch();
	});
</script>

<svelte:head>
	<title>{m['ReviewsPage.pageTitle']()}</title>
	<meta
		name="description"
		content={m['ReviewsPage.pageDescription']()}
	/>
</svelte:head>

<div class="min-h-screen bg-background">
	<section class="bg-muted py-16">
		<div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
			<h1 class="mb-4 text-4xl font-bold text-foreground md:text-5xl">Recenzije naših klijenata</h1>
			<p class="mx-auto max-w-2xl text-xl text-muted-foreground">
				Pročitajte iskustva zadovoljnih klijenata koji su kroz nas uvezli svoje vozilo iz Amerike
			</p>
		</div>
	</section>

	<section class="bg-background py-16">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
				<div class="lg:col-span-1">
					<Card>
						<CardHeader>
							<CardTitle>Ukupna ocena</CardTitle>
						</CardHeader>
						<CardContent class="text-center">
							<div class="mb-2 text-5xl font-bold text-primary">
								{averageRating.toFixed(1)}
							</div>
							<StarRating rating={Math.round(averageRating)} size="lg" />
							<p class="mt-2 text-muted-foreground">
								Na osnovu {totalReviews} recenzija
							</p>
						</CardContent>
					</Card>
				</div>

				<div class="lg:col-span-2">
					<Card>
						<CardHeader>
							<CardTitle>Distribucija ocena</CardTitle>
						</CardHeader>
						<CardContent>
							<div class="space-y-3">
								{#each ratingDistribution as item}
									<div class="flex items-center gap-4">
										<div class="flex w-16 items-center gap-1">
											<span class="text-sm font-medium">{item.rating}</span>
											<svg class="h-4 w-4 fill-current text-yellow-400" viewBox="0 0 24 24">
												<path
													d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
												/>
											</svg>
										</div>
										<div class="flex-1">
											<div class="h-2 w-full rounded-full bg-muted">
												<div
													class="h-2 rounded-full bg-primary transition-all duration-300"
													style="width: {item.percentage}%"
												></div>
											</div>
										</div>
										<span class="w-12 text-sm text-muted-foreground">
											{item.count}
										</span>
									</div>
								{/each}
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	</section>

	<section class="bg-muted py-16">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="mb-8">
				<div class="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
					<div class="max-w-md flex-1">
						<div class="relative">
							<svg
								class="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-muted-foreground"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								/>
							</svg>
							<Input
								type="text"
								placeholder="Pretražite recenzije..."
								bind:value={searchQuery}
								class="pl-10"
							/>
						</div>
					</div>

					<div class="flex gap-4">
						<select
							bind:value={filterRating}
							class="rounded-md border border-input bg-background px-3 py-2 text-sm"
						>
							<option value="all">Sve ocene</option>
							<option value="5">5 zvezda</option>
							<option value="4">4 zvezde</option>
							<option value="3">3 zvezde</option>
							<option value="2">2 zvezde</option>
							<option value="1">1 zvezda</option>
						</select>

						<select
							bind:value={sortBy}
							class="rounded-md border border-input bg-background px-3 py-2 text-sm"
						>
							<option value="newest">Najnovije</option>
							<option value="oldest">Najstarije</option>
							<option value="highest">Najviša ocena</option>
							<option value="lowest">Najniža ocena</option>
							<option value="helpful">Najkorisnije</option>
						</select>
					</div>
				</div>

				<div class="mt-4 text-sm text-muted-foreground">
					Prikazano {filteredReviews.length} od {totalReviews} recenzija
				</div>
			</div>

			{#if filteredReviews.length === 0}
				<div class="py-12 text-center">
					<svg
						class="mx-auto mb-4 h-12 w-12 text-muted-foreground"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.291-1.007-5.824-2.709M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
						/>
					</svg>
					<h3 class="mb-2 text-lg font-medium text-foreground">Nema rezultata</h3>
					<p class="text-muted-foreground">Pokušajte sa drugačijim filterima ili pretragom.</p>
				</div>
			{:else}
				<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					{#each filteredReviews as review (review.id)}
						<ReviewCard {review} />
					{/each}
				</div>
			{/if}

			{#if filteredReviews.length > 0 && filteredReviews.length >= 6}
				<div class="mt-12 text-center">
					<Button variant="outline" size="lg">Učitaj više recenzija</Button>
				</div>
			{/if}
		</div>
	</section>

	<section class="bg-accent py-16 text-accent-foreground">
		<div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
			<h2 class="mb-4 text-3xl font-bold md:text-4xl">Budite sledeći zadovoljan klijent</h2>
			<p class="mb-8 text-xl text-accent-foreground/90">
				Pridružite se stotinama zadovoljnih klijenata koji su kroz nas uvezli svoj idealan automobil
			</p>
			<div class="flex flex-col justify-center gap-4 sm:flex-row">
				<Button href="/kontakt" size="lg" class="bg-primary hover:bg-primary/90">
					Kontaktiraj nas
				</Button>
				<Button
					href="/automobili"
					size="lg"
					variant="outline"
					class="border-accent-foreground/20 text-accent-foreground hover:bg-accent-foreground hover:text-accent"
				>
					Pogledaj automobile
				</Button>
			</div>
		</div>
	</section>
</div>

<script>
    // SVELTEKIT IMPORTS
	import { page } from '$app/state';

    // COMPONENTS
	import CarHeader from '@/shared/components/pages/(unprotected)/cars/[id]/car-header.svelte';
	import CarHeroSection from '@/shared/components/pages/(unprotected)/cars/[id]/car-hero-section.svelte';
	import CarImageGallery from '@/shared/components/pages/(unprotected)/cars/[id]/car-image-gallery.svelte';
	import CarTabs from '@/shared/components/pages/(unprotected)/cars/[id]/car-tabs/car-tabs.svelte';
	import CarSidebar from '@/shared/components/pages/(unprotected)/cars/[id]/car-sidebar/car-sidebar.svelte';

	// In a real app, this would fetch data based on the ID
	const carId = page.params.id;

	// Sample car data - in real app this would come from API/database
	const car = {
		id: 1,
		brand: 'Ford',
		model: 'Mustang GT',
		year: 2023,
		price: '€45,000',
		images: [
			'/placeholder.svg?height=600&width=800',
			'/placeholder.svg?height=600&width=800',
			'/placeholder.svg?height=600&width=800',
			'/placeholder.svg?height=600&width=800',
			'/placeholder.svg?height=600&width=800'
		],
		mileage: '15,000 km',
		fuel: 'Benzin',
		transmission: 'Automatik',
		engine: '5.0L V8',
		power: '450 HP',
		location: 'Beograd',
		color: 'Crvena',
		drivetrain: 'RWD',
		features: [
			'Leather Seats',
			'Navigation System',
			'Premium Sound System',
			'Heated Seats',
			'Backup Camera',
			'Bluetooth',
			'Cruise Control',
			'Keyless Entry',
			'Remote Start',
			'Performance Package'
		],
		description: `
        Ovaj prelepi Ford Mustang GT iz 2023. godine predstavlja savršen spoj performansi i stila. 
        Opremljen je snažnim 5.0L V8 motorom koji razvija 450 konjskih snaga, pružajući nezaboravno 
        iskustvo vožnje. Automobil je u odličnom stanju, redovno održavan i spreman za novi dom.
        
        Uvezen je direktno iz Amerike i prošao je kompletnu proceduru homologacije za srpsko tržište. 
        Sva dokumenta su u redu i automobil je spreman za registraciju.
      `,
		specifications: {
			Motor: '5.0L V8',
			Snaga: '450 HP',
			'Obrtni moment': '529 Nm',
			'Ubrzanje 0-100': '4.3 sekunde',
			'Maksimalna brzina': '250 km/h',
			Potrošnja: '12.5L/100km',
			'Emisija CO2': '299 g/km',
			'Broj vrata': '2',
			'Broj sedišta': '4',
			'Zapremina prtljažnika': '408L'
		},
		history: {
			VIN: '1FA6P8CF5N5123456',
			'Prva registracija': 'Mart 2023',
			'Broj vlasnika': '1',
			'Servisna knjiga': 'Kompletna',
			Nezgode: 'Bez nezgoda',
			Status: 'Čist naslov'
		}
	};

	let activeTab = $state('overview');
</script>

<svelte:head>
	<title>{car.brand} {car.model} {car.year} - AutoAmerika</title>
	<meta
		name="description"
		content="Detalji o {car.brand} {car.model} {car.year}. Cena: {car.price}. Kontaktirajte nas za više informacija."
	/>
</svelte:head>

<div class="min-h-screen bg-background">
	<CarHeader car={car} />

	<div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
			<div class="space-y-8 lg:col-span-2">
				<CarHeroSection {car} />

				<CarImageGallery {car} />

				<CarTabs {car} bind:activeTab />
			</div>

			<CarSidebar {car} />
		</div>
	</div>
</div>

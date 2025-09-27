<script lang="ts">
    // COMPONENTS
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/components/ui/card';
    
    // DATA
    import { dummyCurrentCars, dummyCarHistory } from '@/features/cars/data/cars-data';

    const stats = {
		totalCars: dummyCurrentCars.length,
		activeCars: dummyCurrentCars.filter((car) => car.status === 'active').length,
		soldThisMonth: dummyCarHistory.length,
		totalRevenue: `€${dummyCarHistory
			.reduce((sum, car) => {
				const sale = car.sales?.[0];
				return sum + (sale?.finalPrice || car.price);
			}, 0)
			.toLocaleString()}`
	};
</script>

<div class="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
    <Card class="admin-card">
        <CardHeader class="pb-3">
            <CardTitle class="text-lg text-muted-foreground">Ukupno automobila</CardTitle>
        </CardHeader>
        <CardContent>
            <div class="text-3xl font-bold text-foreground">{stats.totalCars}</div>
        </CardContent>
    </Card>

    <Card class="admin-card">
        <CardHeader class="pb-3">
            <CardTitle class="text-lg text-muted-foreground">Aktivni oglasi</CardTitle>
        </CardHeader>
        <CardContent>
            <div class="text-3xl font-bold text-primary">{stats.activeCars}</div>
        </CardContent>
    </Card>

    <Card class="admin-card">
        <CardHeader class="pb-3">
            <CardTitle class="text-lg text-muted-foreground">Prodato ovaj mesec</CardTitle>
        </CardHeader>
        <CardContent>
            <div class="text-3xl font-bold text-green-600">{stats.soldThisMonth}</div>
        </CardContent>
    </Card>

    <Card class="admin-card">
        <CardHeader class="pb-3">
            <CardTitle class="text-lg text-muted-foreground">Ukupan prihod</CardTitle>
        </CardHeader>
        <CardContent>
            <div class="text-3xl font-bold text-foreground">{stats.totalRevenue}</div>
        </CardContent>
    </Card>
</div>
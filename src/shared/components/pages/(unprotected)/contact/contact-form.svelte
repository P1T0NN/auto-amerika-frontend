<script lang="ts">
    // COMPONENTS
	import { Card } from '@/shared/components/ui/card';
	import { Input } from '@/shared/components/ui/input';
	import { Label } from '@/shared/components/ui/label';
	import { Textarea } from '@/shared/components/ui/textarea';
    import { Button } from '@/shared/components/ui/button';

	let formData = $state({
		name: '',
		email: '',
		phone: '',
		message: ''
	});

	function handleSubmit(e: Event) {
		e.preventDefault();
		console.log('[v0] Form submitted:', formData);
		// TODO: Implement form submission logic
		alert('Hvala na poruci! Kontaktiraćemo vas uskoro.');
	}
</script>

<div class="lg:col-span-3">
    <Card class="p-8">
        <h2 class="mb-6 text-2xl font-bold">Pošaljite nam poruku</h2>

        <form onsubmit={handleSubmit} class="space-y-6">
            <div class="space-y-2">
                <Label for="name">Ime i prezime *</Label>
                <Input
                    id="name"
                    type="text"
                    placeholder="Vaše ime i prezime"
                    bind:value={formData.name}
                    required
                />
            </div>

            <div class="space-y-2">
                <Label for="email">Email *</Label>
                <Input
                    id="email"
                    type="email"
                    placeholder="vas@email.com"
                    bind:value={formData.email}
                    required
                />
            </div>

            <div class="space-y-2">
                <Label for="phone">Telefon</Label>
                <Input
                    id="phone"
                    type="tel"
                    placeholder="+381 11 123 4567"
                    bind:value={formData.phone}
                />
            </div>

            <div class="space-y-2">
                <Label for="message">Poruka *</Label>
                <Textarea
                    id="message"
                    placeholder="Kako vam možemo pomoći?"
                    rows={6}
                    bind:value={formData.message}
                    required
                />
            </div>

            <Button type="submit" size="lg" class="w-full">Pošalji poruku</Button>
        </form>
    </Card>
</div>
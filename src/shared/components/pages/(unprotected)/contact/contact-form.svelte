<script lang="ts">
    // LIBRARIES
    import { m } from '@/shared/lib/paraglide/messages';

    // COMPONENTS
	import { Card } from '@/shared/components/ui/card';
	import { Input } from '@/shared/components/ui/input';
	import { Label } from '@/shared/components/ui/label';
	import { Textarea } from '@/shared/components/ui/textarea';
    import { Button } from '@/shared/components/ui/button';
    import ErrorMessage from '@/shared/components/ui/error-message/error-message.svelte';
    import { toast } from 'svelte-sonner';

    // CONTEXT
    import { contactContext } from '@/features/contact/context/contact-context.svelte';

    // ACTIONS
    import { sendContactForm } from '@/features/contact/actions/contact-actions.remote';

    // LUCIDE ICONS
    import { Loader } from '@lucide/svelte';

	const handleSendContactForm = sendContactForm.enhance(async ({ submit, form }) => {
        contactContext.isSubmitting = true;

        await submit();

        const result = sendContactForm.result;

        if (result?.success) {
            toast.success(result.message);
            form.reset();
        } else if (result && !result.success) {
            toast.error(result.message);
        } else if (sendContactForm.issues) {
            toast.error(m['ContactPage.ContactForm.validationError']());
        }

        contactContext.isSubmitting = false;
    });
</script>

<div class="lg:col-span-3">
    <Card class="p-8">
        <h2 class="mb-6 text-2xl font-bold">{m['ContactPage.ContactForm.title']()}</h2>

        <form
            {...handleSendContactForm}
            class="space-y-6"
        >
            <div class="space-y-2">
                <Label for="name">{m['ContactPage.ContactForm.nameLabel']()}</Label>
                <Input
                    id="name"
                    type="text"
                    name="name"
                    placeholder={m['ContactPage.ContactForm.namePlaceholder']()}
                    value={sendContactForm.input?.name || ''}
                    class={sendContactForm.issues?.name ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={sendContactForm.issues?.name} />
            </div>

            <div class="space-y-2">
                <Label for="email">{m['ContactPage.ContactForm.emailLabel']()}</Label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={m['ContactPage.ContactForm.emailPlaceholder']()}
                    value={sendContactForm.input?.email || ''}
                    class={sendContactForm.issues?.email ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={sendContactForm.issues?.email} />
            </div>

            <div class="space-y-2">
                <Label for="phone">{m['ContactPage.ContactForm.phoneLabel']()}</Label>
                <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder={m['ContactPage.ContactForm.phonePlaceholder']()}
                    value={sendContactForm.input?.phone || ''}
                    class={sendContactForm.issues?.phone ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={sendContactForm.issues?.phone} />
            </div>

            <div class="space-y-2">
                <Label for="subject">{m['ContactPage.ContactForm.subjectLabel']()}</Label>
                <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder={m['ContactPage.ContactForm.subjectPlaceholder']()}
                    value={sendContactForm.input?.subject || ''}
                    class={sendContactForm.issues?.subject ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={sendContactForm.issues?.subject} />
            </div>

            <div class="space-y-2">
                <Label for="message">{m['ContactPage.ContactForm.messageLabel']()}</Label>
                <Textarea
                    id="message"
                    name="message"
                    placeholder={m['ContactPage.ContactForm.messagePlaceholder']()}
                    rows={6}
                    value={sendContactForm.input?.message || ''}
                    class={sendContactForm.issues?.message ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={sendContactForm.issues?.message} />
            </div>

            <Button
                type="submit"
                size="lg"
                class="w-full"
                disabled={contactContext.isSubmitting}
            >
                {#if contactContext.isSubmitting}
                    <Loader class="mr-2 h-4 w-4 animate-spin" />
                {/if}
                {m['ContactPage.ContactForm.submitButton']()}
            </Button>
        </form>
    </Card>
</div>
<script lang="ts">
    // LIBRARIES
    import { m } from '@/shared/lib/paraglide/messages';

    // COMPONENTS
	import {
		AlertDialog,
		AlertDialogAction,
		AlertDialogCancel,
		AlertDialogContent,
		AlertDialogDescription,
		AlertDialogFooter,
		AlertDialogHeader,
		AlertDialogTitle,
		AlertDialogTrigger
	} from '@/shared/components/ui/alert-dialog';

	interface Props {
		onProceed?: () => void;
		triggerClass?: string;
		actionClass?: string;
		isDisabled?: boolean;
		children?: import("svelte").Snippet;
		// Form props - now more flexible
		useForm?: boolean;
		formAttributes?: Record<string, any>;
		formClass?: string;
		hiddenInputs?: Record<string, string | number>;
	}

	let {
		onProceed,
		triggerClass = "",
		actionClass = "",
		isDisabled = false,
		children,
		useForm = false,
		formAttributes = {},
		formClass = "",
		hiddenInputs = {}
	}: Props = $props();

	let open = $state(false);
	let formElement = $state<HTMLFormElement>();

	function handleProceed() {
		if (onProceed) {
			onProceed();
		}
		open = false;
	}


	function handleCancel() {
		open = false;
	}
</script>

<AlertDialog bind:open>
	<AlertDialogTrigger class={triggerClass}>
		{@render children?.()}
	</AlertDialogTrigger>

	<AlertDialogContent>
		<AlertDialogHeader>
			<AlertDialogTitle>{m["AlertDialogButton.title"]()}</AlertDialogTitle>
			<AlertDialogDescription>
				{m["AlertDialogButton.description"]()}
			</AlertDialogDescription>
		</AlertDialogHeader>

		<AlertDialogFooter>
			{#if useForm}
				<form
					bind:this={formElement}
					class={formClass}
					{...formAttributes}
				>
					{#each Object.entries(hiddenInputs) as [name, value]}
						<input type="hidden" {name} {value} />
					{/each}

					<AlertDialogCancel type="button" onclick={handleCancel} disabled={isDisabled}>{m["AlertDialogButton.cancel"]()}</AlertDialogCancel>
					<AlertDialogAction type="submit" class={actionClass} disabled={isDisabled}>{m["AlertDialogButton.proceed"]()}</AlertDialogAction>
				</form>
			{:else}
				<AlertDialogCancel onclick={handleCancel} disabled={isDisabled}>{m["AlertDialogButton.cancel"]()}</AlertDialogCancel>
				<AlertDialogAction onclick={handleProceed} class={actionClass} disabled={isDisabled}>{m["AlertDialogButton.proceed"]()}</AlertDialogAction>
			{/if}
		</AlertDialogFooter>
	</AlertDialogContent>
</AlertDialog>
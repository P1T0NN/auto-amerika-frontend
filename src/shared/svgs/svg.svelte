<script lang="ts">
    let {
        class: className = "",
        children,
        ...restProps
    }: {
        class?: string;
        children?: any;
        [key: string]: any;
    } = $props();
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    class={className}
    {...restProps}
>
    {@render children?.()}
</svg>
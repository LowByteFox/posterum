<script lang="ts">
    let { children, ...props } = $props();
</script>

<button {...props} class="content-center pl-7 pr-7 pt-1 pb-1 bg-neutral-200 hover:bg-neutral-300 active:bg-neutral-400 rounded-md cursor-pointer transition-all ease-in-out">
{@render children?.()}
</button>

<script lang="ts">
    import Fa from "svelte-fa";
    import { slide } from "svelte/transition";
    import { faXmark } from "@fortawesome/free-solid-svg-icons";

    let { open = $bindable(), children } = $props();
</script>

{#if open}
    <aside
        transition:slide={{ axis: "x", duration: 333 }}
        class="shadow-lg/25 fixed w-screen h-screen top-0 sm:w-md bg-white flex flex-col">
        <div class="w-full flex justify-between p-2.5">
            <p class="font-bold">Navigation</p>
            <button class="p-1 pl-1.5 pr-1.5 flex flex-row items-center gap-1 bg-neutral-200 hover:bg-neutral-300 active:bg-neutral-400 rounded-md cursor-pointer transition-all ease-in-out"
                onclick={() => open = false}>
                <Fa icon={faXmark} />
            </button>
        </div>
        <div class="p-2.5">
            {@render children?.()}
        </div>
    </aside>
{/if}

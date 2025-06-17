<script lang="ts">
    import Fa from "svelte-fa";
    import { faBars } from "@fortawesome/free-solid-svg-icons";
    import { onMount } from "svelte";
    import Drawer from "./Drawer.svelte";

    let open = $state(false);
    let time = $state(new Date());

    onMount(() => {
        const interval = setInterval(() => {
            time = new Date();
        }, 1000);

        return () => clearInterval(interval);
    });
</script>

<div class="w-full h-8 pl-1 shadow-md flex items-center justify-between">
    <button class="cursor-pointer text-lg" onclick={() => open = true}>
        <Fa icon={faBars}/>
    </button>

    <h3>{time.toLocaleTimeString()}</h3>

    <p></p>
</div>

<Drawer bind:open={open}>
<p>hey</p>
</Drawer>

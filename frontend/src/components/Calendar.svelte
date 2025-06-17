<script lang="ts">
    import Fa from "svelte-fa";
    import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
    import { flip } from "svelte/animate";
    import { cubicOut } from "svelte/easing";
    import { fly } from "svelte/transition";

    let now = new Date();
    let current_year = now.getFullYear();

    let years = $state(Array(7));

    function computeYears(year: number) {
        current_year = year;
        for (let i = -3; i < 4; i++) {
            years[i + 3] = current_year + i;
        }
    }

    computeYears(current_year);
</script>

<div class="flex flex-row">
    <ul class="flex flex-col items-center">
        <button onclick={() => computeYears(current_year - 1)} ><Fa icon={faChevronUp}/></button>
            {#each years as year, index (year)}
                <li class="select-none font-mono" in:fly={{ y: index == 0 ? -10 : 10, duration: 200 }}>{year}</li>
            {/each}
        <button onclick={() => computeYears(current_year + 1)}><Fa icon={faChevronDown}/></button>
    </ul>
</div>

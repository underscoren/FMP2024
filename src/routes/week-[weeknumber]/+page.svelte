<script lang="ts">
	import type { PageData } from "./$types";
    import { fly } from "svelte/transition"
    import { expoOut } from "svelte/easing"

    export let data: PageData

    const minWeekNum = data.weeks.map(w => parseInt(w)).at(0);
    const maxWeekNum = data.weeks.map(w => parseInt(w)).at(-1);
    const isStart = minWeekNum == data.weekNum;
    const isEnd = maxWeekNum == data.weekNum;

    let sidebarHidden = true;
</script>

{#if !sidebarHidden}
<div class="sidebar" transition:fly={{x: "-5rem", duration: 250, easing: expoOut }}>
    <ul>
        <li><a href="/">Home</a>
        {#each data.weeks as week}
        <li><a href={`week-${week}`}>Week {week}</a></li>
        {/each}
    </ul>
</div>
{/if}

<div class="section container">
    <div class="sidebar-button" on:click={() => sidebarHidden = !sidebarHidden}></div>
    <div class="header">
        <div class="arrow left">
            <a href={`week-${Math.max(data.weekNum-1, minWeekNum ?? 0)}`}>
                <img src="/arrow.png" alt="Left Arrow">
            </a>
        </div>
        <h2>{data.weekData.title}</h2>
        <div class="arrow right">
            <a href={`week-${Math.min(data.weekNum+1, maxWeekNum ?? 0)}`}>
                <img src="/arrow.png" alt="Right Arrow">
            </a>
        </div>
    </div>
</div>
<div class="section container">
    <div class="imgs">
        {#each data.imgs as img}
            <img src={`/weeks/${data.weekNum}/imgs/${img}`}>
        {/each}
    </div>
</div>

<style lang="sass">
    .sidebar
        width: 20rem
        background-color: rgba(255, 255, 255, 0.2)

    .header
        width: 100%
        display: flex
        justify-content: space-between
        align-items: center
    
        div, h2
            display: inline-block

    .header h2
        font-size: 2rem

    .arrow img
        filter: invert(100%)
        height: 5rem

    .arrow.left img
        transform: scaleX(-1)
    
    .sidebar
        position: absolute
        top: 0
        left: 0
        height: 100vh

        ul
            margin-left: 3rem
            margin-top: 5rem

            li
                font-size: 1.25rem
                a, a:hover
                    color: #fff

    .sidebar-button
        width: 2rem
        height: 2rem
        border-radius: 0.25rem
        background-color: #444

</style>
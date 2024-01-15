<script lang="ts">
    import type { PageData } from "./$types"

    export let data: PageData;

    console.log(data);
</script>

<div class="name-container">
    Caterina Lum 01016465
</div>

<section class="section content">
    <div class="container">
        <h1 class="title is-1 has-text-centered">FMP 2024</h1>

        <div class="boxes-container">
            {#each data.weekData as week, index}
            <a class="box" href={`week-${index}`}>
                <img src={`/weeks/${index}/thumbnail.png`}>
                <span class="bottom-text">{week.title}</span>
            </a>
            {/each}
    </div>
</section>

<style lang="sass">
    $box-width: 25%
    $boxes-per-line: 3
    $boxes-gap: calc((100% / $boxes-per-line) - $box-width)

    .boxes-container
        display: flex
        width: 66%
        padding: 2rem
        justify-content: flex-start
        flex-wrap: wrap
        column-gap: $boxes-gap
        margin-left: auto
        margin-right: auto 

        .box
            position: relative
            padding: 0
            width: $box-width
            aspect-ratio: 1
            background-color: #d32d44
            display: flex
            justify-content: center
            align-items: center
            font-size: 4rem
            margin-bottom: $boxes-gap
            border-radius: 0

            &:hover
                color: #fff

            &:nth-child(3n - 2)
               margin-left: calc($boxes-gap / 2) 

            img
                width: 100%

            .bottom-text
                position: absolute
                bottom: -2rem
                font-size: 1.25rem

    .name-container
        position: absolute
        top: 4rem
        left: 1rem
        font-size: 1.5rem
</style>
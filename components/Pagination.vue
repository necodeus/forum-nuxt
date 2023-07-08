<script setup>
let p = 1;
</script>

<template>
    <div class="flex pagination">
        <div
            v-if="currentPage > 1"
            class="relative flex justify-center items-center pagination-button"
            @click="changePage(base, 1)"
        >
        <IconsAngleDoubleLeft height="11px" />
        </div>

        <div
            v-if="currentPage > 1"
            class="relative flex justify-center items-center pagination-button"
            @click="changePage(base, currentPage - 1)"
        >
        WSTECZ
        </div>

        <div
            v-for="(p, page_index) in [1, 2, 3, 4]"
            v-if="currentPage + p - 5 >= 1"
            :key="page_index"
        >
            <div class="relative pagination-button" @click="changePage(base, currentPage + p - 5)">{{ currentPage + p - 5 }}</div>
        </div>

        <div
            class="relative flex justify-center items-center pagination-button pagination-button--active"
        >
        {{ currentPage }}
        </div>

        <div
            v-for="(p, page_index) in [1, 2, 3, 4]"
            v-if="currentPage + p <= pages"
            :key="page_index"
            class="relative flex justify-center items-center pagination-button"
            @click="changePage(base, currentPage + p)"
        >
        {{ currentPage + p }}
        </div>

        <div
            v-if="currentPage < pages"
            class="relative flex justify-center items-center pagination-button"
            @click="changePage(base, currentPage + 1)"
        >
        DALEJ
        </div>

        <div
            v-if="currentPage < pages"
            class="relative flex justify-center items-center pagination-button"
            @click="changePage(base, pages)"
        >
            <IconsAngleDoubleRight height="11px" />
        </div>

        <div style="color: rgb(182, 182, 182)">Strona {{ currentPage }} z {{ pages }}</div>
    </div>
</template>

<script>
export default {
    props: {
        currentPage: {
            type: Number,
            default: 1,
        },
        pages: {
            type: Number,
            default: 1,
        },
        base: {
            type: String,
            default: "",
        },
    },
    methods: {
        changePage(base, page) {
            console.log(this);
            // $nuxt.$router.push({
            //     path: base + "," + page,
            // });
        },
    },
};
</script>

<style lang="scss">
.pagination {
    height: 50px;
    padding: 12px;
    font-size: 12px;
    font-weight: 600;
    line-height: 26px;
    .pagination-button {
        border-radius: 4px;
        overflow: hidden;
        color: white;
        text-decoration: none;

        min-width: 35px;
        text-align: center;

        &--active {
        background-color: rgb(62, 65, 72);
        }
        &:before {
        content: "";
        background-color: white;
        opacity: 0;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        cursor: pointer;
        }
        &:hover {
        &:before {
            opacity: 0.06;
        }
        }
    }
    > div,
    > a {
        padding: 0 10px;
        margin-right: 2px;
    }
}
</style>

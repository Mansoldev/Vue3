<script setup lang="ts">
import NavBar from '@/shared/components/NavBar.vue'
import type { RouterLink } from '@/router/list-routes';

import { pokemonRoute } from '../router';

const routeLinks: RouterLink[] = pokemonRoute.children!.map(({ name, path, props }) => {
    const { title, visible} = props as { title: string, visible: boolean }

    return {
        name: name?.toString() ?? '',
        path,
        //title: (props as { title: string}).title,
        //visible: (props as { visible: boolean}).visible,
        title,
        visible,
    }
});
</script>

<template>
    <div>
        <NavBar is-secondary :links="routeLinks"/>

        <!-- <Suspense> -->
            <RouterView />

            <!-- <template #fallback>
                Loading...
            </template>
        </Suspense> -->
    </div>
</template>
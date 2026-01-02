<script lang="ts">
    import "./layout.css";
    import favicon from "$lib/assets/favicon.svg";
    import { onNavigate } from "$app/navigation";

    import { ModeWatcher } from "mode-watcher";

    let { children, data } = $props();
    onNavigate((navigation) => {
        if (!document.startViewTransition) return;

        return new Promise((resolve) => {
            document.startViewTransition(async () => {
                resolve();
                await navigation.complete;
            });
        });
    });
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
    <title>Clément Jallat - Portofolio</title>
</svelte:head>

<ModeWatcher />
{@render children()}

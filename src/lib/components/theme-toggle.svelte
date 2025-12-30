<script lang="ts">
    import Moon from "@lucide/svelte/icons/moon";
    import Sun from "@lucide/svelte/icons/sun";
    import { resetMode, setMode } from "mode-watcher";
    import { Button } from "$lib/components/ui/button/index.js";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
</script>

<DropdownMenu.Root>
    <DropdownMenu.Trigger>
        {#snippet child({ props })}
            <Button variant="ghost" size="icon" {...props}>
                <div class="relative size-[1.2rem]">
                    <Sun
                        class="absolute inset-0 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                    />
                    <Moon
                        class="absolute inset-0 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                    />
                </div>
                <span class="sr-only">Changer le thème</span>
            </Button>
        {/snippet}
    </DropdownMenu.Trigger>
    <DropdownMenu.Content align="end">
        <DropdownMenu.Item onclick={() => setMode("light")}
            >Clair</DropdownMenu.Item
        >
        <DropdownMenu.Item onclick={() => setMode("dark")}
            >Sombre</DropdownMenu.Item
        >
        <DropdownMenu.Item onclick={() => resetMode()}
            >Système</DropdownMenu.Item
        >
    </DropdownMenu.Content>
</DropdownMenu.Root>

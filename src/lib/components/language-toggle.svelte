<script lang="ts">
    import Languages from "@lucide/svelte/icons/languages";
    import { Button } from "$lib/components/ui/button/index.js";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
    import { page } from "$app/state";
    import { goto } from "$app/navigation";

    // Vos langues supportées (basé sur votre wuchale.config.js)
    const languages = {
        fr: "Français",
        en: "English",
        es: "Español",
        de: "Deutsch",
        it: "Italiano",
        ja: "日本語",
    };

    function switchLanguage(locale: string) {
        const url = new URL(page.url);
        url.searchParams.set("locale", locale);
        // replaceState évite d'empiler l'historique pour un simple changement de langue
        goto(url.toString(), { replaceState: true, invalidateAll: true });
    }
</script>

<DropdownMenu.Root>
    <DropdownMenu.Trigger>
        {#snippet child({ props })}
            <Button variant="ghost" size="icon" {...props}>
                <Languages class="size-[1.2rem]" />
                <span class="sr-only">Changer la langue</span>
            </Button>
        {/snippet}
    </DropdownMenu.Trigger>
    <DropdownMenu.Content align="end">
        {#each Object.entries(languages) as [code, label]}
            <DropdownMenu.Item
                onclick={() => switchLanguage(code)}
                disabled={page.data.locale === code}
                class={page.data.locale === code ? "bg-accent" : ""}
            >
                {label}
            </DropdownMenu.Item>
        {/each}
    </DropdownMenu.Content>
</DropdownMenu.Root>

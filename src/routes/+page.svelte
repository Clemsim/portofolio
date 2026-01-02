<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import { Badge } from "$lib/components/ui/badge/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import { Textarea } from "$lib/components/ui/textarea/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
    import { fade } from "svelte/transition";
    import { fly } from "svelte/transition";
    import { onMount } from "svelte";
    import { backOut } from "svelte/easing";
    import WavesBackground from "$lib/components/waves-background.svelte";
    import LanguageToggle from "$lib/components/language-toggle.svelte";
    import ModeToggle from "$lib/components/theme-toggle.svelte";
    import { z } from "zod";
    import { superForm } from "sveltekit-superforms";
    import { zodClient } from "sveltekit-superforms/adapters";
    import { contactSchema } from "$lib/schema";
    const initialFormData = {
        email: "",
        message: "",
    };

    const { form, errors, constraints, enhance, message, delayed } = superForm(
        initialFormData,
        {
            SPA: true,
            validators: zodClient(contactSchema),
            onUpdate: async ({ form }) => {
                if (form.valid) {
                    try {
                        const response = await fetch(
                            "https://formspree.io/f/meeogeky",
                            {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify(form.data),
                            },
                        );

                        if (response.ok) {
                            message.set({
                                type: "success",
                                text: "Message envoyé avec succès !",
                            });
                            form.data.email = "";
                            form.data.message = "";
                        } else {
                            message.set({
                                type: "error",
                                text: "Une erreur est survenue.",
                            });
                        }
                    } catch (e) {
                        message.set({
                            type: "error",
                            text: "Problème de connexion.",
                        });
                    }
                }
            },
        },
    );

    let ready = $state(false);
    onMount(() => {
        ready = true;
    });

    const projects = [
        {
            title: "E-commerce Dashboard",
            description:
                "Un tableau de bord analytique complet pour gérer les ventes et les stocks en temps réel.",
            tags: ["SvelteKit", "Tailwind", "Supabase"],
            link: "#",
        },
        {
            title: "SaaS Landing Page",
            description:
                "Page d'atterrissage optimisée pour la conversion avec animations et mode sombre.",
            tags: ["Svelte 5", "Framer Motion", "Stripe"],
            link: "#",
        },
        {
            title: "App de Gestion de Tâches",
            description:
                "Une application collaborative pour équipes avec fonctionnalités temps réel.",
            tags: ["TypeScript", "Node.js", "WebSockets"],
            link: "#",
        },
    ];

    const skills = [
        "Intune / Microsoft Entra",
        "Svelte / SvelteKit",
        "TypeScript",
        "Rust",
        "Tailwind CSS",
        "PostgreSQL",
        "Docker",
        "Git / Gitlab CI/CD",
    ];
</script>

<div
    class="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground overflow-x-hidden"
>
    <!-- Navigation -->
    <header
        class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        in:fly={{ y: -20, duration: 500, delay: 0 }}
    >
        <div
            class="container mx-auto flex h-14 items-center justify-between px-4 md:px-8"
        >
            <div class="flex items-center gap-2 font-bold text-lg">
                <span>Clément Jallat</span>
            </div>
            <nav class="hidden md:flex gap-6 text-sm font-medium">
                <a href="#about" class="transition-colors hover:text-primary"
                    >À propos</a
                >
                <a href="#projects" class="transition-colors hover:text-primary"
                    >Projets</a
                >
                <a href="#contact" class="transition-colors hover:text-primary"
                    >Contact</a
                >
            </nav>
            <div class="flex gap-2">
                <Button
                    variant="ghost"
                    size="sm"
                    href="https://github.com/Clemsim/"
                >
                    GitHub
                </Button>
                <Button
                    variant="ghost"
                    size="sm"
                    href="https://www.linkedin.com/in/clément-jallat"
                >
                    LinkedIn
                </Button>
                <LanguageToggle />
                <ModeToggle />
            </div>
        </div>
    </header>

    <main class="relative">
        <!-- Section Hero avec Vagues Layered -->
        <section
            id="about"
            class="relative min-h-[calc(100vh-3.5rem)] pt-24 pb-32 md:pt-32 md:pb-48 overflow-hidden"
        >
            <div class="container mx-auto px-4 md:px-8 relative z-10">
                <div class="flex flex-col items-start gap-6 max-w-3xl">
                    {#if ready}
                        <div
                            in:fly={{
                                y: 20,
                                duration: 600,
                                delay: 200,
                                easing: backOut,
                            }}
                        >
                            <Badge
                                variant="secondary"
                                class="rounded-full px-4 py-1"
                            >
                                Disponible pour freelance
                            </Badge>
                        </div>

                        <h1
                            in:fly={{
                                y: 20,
                                duration: 600,
                                delay: 400,
                                easing: backOut,
                            }}
                            class="text-4xl md:text-6xl font-extrabold tracking-tight lg:text-7xl"
                        >
                            Créer des expériences web <span
                                class="text-primary inline-block">modernes</span
                            > et intuitives.
                        </h1>

                        <p
                            in:fly={{
                                y: 20,
                                duration: 600,
                                delay: 600,
                                easing: backOut,
                            }}
                            class="text-xl text-muted-foreground max-w-150"
                        >
                            Je suis un développeur Fullstack passionné par
                            Svelte et l'écosystème web moderne. Je transforme
                            vos idées en code performant et maintenable.
                        </p>

                        <div
                            in:fly={{
                                y: 20,
                                duration: 600,
                                delay: 800,
                                easing: backOut,
                            }}
                            class="flex flex-wrap gap-4 mt-4"
                        >
                            <Button size="lg" href="#contact"
                                >Me contacter</Button
                            >
                            <Button
                                size="lg"
                                variant="outline"
                                href="#projects"
                            >
                                Voir mes projets
                            </Button>
                        </div>
                    {/if}
                </div>
            </div>
            <WavesBackground />
        </section>

        <!-- Section Compétences -->
        <section class="py-12 bg-muted/30">
            <div class="container mx-auto px-4 md:px-8">
                <h2 class="text-2xl font-bold mb-6">Technologies & Outils</h2>
                <div class="flex flex-wrap gap-2">
                    {#if ready}
                        {#each skills as skill, i}
                            <div
                                in:fly={{
                                    y: 20,
                                    duration: 400,
                                    delay: 1000 + i * 50,
                                    easing: backOut,
                                }}
                            >
                                <Badge
                                    variant="outline"
                                    class="text-md py-1 px-3 bg-background hover:bg-secondary/100 transition-colors cursor-default"
                                >
                                    {skill}
                                </Badge>
                            </div>
                        {/each}
                    {/if}
                </div>
            </div>
        </section>

        <!-- Section Projets -->
        <section id="projects" class="py-16 md:py-24">
            <div class="container mx-auto px-4 md:px-8">
                <div class="flex flex-col gap-4 mb-10">
                    <h2 class="text-3xl font-bold tracking-tight">
                        Projets Récents
                    </h2>
                    <p class="text-muted-foreground">
                        Une sélection de mes travaux favoris.
                    </p>
                </div>

                <div
                    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {#if ready}
                        {#each projects as project, i}
                            <div
                                in:fly={{
                                    y: 50,
                                    duration: 600,
                                    delay: 400 + i * 150,
                                    easing: backOut,
                                }}
                                class="h-full"
                            >
                                <Card.Root
                                    class="flex flex-col justify-between hover:shadow-lg transition-all hover:-translate-y-1 duration-300 h-full"
                                >
                                    <Card.Header>
                                        <Card.Title>{project.title}</Card.Title>
                                        <Card.Description
                                            >{project.description}</Card.Description
                                        >
                                    </Card.Header>
                                    <Card.Content>
                                        <div class="flex flex-wrap gap-2 mt-2">
                                            {#each project.tags as tag}
                                                <Badge
                                                    variant="secondary"
                                                    class="text-xs">{tag}</Badge
                                                >
                                            {/each}
                                        </div>
                                    </Card.Content>
                                    <Card.Footer>
                                        <Button
                                            variant="outline"
                                            class="w-full"
                                            href={project.link}
                                            >Voir le projet</Button
                                        >
                                    </Card.Footer>
                                </Card.Root>
                            </div>
                        {/each}
                    {/if}
                </div>
            </div>
        </section>

        <!-- Section Contact -->
        <section id="contact" class="py-16 md:py-24 max-w-xl mx-auto px-4">
            <div in:fade={{ duration: 800, delay: 800 }}>
                <Card.Root class="border-primary/20 shadow-md">
                    <Card.Header>
                        <Card.Title class="text-2xl"
                            >Travaillons ensemble</Card.Title
                        >
                        <Card.Description>
                            Envoyez-moi un message et je vous répondrai dans les
                            plus brefs délais.
                        </Card.Description>
                    </Card.Header>
                    <Card.Content>
                        <!-- Feedback visuel (Succès / Erreur) -->
                        {#if $message}
                            <div
                                class="mb-4 p-3 rounded-md text-sm font-medium border
                                {$message.type === 'success'
                                    ? 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800'
                                    : 'bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800'}"
                            >
                                {$message.text}
                            </div>
                        {/if}

                        <form method="POST" use:enhance class="grid gap-4">
                            <div class="grid gap-2">
                                <Label for="email">Email</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="votre@email.com"
                                    bind:value={$form.email}
                                    aria-invalid={$errors.email
                                        ? "true"
                                        : undefined}
                                    {...$constraints.email}
                                    class={$errors.email
                                        ? "border-destructive focus-visible:ring-destructive"
                                        : ""}
                                />
                                {#if $errors.email}
                                    <span
                                        class="text-destructive text-sm font-medium"
                                        >{$errors.email}</span
                                    >
                                {/if}
                            </div>

                            <div class="grid gap-2">
                                <Label for="message">Message</Label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    placeholder="Parlez-moi de votre projet..."
                                    rows={4}
                                    bind:value={$form.message}
                                    aria-invalid={$errors.message
                                        ? "true"
                                        : undefined}
                                    {...$constraints.message}
                                    class={$errors.message
                                        ? "border-destructive focus-visible:ring-destructive"
                                        : ""}
                                />
                                {#if $errors.message}
                                    <span
                                        class="text-destructive text-sm font-medium"
                                        >{$errors.message}</span
                                    >
                                {/if}
                            </div>

                            <Button
                                type="submit"
                                class="w-full"
                                disabled={$delayed}
                            >
                                {#if $delayed}
                                    <span class="animate-pulse"
                                        >Envoi en cours...</span
                                    >
                                {:else}
                                    Envoyer
                                {/if}
                            </Button>
                        </form>
                    </Card.Content>
                </Card.Root>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="border-t py-6 md:py-0 bg-muted/20">
        <div
            class="container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 md:px-8"
        >
            <p
                class="text-center text-sm leading-loose text-muted-foreground md:text-left"
            >
                Construit avec <a
                    href="https://kit.svelte.dev"
                    target="_blank"
                    class="font-medium underline underline-offset-4"
                    >SvelteKit</a
                >
                &
                <a
                    href="https://shadcn-svelte.com"
                    target="_blank"
                    class="font-medium underline underline-offset-4"
                    >shadcn-svelte</a
                >.
            </p>
            <div class="flex gap-4">
                <a href="#" class="text-sm font-medium hover:underline"
                    >Mentions légales</a
                >
            </div>
        </div>
    </footer>
</div>

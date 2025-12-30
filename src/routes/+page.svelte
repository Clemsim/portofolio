<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import { Badge } from "$lib/components/ui/badge/index.js";
    import { Separator } from "$lib/components/ui/separator/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import { Textarea } from "$lib/components/ui/textarea/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
    import { fly, fade } from "svelte/transition";

    let animate = $state(true);
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
    class="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground"
>
    <!-- Navigation Simple -->
    <header
        class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
        <div
            class="container mx-auto flex h-14 items-center justify-between px-4 md:px-8"
        >
            <div class="flex items-center gap-2 font-bold text-lg">
                <!-- Logo texte uniquement -->
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
                    href="www.linkedin.com/in/clément-jallat"
                >
                    LinkedIn
                </Button>
            </div>
        </div>
    </header>

    <main class="container mx-auto px-4 md:px-8 transition:fade">
        <section
            id="about"
            class="py-24 md:py-32 flex flex-col items-start gap-6 max-w-3xl"
        >
            <Badge variant="secondary" class="rounded-full px-4 py-1"
                >Disponible pour freelance</Badge
            >
            <h1
                class="text-4xl md:text-6xl font-extrabold tracking-tight lg:text-7xl"
            >
                Créer des expériences web <span class="text-primary"
                    >modernes</span
                > et intuitives.
            </h1>
            <p class="text-xl text-muted-foreground max-w-150">
                Je suis un développeur Fullstack passionné par Svelte et
                l'écosystème web moderne. Je transforme vos idées en code
                performant et maintenable.
            </p>
            <div class="flex flex-wrap gap-4 mt-4">
                <Button size="lg" href="#contact">Me contacter</Button>
                <Button size="lg" variant="outline" href="#projects">
                    Voir mes projets
                </Button>
            </div>
        </section>

        <Separator class="my-8" />

        <!-- Section Compétences -->
        <section class="py-12">
            <h2 class="text-2xl font-bold mb-6">Technologies & Outils</h2>
            <div class="flex flex-wrap gap-2">
                {#each skills as skill}
                    <Badge variant="outline" class="text-md py-1 px-3">
                        {skill}
                    </Badge>
                {/each}
            </div>
        </section>

        <!-- Section Projets -->
        <section id="projects" class="py-16 md:py-24">
            <div class="flex flex-col gap-4 mb-10">
                <h2 class="text-3xl font-bold tracking-tight">
                    Projets Récents
                </h2>
                <p class="text-muted-foreground">
                    Une sélection de mes travaux favoris.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {#each projects as project}
                    <Card.Root
                        class="flex flex-col justify-between hover:shadow-lg transition-shadow"
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
                                    <Badge variant="secondary" class="text-xs"
                                        >{tag}</Badge
                                    >
                                {/each}
                            </div>
                        </Card.Content>
                        <Card.Footer>
                            <Button
                                variant="outline"
                                class="w-full"
                                href={project.link}>Voir le projet</Button
                            >
                        </Card.Footer>
                    </Card.Root>
                {/each}
            </div>
        </section>

        <!-- Section Contact -->
        <section id="contact" class="py-16 md:py-24 max-w-xl mx-auto">
            <Card.Root>
                <Card.Header>
                    <Card.Title class="text-2xl"
                        >Travaillons ensemble</Card.Title
                    >
                    <Card.Description
                        >Envoyez-moi un message et je vous répondrai dans les
                        plus brefs délais.</Card.Description
                    >
                </Card.Header>
                <Card.Content>
                    <form class="grid gap-4">
                        <div class="grid gap-2">
                            <Label for="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="votre@email.com"
                            />
                        </div>
                        <div class="grid gap-2">
                            <Label for="message">Message</Label>
                            <Textarea
                                id="message"
                                placeholder="Parlez-moi de votre projet..."
                                rows={4}
                            />
                        </div>
                        <Button type="submit" class="w-full">Envoyer</Button>
                    </form>
                </Card.Content>
            </Card.Root>
        </section>
    </main>

    <!-- Footer -->
    <footer class="border-t py-6 md:py-0">
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

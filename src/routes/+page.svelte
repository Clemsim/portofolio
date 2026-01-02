<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import { Badge } from "$lib/components/ui/badge/index.js";
    import { Separator } from "$lib/components/ui/separator/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import { Textarea } from "$lib/components/ui/textarea/index.js";
    import { Label } from "$lib/components/ui/label/index.js";

    import ModeToggle from "$lib/components/theme-toggle.svelte";
    import LanguageToggle from "$lib/components/language-toggle.svelte";

    import { fly, fade } from "svelte/transition";
    import { backOut } from "svelte/easing";
    import { onMount } from "svelte";

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

            <!-- VAGUES SUPERPOSÉES -->
            <!-- J'ai augmenté un peu la hauteur (h-[150px] md:h-[300px]) car il y a 5 couches -->
            <div
                class="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] pointer-events-none -z-0"
            >
                <svg
                    class="relative block w-full h-[150px] md:h-[300px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 900 600"
                    preserveAspectRatio="none"
                >
                    <!-- Couche 1 : Bleu très clair (Fond) -->
                    <path
                        class="text-primary/5"
                        fill="currentColor"
                        d="M0 436L21.5 432.5C43 429 86 422 128.8 423.2C171.7 424.3 214.3 433.7 257.2 435.8C300 438 343 433 385.8 428.7C428.7 424.3 471.3 420.7 514.2 418C557 415.3 600 413.7 642.8 416.8C685.7 420 728.3 428 771.2 422.5C814 417 857 398 878.5 388.5L900 379L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
                    ></path>

                    <!-- Couche 2 : Bleu un peu plus visible -->
                    <path
                        class="text-primary/10"
                        fill="currentColor"
                        d="M0 482L21.5 469.5C43 457 86 432 128.8 431.7C171.7 431.3 214.3 455.7 257.2 460.7C300 465.7 343 451.3 385.8 446.3C428.7 441.3 471.3 445.7 514.2 446.2C557 446.7 600 443.3 642.8 446.8C685.7 450.3 728.3 460.7 771.2 458.8C814 457 857 443 878.5 436L900 429L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
                    ></path>

                    <!-- Couche 3 : Bleu moyen -->
                    <path
                        class="text-primary/20"
                        fill="currentColor"
                        d="M0 435L21.5 446C43 457 86 479 128.8 488C171.7 497 214.3 493 257.2 488.7C300 484.3 343 479.7 385.8 480.7C428.7 481.7 471.3 488.3 514.2 484.3C557 480.3 600 465.7 642.8 460.2C685.7 454.7 728.3 458.3 771.2 460C814 461.7 857 461.3 878.5 461.2L900 461L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
                    ></path>

                    <!-- Couche 4 : Transition vers le violet (Secondary) -->
                    <path
                        class="text-secondary/15"
                        fill="currentColor"
                        d="M0 542L21.5 542.5C43 543 86 544 128.8 540.2C171.7 536.3 214.3 527.7 257.2 521C300 514.3 343 509.7 385.8 514.2C428.7 518.7 471.3 532.3 514.2 528.5C557 524.7 600 503.3 642.8 499.5C685.7 495.7 728.3 509.3 771.2 511.7C814 514 857 505 878.5 500.5L900 496L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
                    ></path>

                    <!-- Couche 5 : Violet le plus marqué (Devant) -->
                    <path
                        class="text-secondary/25"
                        fill="currentColor"
                        d="M0 560L21.5 562.3C43 564.7 86 569.3 128.8 568C171.7 566.7 214.3 559.3 257.2 553.8C300 548.3 343 544.7 385.8 543.7C428.7 542.7 471.3 544.3 514.2 545C557 545.7 600 545.3 642.8 546.3C685.7 547.3 728.3 549.7 771.2 550.7C814 551.7 857 551.3 878.5 551.2L900 551L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
                    ></path>
                </svg>
            </div>
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
                        <Card.Description
                            >Envoyez-moi un message et je vous répondrai dans
                            les plus brefs délais.</Card.Description
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
                            <Button type="submit" class="w-full">Envoyer</Button
                            >
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

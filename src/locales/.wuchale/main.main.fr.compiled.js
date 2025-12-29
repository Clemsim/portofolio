
            /** @type import('wuchale').CompiledElement[] */
export let c = ["E-commerce Dashboard","Un tableau de bord analytique complet pour gérer les ventes et les stocks en temps réel.","SvelteKit","Tailwind","Supabase","SaaS Landing Page","Page d'atterrissage optimisée pour la conversion avec animations et mode sombre.","Svelte 5","Framer Motion","Stripe","App de Gestion de Tâches","Une application collaborative pour équipes avec fonctionnalités temps réel.","TypeScript","Node.js","WebSockets","Svelte / SvelteKit","React","Tailwind CSS","PostgreSQL","Docker","Git","MonPortfolio","À propos","Projets","Contact","GitHub","LinkedIn","Disponible pour freelance",["Créer des expériences web ",[0,"modernes"]," et intuitives."],"Je suis un développeur Fullstack passionné par Svelte et\nl'écosystème web moderne. Je transforme vos idées en code\nperformant et maintenable.","Me contacter","Voir mes projets","Technologies & Outils","Projets Récents","Une sélection de mes travaux favoris.","Voir le projet","Travaillons ensemble","Envoyez-moi un message et je vous répondrai dans les\nplus brefs délais.","Email","Message","Parlez-moi de votre projet...","Envoyer",["Construit avec ",[0,"SvelteKit"]," & ",[1,"shadcn-svelte"],"."],"Mentions légales"]
            // only during dev, for HMR
            let latestVersion = -1
            // @ts-ignore
            export function update({ version, data }) {
                if (latestVersion >= version) {
                    return
                }
                for (const [ index, item ] of data['fr'] ?? []) {
                    c[index] = item
                }
                latestVersion = version
            }
        
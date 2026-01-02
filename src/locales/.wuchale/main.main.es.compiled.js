
            /** @type import('wuchale').CompiledElement[] */
export let c = ["Panel de Control de E-commerce","Un completo panel de control analítico para gestionar ventas e inventario en tiempo real.","SvelteKit","Tailwind","Supabase","Página de Aterrizaje SaaS","Página de aterrizaje optimizada para la conversión con animaciones y modo oscuro.","Svelte 5","Framer Motion","Stripe","Aplicación de Gestión de Tareas","Una aplicación colaborativa para equipos con funcionalidades en tiempo real.","TypeScript","Node.js","WebSockets","Svelte / SvelteKit","Tailwind CSS","PostgreSQL","Docker","Acerca de","Proyectos","Contacto","GitHub","LinkedIn","Disponible para freelance",["Crear experiencias web ",[0,"modernas"]," e intuitivas."],"Contactarme","Ver mis proyectos","Tecnologías y Herramientas","Proyectos Recientes","Una selección de mis trabajos favoritos.","Ver proyecto","Trabajemos juntos","Envíame un mensaje y te responderé a la\nmayor brevedad posible.","Correo electrónico","Mensaje","Cuéntame sobre tu proyecto...","Enviar",["Construido con ",[0,"SvelteKit"]," y ",[1,"shadcn-svelte"],"."],"Aviso legal","Intune / Microsoft Entra","Git / Gitlab CI/CD","Rust","Clément Jallat","Clément Jallat - Portafolio","Je suis un développeur Fullstack passionné par\nSvelte et l'écosystème web moderne. Je transforme\nvos idées en code performant et maintenable.","Changer le thème","Clair","Sombre","Système","Français","English","Español","Deutsch","Italiano","日本語","Changer la langue","Message envoyé avec succès !","Envoi en cours...","Une erreur est survenue.","Problème de connexion.","Email invalide","Le message doit faire au moins 10 caractères"]
            // only during dev, for HMR
            let latestVersion = -1
            // @ts-ignore
            export function update({ version, data }) {
                if (latestVersion >= version) {
                    return
                }
                for (const [ index, item ] of data['es'] ?? []) {
                    c[index] = item
                }
                latestVersion = version
            }
        

            /** @type import('wuchale').CompiledElement[] */
export let c = ["Panel de Control de E-commerce","Un completo panel de control analítico para gestionar ventas e inventario en tiempo real.","SvelteKit","Tailwind","Supabase","Página de Aterrizaje SaaS","Página de aterrizaje optimizada para la conversión con animaciones y modo oscuro.","Svelte 5","Framer Motion","Stripe","Aplicación de Gestión de Tareas","Una aplicación colaborativa para equipos con funcionalidades en tiempo real.","TypeScript","Node.js","WebSockets","Svelte / SvelteKit","React","Tailwind CSS","PostgreSQL","Docker","Git","MiPortafolio","Acerca de","Proyectos","Contacto","GitHub","LinkedIn","Disponible para freelance",["Crear experiencias web ",[0,"modernas"]," e intuitivas."],"Soy un desarrollador Fullstack apasionado por Svelte y\nel ecosistema web moderno. Transformo tus ideas en código\nperformante y mantenible.","Contactarme","Ver mis proyectos","Tecnologías y Herramientas","Proyectos Recientes","Una selección de mis trabajos favoritos.","Ver proyecto","Trabajemos juntos","Envíame un mensaje y te responderé a la\nmayor brevedad posible.","Correo electrónico","Mensaje","Cuéntame sobre tu proyecto...","Enviar",["Construido con ",[0,"SvelteKit"]," y ",[1,"shadcn-svelte"],"."],"Aviso legal"]
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
        
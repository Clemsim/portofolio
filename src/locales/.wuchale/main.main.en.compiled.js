
            /** @type import('wuchale').CompiledElement[] */
export let c = ["E-commerce Dashboard","A comprehensive analytical dashboard for managing real-time sales and inventory.","SvelteKit","Tailwind","Supabase","SaaS Landing Page","Conversion-optimized landing page with animations and dark mode.","Svelte 5","Framer Motion","Stripe","Task Management App","A collaborative application for teams with real-time features.","TypeScript","Node.js","WebSockets","Svelte / SvelteKit","React","Tailwind CSS","PostgreSQL","Docker","Git","MyPortfolio","About","Projects","Contact","GitHub","LinkedIn","Available for freelance",["Creating ",[0,"modern"]," and intuitive web experiences."],"I am a Fullstack developer passionate about Svelte and the\nmodern web ecosystem. I transform your ideas into high-performance\nand maintainable code.","Contact me","View my projects","Technologies & Tools","Recent Projects","A selection of my favorite works.","View project","Let's work together","Send me a message and I will get back to you as soon as\npossible.","Email","Message","Tell me about your project...","Send",["Built with ",[0,"SvelteKit"]," & ",[1,"shadcn-svelte"],"."],"Legal Notice"]
            // only during dev, for HMR
            let latestVersion = -1
            // @ts-ignore
            export function update({ version, data }) {
                if (latestVersion >= version) {
                    return
                }
                for (const [ index, item ] of data['en'] ?? []) {
                    c[index] = item
                }
                latestVersion = version
            }
        
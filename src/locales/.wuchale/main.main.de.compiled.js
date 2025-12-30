
            /** @type import('wuchale').CompiledElement[] */
export let c = ["E-Commerce-Dashboard","Ein umfassendes Analyse-Dashboard zur Verwaltung von Verkäufen und Lagerbeständen in Echtzeit.","SvelteKit","Tailwind","Supabase","SaaS Landing Page","Konversionsoptimierte Landingpage mit Animationen und Dunkelmodus.","Svelte 5","Framer Motion","Stripe","Aufgabenmanagement-App","Eine kollaborative App für Teams mit Echtzeit-Funktionen.","TypeScript","Node.js","WebSockets","Svelte / SvelteKit","Tailwind CSS","PostgreSQL","Docker","Über mich","Projekte","Kontakt","GitHub","LinkedIn","Verfügbar für Freiberufler",["Erstelle ",[0,"moderne"]," und intuitive Weberlebnisse."],"Ich bin ein Fullstack-Entwickler mit einer Leidenschaft für Svelte und\ndas moderne Web-Ökosystem. Ich verwandle Ihre Ideen in leistungsstarken\nund wartbaren Code.","Kontaktieren Sie mich","Meine Projekte ansehen","Technologien & Werkzeuge","Aktuelle Projekte","Eine Auswahl meiner Lieblingsarbeiten.","Projekt ansehen","Lass uns zusammenarbeiten","Schicken Sie mir eine Nachricht und ich werde Ihnen so\nschnell wie möglich antworten.","E-Mail","Nachricht","Erzählen Sie mir von Ihrem Projekt...","Senden",["Erstellt mit ",[0,"SvelteKit"]," & ",[1,"shadcn-svelte"],"."],"Impressum","Intune / Microsoft Entra","Git / Gitlab CI/CD","Rust","Clément Jallat","Clément Jallat - Portofolio"]
            // only during dev, for HMR
            let latestVersion = -1
            // @ts-ignore
            export function update({ version, data }) {
                if (latestVersion >= version) {
                    return
                }
                for (const [ index, item ] of data['de'] ?? []) {
                    c[index] = item
                }
                latestVersion = version
            }
        
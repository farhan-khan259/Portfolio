import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

export const metadata: Metadata = {
    title: "Ahmed Usman | AI/ML Engineer",
    description: "Portfolio of Ahmed Usman, an AI/ML Engineer building production LLM applications, RAG systems, voice agents, and applied AI products.",
    keywords: ["Ahmed Usman", "AI Engineer", "LLM Engineer", "RAG", "LangGraph", "FastAPI", "Next.js"],
    authors: [{ name: "Ahmed Usman" }],
    creator: "Ahmed Usman",
    openGraph: {
        type: "website",
        locale: "en_US",
        title: "Ahmed Usman | AI/ML Engineer",
        description: "Production AI systems, LLM workflows, RAG, automation, and voice agents.",
        siteName: "Ahmed Usman Portfolio",
    },
    twitter: {
        card: "summary_large_image",
        title: "Ahmed Usman | AI/ML Engineer",
        description: "Production AI systems, LLM workflows, RAG, automation, and voice agents.",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="font-sans antialiased pb-24 overflow-x-hidden w-full relative">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem={false}
                    disableTransitionOnChange
                >
                    <div className="relative w-full overflow-x-hidden">
                        {children}
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}

import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

export const metadata: Metadata = {
    title: "Muhammad Farhan | Full Stack Web Developer",
    description: "Portfolio of Muhammad Farhan, a Full Stack Web Developer and Software Engineer building responsive, scalable web applications.",
    keywords: ["Muhammad Farhan", "Full Stack Web Developer", "Software Engineer", "React", "Next.js", "Node.js", "Express.js"],
    authors: [{ name: "Muhammad Farhan" }],
    creator: "Muhammad Farhan",
    openGraph: {
        type: "website",
        locale: "en_US",
        title: "Muhammad Farhan | Full Stack Web Developer",
        description: "Responsive, scalable web applications with React, Next.js, Node.js, Express.js, and modern databases.",
        siteName: "Muhammad Farhan Portfolio",
    },
    twitter: {
        card: "summary_large_image",
        title: "Muhammad Farhan | Full Stack Web Developer",
        description: "Responsive, scalable web applications with React, Next.js, Node.js, Express.js, and modern databases.",
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

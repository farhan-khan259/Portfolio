import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const poppins = Poppins({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
    variable: "--font-poppins",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Alex Johnson | Full Stack Web Developer",
    description: "Full Stack Web Developer fluent in MERN Stack (React, Node, Express, MongoDB). Building fast, scalable web applications with clean code and modern best practices.",
    keywords: ["Full Stack Developer", "MERN Stack", "React", "Node.js", "Web Developer", "Alex Johnson"],
    authors: [{ name: "Alex Johnson" }],
    creator: "Alex Johnson",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://alexjohnson.dev",
        title: "Alex Johnson | Full Stack Web Developer",
        description: "Full Stack Web Developer fluent in MERN Stack. Building fast, scalable web applications.",
        siteName: "Alex Johnson Portfolio",
    },
    twitter: {
        card: "summary_large_image",
        title: "Alex Johnson | Full Stack Web Developer",
        description: "Full Stack Web Developer fluent in MERN Stack",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.variable} ${poppins.variable} font-sans antialiased pb-24 overflow-x-hidden w-full relative`}>
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

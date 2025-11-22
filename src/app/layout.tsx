import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import { ThemeProvider } from "next-themes";
import "./styles/globals.css";

export const metadata: Metadata = {
    title: "hstory",
    description: "프론트엔드 개발자 윤효진의 이야기",
    icons: {
        icon: "/favicon.ico",
    },
};

const pretendard = localFont({
    src: "./styles/fonts/pretendard.woff2",
    display: "swap",
});

export default function RootLayout({ 
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko" className={ pretendard.className } suppressHydrationWarning>
            <body className="max-w-6xl mx-auto">
                <ThemeProvider attribute="class">
                    <main className="flex flex-col">
                        <Header />
                        { children }
                    </main>
                </ThemeProvider>
                <Footer />
            </body>
        </html>
    );
}
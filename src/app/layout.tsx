import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
    title: "hstory",
    description: "프론트엔드 개발자 윤효진의 개인 블로그",
    icons: {
        icon: "/favicon.ico",
    },
};

const pretendard = localFont({
    src: "../constants/fonts/pretendard.woff2",
    display: "swap",
});

export default function RootLayout({ 
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko" className={ pretendard.className } suppressHydrationWarning>
            <body className="max-w-4xl mx-auto">
                <ThemeProvider attribute="class">
                    <main className="flex flex-col gap-5">
                        <Header />
                        { children }
                    </main>
                </ThemeProvider>
                <Footer />
            </body>
        </html>
    );
}
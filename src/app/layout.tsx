import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import "./styles/globals.css";

export const metadata: Metadata = {
    title: "hstory",
    description: "프론트엔드 개발자 윤효진의 이야기",
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
            <body className="">
                <main className="max-w-6xl mx-auto px-4">
                    <Header />
                    { children }
                </main>
                <Footer />
            </body>
        </html>
    );
}
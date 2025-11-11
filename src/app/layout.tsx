import { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

export const metadata: Metadata = {
    title: "hstory",
    description: "프론트엔드 윤효진의 개발 블로그",
};

const pretendard = localFont({
    src: "../../public/fonts/PretendardVariable.woff2",
    display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ko" className={ pretendard.className }>
            <body className="">
                <Header />
                <main className="flex flex-col">
                    { children }
                </main>
                <Footer />
            </body>
        </html>
    );
}
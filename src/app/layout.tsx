import { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
    title: "hstory",
    description: "프론트엔드 개발자 윤효진의 기술 블로그",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode,
}) {
    return (
        <html lang="ko">
            <body>{children}</body>
        </html>
    );
}
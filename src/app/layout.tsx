import { Metadata } from "next";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import "@/styles/globals.css";

export const metadata: Metadata = {
    title: "hstory",
    description: "윤효진의 기술 블로그 제작 프로젝트",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ko">
            <body>{ children }</body>
        </html>
    );
}
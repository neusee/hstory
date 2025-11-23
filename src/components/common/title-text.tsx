import React from "react";

interface TitleTextProps {
    title: string;
    discription: React.ReactNode;
}

export default function TitleText({
    title,
    discription,
}: TitleTextProps) {
    return (
        <div className="flex flex-col">
            <h1 className="text-3xl font-bold mb-5">
                { title }
            </h1>
            { discription && (
                <p className="text-gray-600">
                    { discription }
                </p>
            )}
        </div>
    );
}
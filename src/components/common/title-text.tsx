interface TitleTextProps {
    title: string;
    discription: string;
}

export default function TitleText({
    title,
    discription,
}: TitleTextProps) {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold">
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
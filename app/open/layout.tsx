export default function CollectionLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <section className="card-stack-layout">{children}</section>;
}

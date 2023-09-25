

export default function GroupView({params}: any) {
    const {id} = params;

    return (
        <main className="flex flex-col min-h-screen">
            Group {id}
        </main>
    );
}
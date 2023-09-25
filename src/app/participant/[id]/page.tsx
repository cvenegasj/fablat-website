
export default function ParticipantView({params}: any) {
    const {id} = params;

    return (
        <main className="flex flex-col min-h-screen">
            Participant {id}
        </main>
    );
}
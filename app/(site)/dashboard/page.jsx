"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function PerformanceDashboard() {
    const { data: session } = useSession();

    if (!session) {
        return (
            <>
                <section id="dashboard" className="px-4 md:px-8 2xl:px-0">
                    <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
                        <div className="bg-red-100 w-full">
                            <h1>You are not signed in</h1>
                            <button onClick={() => signIn("google")}>Sign in with Google</button>
                        </div>
                    </div>
                </section>
            </>

        );
    }

    return (

        <div>
            <h1>Welcome, {session?.user.name}</h1>
            <p>Email: {session?.user.email}</p>
            <button onClick={() => signOut()}>Sign out</button>
        </div>
    );
}
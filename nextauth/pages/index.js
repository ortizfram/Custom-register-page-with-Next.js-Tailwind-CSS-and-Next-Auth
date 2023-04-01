import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { Ripples } from "@uiball/loaders";

export default function Component() {
  const { data: session, status, error } = useSession();

  // error
  if (error) {
    console.error("Error fetching session:", error);
    return <div>Error fetching session</div>;
  }

  // loading
  if (status === "loading") {
    return <Ripples size={60} speed={1} color="black" />;
  }

  // LOGGED
  if (session) {
    return (
      <div className="flex flex-col items-center">
        {session.user.image && (
          <Image
            src={session.user.image}
            alt="Avatar image"
            width={50}
            height={50}
          />
        )}
        Signed in as {session.user.email} <br />
        <button className="p-4 mt-2 bg-indigo-400" onClick={() => signOut()}>
          Sign out
        </button>
      </div>
    );
  }

  // NOT LOGGED
  return (
    <div className="flex flex-col">
      Not signed in <br />
      <button className="p-4 mt-2 bg-indigo-400" onClick={() => signIn()}>
        Sign in
      </button>
    </div>
  );
}

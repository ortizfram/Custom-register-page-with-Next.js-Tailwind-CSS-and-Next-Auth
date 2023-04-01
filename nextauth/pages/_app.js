import "@/styles/globals.css";

import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <div className="flex items-center justify-center h-screen bg-indigo-100">
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
}

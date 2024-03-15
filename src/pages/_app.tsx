import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { api } from "~/utils/api";

import "~/styles/globals.css";
import Navbar from "~/components/layout/navbar";
import PageContainer from "~/components/layout/pageContainer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <main className={`font-sans ${inter.variable} dark bg-slate-950 min-h-screen text-white`}>
        <Navbar />
        <Toaster position="bottom-right"/>
        <PageContainer>
        <Component {...pageProps} />
        </PageContainer>
      </main>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);

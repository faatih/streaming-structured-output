import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { AppSidebar } from "@/components/app-sidebar";
import { SidebarLayout, SidebarTrigger } from "@/components/ui/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { cookies } = await import("next/headers");

  return (
    <html lang="en">
      <body className={`${inter.className} dark`}>
        <SidebarLayout
          defaultOpen={cookies().get("sidebar:state")?.value === "true"}
        >
          <AppSidebar />
          <main className="flex flex-1 flex-col p-2 transition-all duration-300 ease-in-out">
            <div className="h-full rounded-md border-2 border-dashed p-2">
              <SidebarTrigger />
              {children}
            </div>
          </main>
        </SidebarLayout>
      </body>
    </html>
  );
}

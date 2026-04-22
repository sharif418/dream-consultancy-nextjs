"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactPopup from "@/components/ContactPopup";
import { PopupProvider } from "@/components/PopupContext";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PopupProvider>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <ContactPopup />
    </PopupProvider>
  );
}

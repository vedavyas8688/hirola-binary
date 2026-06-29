import { createContext, useContext, useState } from "react";

const ModalContext = createContext(null);

export function ModalProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("Enquire Now");

  // openModal("Section Title") — the title shows at the top of the form.
  const openModal = (sectionTitle) => {
    if (typeof sectionTitle === "string") setTitle(sectionTitle);
    setOpen(true);
  };

  return (
    <ModalContext.Provider
      value={{ open, title, openModal, closeModal: () => setOpen(false) }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used inside ModalProvider");
  return ctx;
}
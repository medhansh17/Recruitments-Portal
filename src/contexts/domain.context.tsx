import React, { createContext, useState } from "react";

interface DomainContextType {
  domain: string[];
  setDomain: React.Dispatch<React.SetStateAction<string[]>>;
  addDomains: (props: { domains: string[] }) => void;
}

export const DomainContext = createContext<DomainContextType>({
  domain: [],
  setDomain: () => {},
  addDomains: () => {},
});

export const DomainProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [domain, setDomain] = useState<string[]>([]);

  const addDomains = (props: { domains: string[] }) => {
    if (domain.length > 0) {
      const updatedDomains: string[] = [...domain, ...props.domains];
      setDomain(updatedDomains);
    } else {
      const updatedDomains = props.domains;
      setDomain(updatedDomains);
    }
  };

  const value = { domain, setDomain, addDomains };

  return (
    <DomainContext.Provider value={value}>{children}</DomainContext.Provider>
  );
};

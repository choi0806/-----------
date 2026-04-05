import { createContext, useContext, useState, ReactNode } from "react";

type ProtectState = {
  selectedIds: number[];
  setSelectedIds: React.Dispatch<React.SetStateAction<number[]>>;
  noiseIntensity: number[];
  setNoiseIntensity: React.Dispatch<React.SetStateAction<number[]>>;
  preserveQuality: boolean;
  setPreserveQuality: React.Dispatch<React.SetStateAction<boolean>>;
  selectedPlan: "basic" | "premium";
  setSelectedPlan: React.Dispatch<React.SetStateAction<"basic" | "premium">>;
  advancedOptions: { removeExif: boolean; addWatermark: boolean };
  setAdvancedOptions: React.Dispatch<React.SetStateAction<{ removeExif: boolean; addWatermark: boolean }>>;
};

const ProtectContext = createContext<ProtectState | null>(null);

export function ProtectProvider({ children }: { children: ReactNode }) {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [noiseIntensity, setNoiseIntensity] = useState([50]);
  const [preserveQuality, setPreserveQuality] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState<"basic" | "premium">("basic");
  const [advancedOptions, setAdvancedOptions] = useState({ removeExif: true, addWatermark: false });

  return (
    <ProtectContext.Provider value={{
      selectedIds, setSelectedIds,
      noiseIntensity, setNoiseIntensity,
      preserveQuality, setPreserveQuality,
      selectedPlan, setSelectedPlan,
      advancedOptions, setAdvancedOptions
    }}>
      {children}
    </ProtectContext.Provider>
  );
}

export function useProtect() {
  const context = useContext(ProtectContext);
  if (!context) {
    throw new Error("useProtect must be used within a ProtectProvider");
  }
  return context;
}
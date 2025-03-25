
import { useState } from 'react';

type RWAAssetType = 'real-estate' | 'precious-metals' | 'fixed-income' | 'equities' | 'all';

interface UseRWAAssetsProps {
  defaultAssetType?: RWAAssetType;
}

export function useRWAAssets({ defaultAssetType = 'all' }: UseRWAAssetsProps = {}) {
  const [assetType, setAssetType] = useState<RWAAssetType>(defaultAssetType);

  const handleAssetTypeChange = (newAssetType: RWAAssetType) => {
    setAssetType(newAssetType);
  };

  const assetTypes = [
    { value: 'all', label: 'All Assets' },
    { value: 'real-estate', label: 'Real Estate' },
    { value: 'precious-metals', label: 'Precious Metals' },
    { value: 'fixed-income', label: 'Fixed Income' },
    { value: 'equities', label: 'Equities' }
  ];

  return {
    assetType,
    setAssetType: handleAssetTypeChange,
    assetTypes,
  };
}

export default useRWAAssets;

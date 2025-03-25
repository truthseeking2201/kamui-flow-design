
import { useState } from 'react';

type Period = 'day' | 'week' | 'month' | 'year' | 'all';

interface UsePeriodSelectionProps {
  defaultPeriod?: Period;
}

export function usePeriodSelection({ defaultPeriod = 'month' }: UsePeriodSelectionProps = {}) {
  const [period, setPeriod] = useState<Period>(defaultPeriod);

  const handlePeriodChange = (newPeriod: Period) => {
    setPeriod(newPeriod);
  };

  return {
    period,
    setPeriod: handlePeriodChange,
  };
}

export default usePeriodSelection;

import { NextUIProvider } from '@nextui-org/system';
import { useHref, useNavigate } from 'react-router';

export default function Providers({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  return (
    <NextUIProvider navigate={navigate} useHref={useHref}>
      {children}
    </NextUIProvider>
  );
}

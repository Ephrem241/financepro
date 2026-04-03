import OfflineClient from './offline-client';

export const metadata = {
  title: "You're Offline | FinancePro",
  description: 'No internet connection detected.',
};

export default function OfflinePage() {
  return <OfflineClient />;
}

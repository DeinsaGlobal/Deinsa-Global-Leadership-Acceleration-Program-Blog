import { DashboardTabs } from '../organisms/dashboard/DashboardTabs';

export function DashboardTemplate({ onSignOut }: { onSignOut: () => void }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="mb-1 text-4xl font-bold">Panel de Administración</h1>
          <p className="text-muted-foreground text-xl">
            Gestiona el contenido del blog y la plaza digital.
          </p>
        </div>
        <button onClick={onSignOut} className="btn-primary">
          Cerrar sesión
        </button>
      </header>
      <DashboardTabs />
    </div>
  );
}

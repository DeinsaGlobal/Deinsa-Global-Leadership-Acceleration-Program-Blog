import { DashboardTabs } from '../organisms/dashboard/DashboardTabs';

/**
 * A functional component that renders the dashboard template for the administration panel.
 * It includes a header with a title, description, and a sign-out button, as well as dashboard tabs.
 *
 * @param {Object} props - The props object.
 * @param {() => void} props.onSignOut - A callback function triggered when the "Cerrar sesión" button is clicked.
 *
 * @returns {JSX.Element} The rendered dashboard template component.
 */
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

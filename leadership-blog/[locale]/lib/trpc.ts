import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '../../server'; // debe apuntar al router raíz de tu backend

export const trpc = createTRPCReact<AppRouter>();

import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '../../src/app';
/**
 * Sharing or extracting routes from server
 */
export const trpc = createTRPCReact<AppRouter>();
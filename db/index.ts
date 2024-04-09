import { migrate } from 'drizzle-orm/libsql/migrator';
import { db } from './schema';

await migrate(db, { migrationsFolder: 'drizzle' });

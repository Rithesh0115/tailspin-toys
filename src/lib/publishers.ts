/**
 * Publisher lookups for the Tailspin Toys catalog.
 *
 * These database helpers are used by the static site to query publisher names at
 * build time without introducing a separate API layer.
 */
import { asc } from 'drizzle-orm';
import { publishers } from '../../db/schema';
import type { Publisher } from '../types/game';
import type { Database } from './db';

/**
 * Fetches all publishers in alphabetical order by their display name.
 *
 * @param db - Database connection used to execute the query.
 * @returns A list of publishers sorted by name.
 */
export async function getAllPublishers(db: Database): Promise<Publisher[]> {
    return db
        .select({ id: publishers.id, name: publishers.name })
        .from(publishers)
        .orderBy(asc(publishers.name));
}

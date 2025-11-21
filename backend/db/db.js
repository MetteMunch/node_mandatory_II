import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// Åbn database
export const db = await open({
    filename: './database.db',
    driver: sqlite3.Database
});

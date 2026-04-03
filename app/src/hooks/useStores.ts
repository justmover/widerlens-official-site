import { useEffect, useState } from 'react';
import { type Store, storesConfig } from '../config';

function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;
  for (const char of line) {
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current);
  return result;
}

function parseCSV(text: string): Record<string, string>[] {
  const lines = text.trim().split(/\r?\n/);
  if (lines.length < 2) return [];
  const headers = parseCSVLine(lines[0]);
  const rows: Record<string, string>[] = [];
  for (let i = 1; i < lines.length; i++) {
    const values = parseCSVLine(lines[i]);
    const row: Record<string, string> = {};
    headers.forEach((h, j) => {
      row[h.trim()] = values[j]?.trim() ?? '';
    });
    rows.push(row);
  }
  return rows;
}

export function useStores() {
  const [stores, setStores] = useState<Store[]>(storesConfig.stores);
  const [loading, setLoading] = useState(Boolean(storesConfig.sheetUrl));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!storesConfig.sheetUrl) {
      setLoading(false);
      return;
    }

    const fetchStores = async () => {
      const sheetUrl = storesConfig.sheetUrl;
      if (!sheetUrl) return;

      try {
        const response = await fetch(sheetUrl);
        if (!response.ok) {
          throw new Error(`Failed to fetch stores: ${response.status}`);
        }
        const csvText = await response.text();
        const rows = parseCSV(csvText);
        const parsedStores: Store[] = rows
          .filter((row) => row.name && row.address)
          .map((row, index) => ({
            id: Number(row.id) || index + 1,
            name: row.name,
            address: row.address,
            phone: row.phone || '',
            hours: row.hours || '',
            district: row.district || '',
          }));
        setStores(parsedStores);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
        // Falls back to the static storesConfig.stores already in state
      } finally {
        setLoading(false);
      }
    };

    fetchStores();
  }, []);

  return { stores, loading, error };
}

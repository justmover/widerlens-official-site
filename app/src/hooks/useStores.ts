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

function inferDistrict(address: string): string {
  const addr = address.toLowerCase();
  const island = ['銅鑼灣', '中環', '灣仔', '北角', '鰂魚涌', '香港仔', '柴灣', '跑馬地', '天后', '西環', '上環', '堅尼地城', '炮台山', '太古', '西營盤', '薄扶林', '黃竹坑'];
  const kowloon = ['旺角', '尖沙咀', '油麻地', '佐敦', '深水埗', '長沙灣', '荔枝角', '觀塘', '牛頭角', '九龍灣', '紅磡', '土瓜灣', '黃大仙', '鑽石山', '樂富', '慈雲山', '石硤尾', '太子', '大角咀', '啟德', '何文田', '彩虹', '秀茂坪', '藍田', '油塘'];
  const nt = ['荃灣', '葵涌', '沙田', '大埔', '粉嶺', '上水', '屯門', '元朗', '天水圍', '馬鞍山', '將軍澳', '青衣', '東涌', '離島', '西貢', '太和', '火炭', '石門', '小瀝源', '圍', '朗屏', '錦上路', '大窩口', '荔景'];

  for (const d of island) if (addr.includes(d)) return '港島';
  for (const d of kowloon) if (addr.includes(d)) return '九龍';
  for (const d of nt) if (addr.includes(d)) return '新界';
  return '其他地區';
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
          .filter((row) => (row.name || row.名稱) && (row.address || row.地址))
          .map((row, index) => {
            const address = row.address || row.地址 || '';
            const district = row.district || row.地區 || inferDistrict(address);
            return {
              id: Number(row.id || row.店鋪編號) || index + 1,
              name: row.name || row.名稱 || '',
              address,
              phone: row.phone || row.電話 || '',
              hours: row.hours || row.營業時間 || '',
              district,
            };
          });
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

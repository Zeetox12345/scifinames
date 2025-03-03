import alienData from '@/data/alien.json';
import bionicleData from '@/data/bionicle.json';
import chissData from '@/data/chiss.json';
import cloneData from '@/data/clone.json';
import cyborgData from '@/data/cyborg.json';
import cyberpunkData from '@/data/cyberpunk.json';
import droidData from '@/data/droid.json';
import ewokData from '@/data/ewok.json';
import hackerData from '@/data/hacker.json';
import mandalorianData from '@/data/mandalorian.json';
import mechaData from '@/data/mecha.json';

// Define the base interface for name data
export interface NameData {
  examples: string[];
  [key: string]: any; // Allow for additional properties specific to each generator
}

// Map of generator types to their data
const nameDataMap: Record<string, NameData> = {
  'Alien': alienData,
  'Bionicle': bionicleData,
  'Chiss': chissData,
  'Clone': cloneData,
  'Cyborg': cyborgData,
  'Cyberpunk': cyberpunkData,
  'Droid': droidData,
  'Ewok': ewokData,
  'Hacker': hackerData,
  'Mandalorian': mandalorianData,
  'Mecha': mechaData
};

/**
 * Get name data for a specific generator type
 * @param type The generator type (e.g., 'Alien', 'Bionicle', etc.)
 * @returns The name data for the specified type, or undefined if not found
 */
export function getNameData(type: string): NameData | undefined {
  return nameDataMap[type];
}

/**
 * Get example names for a specific generator type
 * @param type The generator type (e.g., 'Alien', 'Bionicle', etc.)
 * @returns Array of example names, or empty array if type not found
 */
export function getExampleNames(type: string): string[] {
  return nameDataMap[type]?.examples || [];
}

export default nameDataMap; 
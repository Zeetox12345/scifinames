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
import miralukaData from '@/data/miraluka.json';
import mirialanData from '@/data/mirialan.json';
import monCalamariData from '@/data/mon_calamari.json';
import pacificRimData from '@/data/pacific_rim.json';
import planetData from '@/data/planet.json';
import robotData from '@/data/robot.json';
import rodianData from '@/data/rodian.json';
import sithData from '@/data/sith.json';
import spaceshipData from '@/data/spaceship.json';
import steampunkData from '@/data/steampunk.json';
import togrutaData from '@/data/togruta.json';
import transformersData from '@/data/transformers.json';
import wookieeData from '@/data/wookiee.json';
import zabrakData from '@/data/zabrak.json';

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
  'Mecha': mechaData,
  'Miraluka': miralukaData,
  'Mirialan': mirialanData,
  'Mon Calamari': monCalamariData,
  'Pacific Rim': pacificRimData,
  'Planet': planetData,
  'Robot': robotData,
  'Rodian': rodianData,
  'Sith': sithData,
  'Spaceship': spaceshipData,
  'Steampunk': steampunkData,
  'Togruta': togrutaData,
  'Transformers': transformersData,
  'Wookiee': wookieeData,
  'Zabrak': zabrakData
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
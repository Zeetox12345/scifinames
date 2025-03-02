import { getNameData } from './nameData';

/**
 * Generate random names for a specific generator type
 * @param type The generator type (e.g., 'Alien', 'Bionicle', etc.)
 * @param count Number of names to generate
 * @returns Array of randomly selected names
 */
export function generateRandomNames(type: string, count: number = 10): string[] {
  const data = getNameData(type);
  if (!data || !data.examples || data.examples.length === 0) {
    return [];
  }
  
  // Get the examples array
  const examples = data.examples;
  
  // If we have fewer examples than requested count, return all examples
  if (examples.length <= count) {
    return [...examples];
  }
  
  // Randomly select 'count' names from the examples
  const shuffled = [...examples].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
} 
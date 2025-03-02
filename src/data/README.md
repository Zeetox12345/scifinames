# Name Generator Data Files

This directory contains JSON files that provide data for the various name generators in the application.

## File Structure

Each generator has its own JSON file with a simple structure:

```json
{
  "examples": [
    "Example1", "Example2", "Example3", ...
  ]
}
```

## Adding Names

To add your own names to a generator:

1. Open the corresponding JSON file (e.g., `alien.json` for the Alien Name Generator)
2. Add your names to the `examples` array
3. Make sure to follow proper JSON syntax with commas between items and quotes around each name

## Adding New Generators

To add a new generator:

1. Create a new JSON file in this directory with the structure shown above
2. Add the import and mapping in `src/lib/nameData.ts`
3. Create a new generator component that uses the data

## Using the Data in Components

Import the utility functions from `src/lib/nameData.ts`:

```typescript
import { getNameData, getExampleNames } from '@/lib/nameData';

// Get all data for a generator
const alienData = getNameData('Alien');

// Get just the examples
const examples = getExampleNames('Alien');
```

## Adding 10,000+ Names

The generators are designed to work with large lists of names. You can add thousands of names to each JSON file, and the generator will randomly select from them when generating names.

For optimal performance, consider the following:
- Keep the JSON files well-formatted
- If adding very large lists, consider using a tool to generate the JSON file
- Test the generator after adding large lists to ensure it performs well 
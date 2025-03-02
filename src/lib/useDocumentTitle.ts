import { useEffect } from 'react';

/**
 * A hook to set the document title and meta description
 * @param title The title to set
 * @param description Optional meta description to set
 */
export function useDocumentTitle(title: string, description?: string) {
  useEffect(() => {
    // Save previous values
    const previousTitle = document.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = metaDescription ? metaDescription.getAttribute('content') : '';
    
    // Update title
    document.title = title;
    
    // Update description if provided
    if (description && metaDescription) {
      metaDescription.setAttribute('content', description);
    } else if (description) {
      // Create meta description if it doesn't exist
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }
    
    // Cleanup function to restore previous values when component unmounts
    return () => {
      document.title = previousTitle;
      const metaDescriptionCleanup = document.querySelector('meta[name="description"]');
      if (previousDescription && metaDescriptionCleanup) {
        metaDescriptionCleanup.setAttribute('content', previousDescription);
      }
    };
  }, [title, description]);
} 
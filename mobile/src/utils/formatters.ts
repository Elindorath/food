/**
 * Format time in minutes to a human-readable string
 * @param minutes - Time in minutes
 * @returns Formatted string (e.g., "1h 30min" or "45min")
 */
export function formatTime(minutes: number): string {
  if (minutes < 60) {
    return `${minutes}min`;
  }

  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;

  if (mins === 0) {
    return `${hours}h`;
  }

  return `${hours}h ${mins}min`;
}

/**
 * Format difficulty number to a string
 * @param difficulty - Difficulty level (1-5)
 * @returns Formatted string (e.g., "Easy", "Medium", "Hard")
 */
export function formatDifficulty(difficulty: number): string {
  const levels = ['', 'Very Easy', 'Easy', 'Medium', 'Hard', 'Very Hard'];

  return levels[difficulty] ?? 'Unknown';
}

/**
 * Format rating to stars
 * @param rating - Rating value (1-5)
 * @returns String with star emojis
 */
export function formatRating(rating?: number): string {
  if (rating === undefined) {
    return '';
  }

  return '⭐'.repeat(rating);
}

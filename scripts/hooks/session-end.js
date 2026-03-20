#!/usr/bin/env node

/**
 * Session End Hook
 *
 * Runs when a Claude Code session ends.
 * Captures session summary for continuity.
 */

const now = new Date();

const summary = {
  type: 'session-end',
  timestamp: now.toISOString(),
  message: 'Session ended. Pending action items should be captured in your task management system.'
};

console.log(JSON.stringify(summary));

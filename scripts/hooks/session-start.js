#!/usr/bin/env node

/**
 * Session Start Hook
 *
 * Runs at the beginning of each Claude Code session.
 * Outputs a brief context summary to prime the conversation.
 */

const now = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const dateStr = now.toLocaleDateString('en-US', options);
const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

const hour = now.getHours();
let greeting;
if (hour < 12) {
  greeting = 'Good morning';
} else if (hour < 17) {
  greeting = 'Good afternoon';
} else {
  greeting = 'Good evening';
}

const context = {
  timestamp: now.toISOString(),
  date: dateStr,
  time: timeStr,
  greeting: greeting,
  suggestions: []
};

// Morning: suggest briefing
if (hour >= 7 && hour < 11) {
  context.suggestions.push('Run /briefing for your morning overview');
}

// Afternoon: suggest schedule check
if (hour >= 13 && hour < 15) {
  context.suggestions.push('Check upcoming meetings with /meeting-prep');
}

// Evening: suggest review
if (hour >= 17 && hour < 20) {
  context.suggestions.push('Run /review for your end-of-day summary');
}

// Always suggest inbox if not done recently
context.suggestions.push('Run /inbox-triage to catch up on messages');

// Output as structured context
console.log(JSON.stringify({
  type: 'session-context',
  data: context
}));

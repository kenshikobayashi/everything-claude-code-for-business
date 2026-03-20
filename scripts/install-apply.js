#!/usr/bin/env node

/**
 * ECCB Installer
 *
 * Copies agents, skills, rules, and hooks to the Claude config directory.
 *
 * Usage:
 *   node scripts/install-apply.js          # Install all components
 *   node scripts/install-apply.js --update # Update existing installation
 *   node scripts/install-apply.js --uninstall # Remove installed components
 */

const path = require('path');
const fs = require('fs');
const { getClaudeDir, getPluginDir, ensureDir, copyFiles } = require('./lib/utils');

const claudeDir = getClaudeDir();
const pluginDir = getPluginDir();
const args = process.argv.slice(2);

const isUninstall = args.includes('--uninstall');
const isUpdate = args.includes('--update');

const components = [
  { name: 'agents', src: 'agents', dest: path.join(claudeDir, 'agents') },
  { name: 'skills', src: 'skills', dest: path.join(claudeDir, 'skills') },
  { name: 'rules', src: 'rules', dest: path.join(claudeDir, 'rules') },
];

if (isUninstall) {
  console.log('Uninstalling Everything Claude Code for Business...\n');

  for (const component of components) {
    const srcDir = path.join(pluginDir, component.src);
    if (!fs.existsSync(srcDir)) continue;

    const files = fs.readdirSync(srcDir);
    let removed = 0;

    for (const file of files) {
      const destPath = path.join(component.dest, file);
      if (fs.existsSync(destPath)) {
        const stat = fs.statSync(destPath);
        if (stat.isDirectory()) {
          fs.rmSync(destPath, { recursive: true });
        } else {
          fs.unlinkSync(destPath);
        }
        removed++;
      }
    }

    console.log(`  ${component.name}: removed ${removed} items`);
  }

  // Remove hooks
  const hooksFile = path.join(claudeDir, 'hooks', 'hooks.json');
  if (fs.existsSync(hooksFile)) {
    // Don't remove hooks.json entirely — just remove our entries
    console.log('  hooks: please manually review ~/.claude/hooks/hooks.json');
  }

  console.log('\nUninstall complete.');
  process.exit(0);
}

// Install / Update
console.log(`${isUpdate ? 'Updating' : 'Installing'} Everything Claude Code for Business...\n`);

for (const component of components) {
  const srcDir = path.join(pluginDir, component.src);
  if (!fs.existsSync(srcDir)) {
    console.log(`  ${component.name}: source not found, skipping`);
    continue;
  }

  const copied = copyFiles(srcDir, component.dest, '*');
  console.log(`  ${component.name}: ${copied} items copied`);
}

// Copy hooks
const hooksSrc = path.join(pluginDir, 'hooks', 'hooks.json');
const hooksDest = path.join(claudeDir, 'hooks');
if (fs.existsSync(hooksSrc)) {
  ensureDir(hooksDest);
  // Merge with existing hooks if present
  const existingHooksFile = path.join(hooksDest, 'hooks.json');
  if (fs.existsSync(existingHooksFile)) {
    console.log('  hooks: existing hooks.json found — please merge manually');
    console.log(`         Source: ${hooksSrc}`);
  } else {
    fs.copyFileSync(hooksSrc, existingHooksFile);
    console.log('  hooks: installed');
  }
}

// Copy hook scripts
const scriptsSrc = path.join(pluginDir, 'scripts', 'hooks');
const scriptsDest = path.join(claudeDir, 'scripts', 'hooks');
if (fs.existsSync(scriptsSrc)) {
  const copied = copyFiles(scriptsSrc, scriptsDest, '*');
  console.log(`  hook scripts: ${copied} files copied`);
}

console.log(`\nInstallation complete!`);
console.log(`\nNext steps:`);
console.log(`  1. Configure MCP servers in .mcp.json (see docs/configuration.md)`);
console.log(`  2. Customize your CLAUDE.md (see docs/examples.md)`);
console.log(`  3. Run: claude → /briefing`);

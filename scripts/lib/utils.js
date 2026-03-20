#!/usr/bin/env node

/**
 * Shared utilities for ECCB scripts
 */

const fs = require('fs');
const path = require('path');
const os = require('os');

/**
 * Get the Claude config directory
 */
function getClaudeDir() {
  if (process.platform === 'win32') {
    return path.join(process.env.APPDATA || '', 'Claude');
  }
  return path.join(os.homedir(), '.claude');
}

/**
 * Get the plugin installation directory
 */
function getPluginDir() {
  return path.dirname(path.dirname(__dirname));
}

/**
 * Read a JSON file safely
 */
function readJsonSafe(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(content);
  } catch {
    return null;
  }
}

/**
 * Ensure a directory exists
 */
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

/**
 * Copy files from source to destination directory
 */
function copyFiles(srcDir, destDir, pattern = '*.md') {
  ensureDir(destDir);
  const files = fs.readdirSync(srcDir);
  let copied = 0;

  for (const file of files) {
    const srcPath = path.join(srcDir, file);
    const destPath = path.join(destDir, file);
    const stat = fs.statSync(srcPath);

    if (stat.isFile() && (pattern === '*' || file.endsWith(pattern.replace('*', '')))) {
      fs.copyFileSync(srcPath, destPath);
      copied++;
    } else if (stat.isDirectory()) {
      copyFiles(srcPath, path.join(destDir, file), pattern);
      copied++;
    }
  }

  return copied;
}

module.exports = {
  getClaudeDir,
  getPluginDir,
  readJsonSafe,
  ensureDir,
  copyFiles
};

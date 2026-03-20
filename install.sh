#!/usr/bin/env bash

# install.sh — Shell entrypoint for the ECCB installer.
#
# Resolves the real repo root (handles symlinks), then delegates
# to the Node.js installer.

set -euo pipefail

SCRIPT_PATH="$0"
while [ -L "$SCRIPT_PATH" ]; do
  link_dir="$(cd "$(dirname "$SCRIPT_PATH")" && pwd)"
  SCRIPT_PATH="$(readlink "$SCRIPT_PATH")"
  [[ "$SCRIPT_PATH" != /* ]] && SCRIPT_PATH="$link_dir/$SCRIPT_PATH"
done
SCRIPT_DIR="$(cd "$(dirname "$SCRIPT_PATH")" && pwd)"

# Check Node.js
if ! command -v node &> /dev/null; then
  echo "Error: Node.js is required but not installed."
  echo "Install it from https://nodejs.org/ (v18+ recommended)"
  exit 1
fi

NODE_VERSION=$(node -v | sed 's/v//' | cut -d. -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
  echo "Warning: Node.js v18+ is recommended. You have v$(node -v)"
fi

exec node "$SCRIPT_DIR/scripts/install-apply.js" "$@"

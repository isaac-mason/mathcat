#!/usr/bin/env bash
# Assemble the GitHub Pages site from the already-built artifacts:
#   website/dist  -> _site/           (landing page at the root)
#   examples/dist -> _site/examples/
#   dist-typedoc  -> _site/docs/      (typedoc API reference)
#
# Expects `pnpm build:website`, `pnpm build:examples`, and `pnpm typedoc` to
# have run first. Output is written to _site/ at the repo root.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SITE="$ROOT/_site"

rm -rf "$SITE"
mkdir -p "$SITE"
cp -r "$ROOT/website/dist/." "$SITE/"
mkdir -p "$SITE/examples" && cp -r "$ROOT/examples/dist/." "$SITE/examples/"
mkdir -p "$SITE/docs" && cp -r "$ROOT/dist-typedoc/." "$SITE/docs/"
touch "$SITE/.nojekyll"

echo "assembled $SITE"

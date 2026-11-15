#!/usr/bin/env bash
set -euo pipefail

cd -- "$(dirname -- "${BASH_SOURCE[0]}")"
bundle exec jekyll clean
npm run build
exec bundle exec jekyll serve --incremental "$@"

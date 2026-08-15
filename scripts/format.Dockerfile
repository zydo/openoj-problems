# All-in-one formatter container — the single source of formatting parity.
# CI runs scripts/format.py --check inside this image; locally,
#   docker build -f scripts/format.Dockerfile -t openoj-format .
#   docker run --rm -v "$PWD":/repo -w /repo openoj-format            # format
#   docker run --rm -v "$PWD":/repo -w /repo openoj-format --check     # check
# Every tool version here is pinned to match package.json and CI.
FROM node:24-bookworm-slim

RUN apt-get update \
    && apt-get install -y --no-install-recommends python3 python3-pip curl ca-certificates xz-utils git \
    && rm -rf /var/lib/apt/lists/*

# Python formatters (pinned)
RUN pip install --no-cache-dir --break-system-packages ruff==0.16.3 clang-format==22.1.8

# Go toolchain (gofmt)
RUN curl -fsSL https://go.dev/dl/go1.24.4.linux-arm64.tar.gz | tar -C /usr/local -xz \
    || curl -fsSL https://go.dev/dl/go1.24.4.linux-amd64.tar.gz | tar -C /usr/local -xz
ENV PATH="/usr/local/go/bin:${PATH}"

# Rust toolchain (rustfmt)
ENV RUSTUP_HOME=/usr/local/rustup CARGO_HOME=/usr/local/cargo
RUN curl -fsSL https://sh.rustup.rs | sh -s -- -y --default-toolchain 1.85.0 --profile minimal --component rustfmt
ENV PATH="/usr/local/cargo/bin:${PATH}"

WORKDIR /repo
COPY package.json package-lock.json ./
RUN npm ci --no-fund --no-audit && rm -rf node_modules

# npm deps are installed per-run against the mounted repo (package-lock pinned)
ENTRYPOINT ["/bin/sh", "-c", "npm ci --no-fund --no-audit >/dev/null 2>&1; exec python3 scripts/format.py \"$@\"", "--"]

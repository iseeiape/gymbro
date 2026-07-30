#!/usr/bin/env bash

# GymBro Daily Content Generator Cron
# Generates one blog article per day from content pool

set -e

WORKSPACE="/home/unu/.openclaw/workspace/fitness-calculator-v2"
POOL_FILE="$WORKSPACE/content/content-pool-topics.md"
BLOG_DIR="$WORKSPACE/content/blog"
LOCK_FILE="/tmp/gymbro-cron.lock"
LOG_FILE="/tmp/gymbro-cron.log"

# Prevent concurrent runs
if [ -f "$LOCK_FILE" ]; then
    echo "$(date): Another instance is running. Exiting." >> "$LOG_FILE"
    exit 0
fi
touch "$LOCK_FILE"

cleanup() {
    rm -f "$LOCK_FILE"
}
trap cleanup EXIT

echo "$(date): Starting GymBro content generation" >> "$LOG_FILE"

# Find next unused topic
get_next_topic() {
    local pool="$1"
    # Look for lines starting with "- [ ]" and pick the first one
    grep "^- \[ \]" "$pool" | head -1
}

TOPIC_LINE=$(get_next_topic "$POOL_FILE")

if [ -z "$TOPIC_LINE" ]; then
    echo "$(date): No unused topics found in pool" >> "$LOG_FILE"
    exit 0
fi

# Extract topic ID and title
# Format: - [ ] topic-id - Title here
TOPIC_ID=$(echo "$TOPIC_LINE" | sed 's/- \[ \] //' | sed 's/ -.*//')
TOPIC_TITLE=$(echo "$TOPIC_LINE" | sed 's/- \[ \] [^ ]* - //')

echo "$(date): Selected topic: $TOPIC_ID - $TOPIC_TITLE" >> "$LOG_FILE"

# Mark topic as used in pool file
sed -i "s/- \[ \] $TOPIC_ID/- [x] $TOPIC_ID/" "$POOL_FILE"

echo "$(date): GymBro cron completed successfully" >> "$LOG_FILE"
exit 0

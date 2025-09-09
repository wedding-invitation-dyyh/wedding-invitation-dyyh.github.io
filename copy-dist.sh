

INPUT="./src/data.json"
OUTPUT_DIR="dist"

for dir in src/assets/*; do
    name=$(basename "$dir")
    if [[ "$name" == "fonts" || "$name" == "icons" ]]; then
        continue
    fi
    mkdir -p "$OUTPUT_DIR/$name"
    cp -r "$dir/main" "$OUTPUT_DIR/$name/"
done

# Loop over each key (pageId) in the JSON
for pageId in $(jq -r 'keys[]' "$INPUT"); do
  title=$(jq -r --arg id "$pageId" '.[$id].main.title // "우리 결혼해요"' "$INPUT")
  description=$(jq -r --arg id "$pageId" '.[$id].main.eventDetail // "초대합니다"' "$INPUT" | tr '\n' ' ')

  # Create output directory
  mkdir -p "$OUTPUT_DIR/$pageId"

  # Write HTML
  cat dist/index.html \
    | sed "s/우리 결혼해요/$title/g" \
    | sed "s/Our Wedding Day/$title/g" \
    | sed "s/weddingmain2.jpg/$pageId\/main\/main.png/g" \
    > "$OUTPUT_DIR/$pageId/index.html"

  echo "✅ Created $OUTPUT_DIR/$pageId/index.html"
done
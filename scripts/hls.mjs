import fs from "fs";
import { execSync } from "child_process";
import path from "path";

const inputFolder = process.argv[2];

if (!inputFolder || !fs.existsSync(inputFolder)) {
  console.error("❌ Folder does not exist. Use: yarn hls ./videos");
  process.exit(1);
}

const files = fs.readdirSync(inputFolder).filter((f) => f.endsWith(".mp4"));

function getAspectRatio(videoPath) {
  try {
    const cmd = `ffprobe -v error -select_streams v:0 -show_entries stream=width,height -of csv=s=x:p=0 "${videoPath}"`;
    const output = execSync(cmd).toString().trim();

    const [width, height] = output.split("x").map(Number);
    if (!width || !height) throw new Error("Unable to parse dimensions");

    return { width, height };
  } catch (err) {
    console.error("❌ Error getting aspect ratio:", err.message);
    return null;
  }
}

for (const file of files) {
  const basename = path.parse(file).name;
  const fullInput = path.join(inputFolder, file);
  const outputDir = path.join(inputFolder, basename);
  fs.mkdirSync(outputDir, { recursive: true });

  const info = getAspectRatio(fullInput);
  if (!info) continue;

  const { width, height } = info;
  console.log(`🔄 Progresing: ${file} (${width}x${height})`);

  const Cmd = `ffmpeg -i "${fullInput}" \
-filter_complex "[0:v]split=1[v1];[v1]scale=w=${width}:h=${height}[v1out]" \
-map [v1out] -c:v:0 libx264 -b:v:0 6500k -g 48 -keyint_min 48 -sc_threshold 0 -preset veryfast \
-hls_time 2 -hls_playlist_type vod -f hls "${outputDir}/1440p.m3u8"`;

  execSync(Cmd, { stdio: "inherit", shell: true });

  const masterContent = `#EXTM3U
#EXT-X-VERSION:3
#EXT-X-STREAM-INF:BANDWIDTH=7000000,RESOLUTION=${width}x${height}
1440p.m3u8`;

  fs.writeFileSync(path.join(outputDir, "master.m3u8"), masterContent);
  console.log(`✅ Done: ${basename}`);
}

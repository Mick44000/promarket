import fs from "node:fs";
import path from "node:path";

const root = path.resolve(".next/server");

function walk(dir, out = []) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    const st = fs.statSync(p);
    if (st.isDirectory()) walk(p, out);
    else if (name.endsWith(".html")) out.push(p);
  }
  return out;
}

const linkRe = /<link rel="preload" as="script"[^>]*>/g;
const scriptRe = /<script src="(\/_next\/static\/chunks\/[^"]+)"([^>]*)><\/script>/g;

function defer(html) {
  const files = [];
  const withoutLinks = html.replace(linkRe, "");
  const withoutScripts = withoutLinks.replace(scriptRe, (_, src, attrs) => {
    files.push({
      src,
      noModule: /noModule/i.test(attrs),
      id: (attrs.match(/\sid="([^"]+)"/) || [])[1] || "",
    });
    return "";
  });
  if (!files.length) return html;
  const payload = JSON.stringify(files);
  const loader = `<script>(function(){var files=${payload};function load(){for(var i=0;i<files.length;i++){var f=files[i];var s=document.createElement("script");s.src=f.src;s.async=true;if(f.noModule)s.noModule=true;if(f.id)s.id=f.id;document.head.appendChild(s);}}requestAnimationFrame(function(){requestAnimationFrame(load);});})();</script>`;
  if (!withoutScripts.includes("</body>")) return html;
  return withoutScripts.replace("</body>", `${loader}</body>`);
}

let changed = 0;
for (const file of walk(root)) {
  const before = fs.readFileSync(file, "utf8");
  const after = defer(before);
  if (after !== before) {
    fs.writeFileSync(file, after);
    changed++;
  }
}
console.log(`deferred framework scripts in ${changed} html files`);

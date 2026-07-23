# deviance.dev

The DEViance Intelligence site. Static, single page, no build.

Live at https://maxkle1nz.github.io/deviance.dev/ — and at https://deviance.dev once DNS points here.

## DNS (Porkbun → GitHub Pages)

In Porkbun DNS for `deviance.dev`, add:

| Type  | Host | Answer |
|-------|------|--------|
| A     | (blank) | 185.199.108.153 |
| A     | (blank) | 185.199.109.153 |
| A     | (blank) | 185.199.110.153 |
| A     | (blank) | 185.199.111.153 |
| CNAME | www  | maxkle1nz.github.io |

Delete the parking ALIAS/CNAME records Porkbun ships by default. Then enable the
custom domain on this repo (Settings → Pages → Custom domain → `deviance.dev`,
enforce HTTPS) or run:

```bash
gh api -X PUT repos/maxkle1nz/deviance.dev/pages --input - <<< '{"cname":"deviance.dev","https_enforced":true}'
```

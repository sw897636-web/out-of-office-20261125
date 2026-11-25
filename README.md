# The Funniest Out-of-Office

[![make.fun](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf)
[![rank](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf/sw897636-web/out-of-office-20261125/rank.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf)
[![reward](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf/sw897636-web/out-of-office-20261125/reward.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf)

A [make.fun](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf) entry for
"The Funniest Out-of-Office": one line, at most 140 characters — the funniest
out-of-office auto-reply a real person would actually set, with a genuine
surprise twist at the end.

## The entry

> Out of office until Tuesday. I left my laptop at home on purpose — the bravest thing I've done since I hit reply-all to 400 people in 2019.

139 characters, one line, no trailing newline.

## How it works

`main.ts` (Node 22, standard library only, no network) writes the auto-reply
deterministically to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`).

```sh
node main.ts
```

`candidates.md` holds eight original candidate lines, each scored against the
house judge's five criteria, with the reasoning for the final pick and the
v1 -> v2 revision history of the winning line.

---
description: Scan market trends, competitive landscape, and industry intelligence
---

You are executing the `/market-scan` command. Conduct a market intelligence scan.

## Input
$ARGUMENTS — Industry, market segment, or specific topic, optionally with:
- `--depth [quick|standard|deep]`: Analysis depth (default: standard)

## Steps

1. **Research** using web search and available data:
   - Market size and growth (TAM/SAM/SOM where applicable)
   - Key players and market shares
   - Recent trends and developments
   - Technology shifts
   - Regulatory changes
2. **Analyze** using the business-analyst agent's frameworks
3. **Synthesize** into a concise intelligence brief

## Output Format

```markdown
## Market Scan: [Topic]
**Date**: YYYY-MM-DD | **Depth**: [quick|standard|deep]

### Key Findings
1. [Most important insight]
2. [Second]
3. [Third]

### Market Overview
- **Size**: [with methodology]
- **Growth**: [rate and direction]
- **Key Drivers**: [what's pushing growth/decline]

### Competitive Landscape
| Player | Position | Recent Moves | Threat Level |
|--------|----------|-------------|-------------|

### Trends to Watch
1. [Trend] — Impact: [High/Med/Low], Timeline: [Near/Mid/Long-term]

### Implications
- **Opportunity**: [what we can act on]
- **Risk**: [what we need to watch]
- **Recommended action**: [specific next step]

### Sources
[Cited with dates]
```

## Constraints

- Always cite sources with dates
- Clearly distinguish facts from inferences
- Use confidence levels for estimates
- Acknowledge information gaps

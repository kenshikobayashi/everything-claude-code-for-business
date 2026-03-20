---
name: project-planning
description: Project structure — WBS, milestones, dependencies, resource allocation
triggers:
  - project plan
  - WBS
  - milestone
  - プロジェクト計画
---

# Project Planning Skill

## When to Use

When breaking down a project into manageable pieces, defining timelines, or allocating resources.

## Frameworks

### Work Breakdown Structure (WBS)
Decompose deliverables into progressively smaller pieces until each item is:
- Estimable (can assign a duration)
- Assignable (one person or team can own it)
- Measurable (you can tell when it's done)

### Milestone Definition
Good milestones are:
- **Binary**: Done or not done (no "80% complete")
- **Meaningful**: Represent actual value delivered
- **Verifiable**: Someone else can confirm completion

### Dependency Mapping
- **Finish-to-Start** (most common): B can't start until A finishes
- **Start-to-Start**: B can start once A starts
- **Finish-to-Finish**: B can't finish until A finishes
- Identify the **critical path**: the longest chain of dependent tasks

### Resource Allocation
- Map people to tasks with availability %
- Identify overallocation (>100%) early
- Build in buffer (20% for unknowns in new domains)

## Output Template

```markdown
## Project Plan: [Name]

### Milestones
| # | Milestone | Target Date | Dependencies | Confidence |
|---|-----------|------------|-------------|------------|

### WBS
| Phase | Task | Owner | Duration | Dependencies | Status |
|-------|------|-------|----------|-------------|--------|

### Critical Path
[Phase 1, Task A] → [Phase 2, Task C] → [Phase 3, Task E] = X weeks

### Risks
| Risk | Impact | Mitigation |
```

## Anti-Patterns

- **No buffer**: Projects always take longer than estimated. Add 20-30% buffer.
- **One big milestone**: Break it down — "Launch" should be 5-10 sub-milestones
- **Ignoring dependencies**: Parallel work is great — but only if truly independent

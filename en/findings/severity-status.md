# Severity & Status Management

## Severity

A four-level classification indicating the risk level of a finding.

| Severity | Color | CVSS Range | Description |
|--------|------|-----------|------|
| Critical | Red | 9.0-10.0 | Immediate action required. Remote code execution, authentication bypass, etc. |
| High | Orange | 7.0-8.9 | High risk. Potential for information disclosure, privilege escalation |
| Medium | Yellow | 4.0-6.9 | Moderate risk. Limited impact |
| Low | Blue | 0.1-3.9 | Low risk. Informational |

## Status

Tracks the remediation status of a finding.

| Status | Badge Color | Description |
|------|----------|------|
| Open | Red | Newly discovered, not yet addressed |
| In Progress | Yellow | Assignee is actively working on remediation |
| Resolved | Green | Issue has been resolved |
| Ignored | Gray | Intentionally ignored, risk accepted |
| False Positive | Gray | Determined not to be an actual threat |

## Score Calculation

### Security Score

Each domain's security score is calculated on a 0-100 scale:

* **Higher is better**: 100 is the most secure
* **Deduction method**: Points are deducted based on finding severity
* **Temporal decay**: Older findings have reduced deduction impact over time

### Security Grade

| Grade | Score | Color |
|------|------|------|
| A | 75 or above | Green |
| B | 60-74 | Light Green |
| C | 40-59 | Yellow |
| D | 20-39 | Orange |
| F | 19 or below | Red |

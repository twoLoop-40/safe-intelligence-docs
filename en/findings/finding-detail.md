# Finding Detail

## Summary

A page for viewing detailed information about an individual security finding and managing its remediation status.

## Screen Layout

### Top: Breadcrumb

A path is displayed in the format: `Back > Domain > Finding Title`. Click the domain to navigate to the domain detail page.

### Header Card

* **Title**: Finding name
* **Severity Badge**: Critical (red), High (orange), Medium (yellow), Low (blue)
* **Status Badge**: Open, In Progress, Resolved, etc.
* **Type Badge**: CVE, Credential Leak, Port Scan, etc.
* **CVE ID**: NVD link (if applicable)
* **Discovered**: Date and time first detected

### Main Content (Left)

| Section | Content |
|------|------|
| Description | Detailed description of the finding |
| Remediation | Recommended remediation steps |
| Evidence | Technical evidence (source, date, etc.) |
| CPE Identifier | Applicable software identifier (CPE) |
| References | External reference links (NVD, CVE.org, etc.) |

### Sidebar (Right)

| Section | Content |
|------|------|
| CVSS Score | CVSS score bar + severity label |
| CVSS Vector | 8 items: attack vector, complexity, etc. |
| CWE Classification | CWE ID + name + Top 25 indicator |
| Exploit Probability | EPSS estimated probability (CVE only) |
| Affected Components | Affected system components |
| Metadata | ID, type, asset information |
| Status Change | Status update buttons |
| AI Analysis | AI-based analysis results (when available) |

## Status Change

Change the finding's remediation status in the **Status Change** section of the right sidebar:

| Status | Description |
|------|------|
| Open | Not yet addressed |
| In Progress | Remediation currently underway |
| Resolved | Issue has been resolved |
| Ignored | Intentionally ignored (risk accepted) |
| False Positive | Determined not to be an actual threat |

{% hint style="warning" %}
When changing status to Resolved, Ignored, or False Positive, you can enter a reason. It is recommended to record a reason for audit trail purposes.
{% endhint %}

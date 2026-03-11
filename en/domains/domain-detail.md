# Domain Detail

## Summary

A page for reviewing the security posture of a specific domain in detail. Navigate here by clicking a domain from the Domain List or Overview.

![Domain Detail](../assets/domain-detail.png)

## Screen Layout

### Top: Domain Information

* **Domain Name**: The domain currently being viewed
* **Security Score**: Numeric score from 0 to 100 with grade (A-F)
* **Statistics Cards**: Subdomain count, finding count, last scan time

### Tab Layout

| Tab | Content |
|----|------|
| Overview | Domain security summary, severity distribution, recent activity |
| Findings | All findings for this domain |
| Dark Web | Dark web exposure status related to this domain |
| Subdomains | List and status of child subdomains |

### Attack Surface Section

Provides a visual representation of the domain's attack surface:

* **Open Ports**: List of detected network services
* **SSL Certificate**: Certificate status and expiration date
* **Web Technologies**: Detected web servers, frameworks, etc.

## Exploring Subdomains

In the Subdomains tab, click an individual subdomain to navigate to the subdomain detail page. For each subdomain, you can review:

* IP address
* Service status
* Security findings
* Port information

## Running a Scan

From the Domain Detail page, click the **Start Scan** button to immediately execute a security scan for the domain.

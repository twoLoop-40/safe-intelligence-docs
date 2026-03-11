# FAQ

## General

### Q: What is SafeIntelligence?

SafeIntelligence is an OSINT-based security intelligence platform that monitors your enterprise's external attack surface and manages security risks.

### Q: What types of organizations is it suitable for?

It is suitable for any enterprise that needs supply chain security, vendor security assessment, or internal security monitoring. It is particularly effective for organizations with multiple domains and digital assets.

## Domain Management

### Q: How many domains can I register?

This depends on your plan. Please contact your administrator for details.

### Q: How are subdomains discovered?

Subdomains are automatically discovered through a combination of techniques including DNS enumeration, certificate transparency logs, and web crawling.

### Q: Can I manually add subdomains?

Yes, you can manually add subdomains from the Domain Detail page.

## Scanning

### Q: How often are scans run?

Automatic scans are run periodically. Manual scans can be started at any time.

### Q: Do scans affect the target server?

SafeIntelligence scans are performed using non-destructive methods. Only low-impact requests are made that do not put load on the target server.

## Dark Web

### Q: How often is dark web data updated?

Dark web monitoring data is automatically refreshed **every 6 hours**.

### Q: What should I do if leaked credentials are found?

1. Immediately change the password for the affected account
2. Enable multi-factor authentication (MFA)
3. Also change passwords for other services that use the same password

## Security Grade

### Q: How is the security grade calculated?

Each domain's security grade is calculated on a 100-point scale based on a comprehensive evaluation of discovered vulnerability severity, dark web exposure, certificate status, and open port status.

### Q: How can I improve my grade?

Address findings in order of severity, starting with the most severe. Prioritize **Critical** and **High** severity items in particular.

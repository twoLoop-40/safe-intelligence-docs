# Subdomain Management

## Summary

Manage and monitor subdomains under each domain. View them in the **Subdomains** tab on the Domain Detail page.

## Subdomain List

The following information is displayed for each subdomain:

| Column | Description |
|----|------|
| Name | Subdomain address (e.g., api.example.com) |
| IP | Resolved IP address |
| Status | Active / Inactive |
| Critical | Number of Critical findings |
| High | Number of High findings |
| Ports | Number of open ports |
| SSL | SSL certificate status |
| Last Scan | Last scan time |

## Subdomain Detail

Click a subdomain to navigate to its detail page:

* **Basic Information**: IP, location (GeoIP), hosting information
* **Port Information**: Open ports and running services
* **Findings**: Security issues for the subdomain
* **SSL Certificate**: Certificate details and expiration date

## Adding Subdomains

You can manually add subdomains from the Domain Detail page:

1. Navigate to the Subdomains tab
2. Enter the subdomain name in the **+ Add Subdomain** input field
3. Click the Add button

{% hint style="info" %}
Running a security scan will automatically discover and add subdomains.
{% endhint %}

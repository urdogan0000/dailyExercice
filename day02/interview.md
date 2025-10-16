Mid-level technical non-coding question

Describe your strategy for designing API versioning for a public REST API. What are common pitfalls and how do you roll out breaking changes safely?

If many clients are already using endpoints like /v1/user, I would keep that version stable to avoid breaking changes. For new releases, I’d introduce /v2 or allow clients to specify a version dynamically through a header such as X-API-Version.

In Kubernetes, if version-specific routing isn’t configured, I’d use an API gateway or ingress controller to direct traffic based on path or header — this also allows fallback to the previous version if issues arise.

I’d roll out breaking changes gradually using canary or blue-green deployments, monitor client behavior, and only deprecate /v1 once clients have migrated. Clear documentation and communication are key.

To minimize the need for versioning, I try to make backward-compatible changes whenever possible — such as adding optional fields or default values instead of changing existing behavior.

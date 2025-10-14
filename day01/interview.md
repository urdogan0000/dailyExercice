technical non-coding question

How do you approach debugging a production issue that only occurs intermittently and you cannot reproduce locally? Outline the steps, tools, and the kind of telemetry/logs you'd rely on.

//ANSWER

When a production issue occurs intermittently and cannot be reproduced locally, my first step is to scope and understand the problem. I start by gathering as much context as possible — when and how often it happens, what endpoints or components are involved, and whether it correlates with any recent code deployments, configuration changes, or load increases. Clearly defining the failure pattern helps narrow down the potential root causes.

Next, I leverage the system’s observability stack, focusing first on OpenTelemetry traces, logs, and metrics. Using OpenTelemetry, I examine failed requests and compare their traces with normal ones to identify where the behavior diverges — for example, a slow database span, missing event, or delayed downstream call. Logs filtered by trace ID or request ID provide additional insight into errors or exceptions. I also review metrics like latency, CPU, memory, and error rate to see if there are correlated spikes or anomalies around the time of failure.

If the root cause isn’t immediately clear, I attempt to reproduce or simulate the conditions that trigger the issue. This may involve mirroring production traffic in a staging environment, stress testing under similar concurrency or data patterns, or injecting latency and failures using chaos testing tools. If necessary, I introduce temporary instrumentation — additional logs or OpenTelemetry spans — to capture more detailed runtime information without impacting normal behavior.

Finally, once a hypothesis is confirmed and the fix is applied, I validate it by monitoring the same telemetry sources to ensure the issue no longer appears. I also document the root cause, resolution, and preventive measures, and update alerting rules or dashboards so similar problems can be detected earlier in the future.

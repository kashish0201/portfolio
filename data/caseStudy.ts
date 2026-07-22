// Case study content. Every bracketed value is a placeholder — replace with real
// data from your own runs before publishing. Empty metrics read worse than none.

export const caseStudy = {
  kicker: "CASE STUDY · INFRASTRUCTURE",
  title:
    "A deployment pipeline that ships with zero downtime — and proves it recovers.",
  standfirst:
    "A small service deployed the right way: Terraform-provisioned, containerized, blue-green released through CI, watched by real dashboards, and deliberately broken to confirm it heals. The app is simple on purpose. The infrastructure around it is the point.",
  meta: [
    { label: "ROLE", value: "Solo — design, build, deploy" },
    { label: "STACK", value: "Terraform · Docker · GitHub Actions · AWS · Grafana" },
    { label: "TIMELINE", value: "[ e.g. 3 weeks, 2026 ]" },
    { label: "CODE", value: "GitHub ↗", href: "#" },
  ],

  why: [
    "At JPMorgan I owned the release path for six production services — blue-green deploys, Terraform-provisioned infrastructure, Grafana and Datadog monitoring, and an early chaos-engineering practice. That work lives behind a corporate firewall, so I can describe it but never show it.",
    "This project is that same discipline, rebuilt in the open where the code is public and the dashboards are live. The goal wasn't to build a clever app — it was to build a boring app and deploy it like it actually matters. Anyone can push code to a server. The interesting question is what happens when something breaks at 3am and nobody's watching.",
  ],

  decisions: [
    {
      h: "Blue-green over rolling deploys",
      p: "[ Why you chose it: instant rollback by flipping traffic back to blue, no half-updated fleet, the tradeoff being double the running infrastructure during a deploy. Write the reasoning as you actually weighed it. ]",
    },
    {
      h: "Terraform modules structured by [ lifecycle / environment ]",
      p: "[ How you organized the modules and why — what you'd reuse, what you'd split differently at 10x scale. This is where you show you think past the happy path. ]",
    },
    {
      h: "What I monitored, and why those signals",
      p: "[ Which metrics you put on the dashboard — latency percentiles, error rate, throughput — and why those actually tell you the service is healthy vs. the ones that just look busy. ]",
    },
    {
      h: "[ One thing that went wrong ]",
      p: "[ A real bug or dead-end you hit and how you debugged it. A single honest failure story does more for credibility than a flawless walkthrough. ]",
    },
  ],

  experiment: [
    { t: "HYPOTHESIS", tone: "", d: "If I kill [the live container / an AZ], traffic should shift to the healthy environment within [N] seconds with no failed requests." },
    { t: "T+0s", tone: "warn", d: "Failure injected — [ what you killed ]" },
    { t: "T+[N]s", tone: "", d: "Monitoring detects the spike; [health check / alert] fires." },
    { t: "T+[N]s", tone: "", d: "[Load balancer reroutes / new instance comes up]." },
    { t: "T+[N]s", tone: "ok", d: "Recovered — [ requests lost: ideally 0 ]" },
    { t: "RESULT", tone: "", d: "[ Did it match the hypothesis? What surprised you? What did you change afterward? ]" },
  ],

  metrics: [
    { v: "[ <Ns ]", l: "DEPLOY TIME" },
    { v: "[ <Ns ]", l: "RECOVERY TIME" },
    { v: "[ 0 ]", l: "REQUESTS LOST" },
    { v: "[ 99.x% ]", l: "UPTIME IN TEST" },
  ],

  limits: [
    "[ e.g. single region — production would run multi-region with cross-region failover. ]",
    "[ e.g. secrets handled with [X]; at scale I'd reach for a proper secrets manager. ]",
    "[ e.g. no autoscaling policy tuned under real load — the traffic here is synthetic. ]",
    "Naming these tradeoffs is deliberate — knowing where the edges are reads as more senior than pretending there aren't any.",
  ],
};

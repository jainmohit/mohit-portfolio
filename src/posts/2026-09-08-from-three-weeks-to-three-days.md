---
title: "From three weeks to three days: what actually speeds up a cloud migration"
tags: [cloud-migration, aws, terraform, devops]
description: "Lessons from migrating a bank's treasury platform to AWS — the wins came from automation discipline, not from the cloud itself."
---

When I migrated a treasury platform from on-premises to AWS, deployment time dropped
from three weeks to two–three days. People assume the speedup came from "the cloud."
It didn't. It came from three unglamorous decisions made before the first resource
was provisioned.

## 1. Everything through Terraform, no exceptions

The moment one firewall rule or one FSx share is click-created in the console, your
environment stops being reproducible and your DR plan becomes fiction. We held the
line: if it wasn't in code, it didn't exist.

```hcl
module "treasury_fsx" {
  source              = "./modules/fsx-windows"
  deployment_type     = "MULTI_AZ_1"
  throughput_capacity = 32
  backup_retention    = 30
}
```

## 2. Automate the boring middle, not just the ends

Most teams automate provisioning and forget the software installation layer in
between. PowerShell scripts for multi-instance installs and load balancer wiring were
the difference between a checklist and a pipeline.

## 3. Treat DR as a deployment, not a document

Our disaster recovery plan was the same Terraform and scripts pointed at a different
region. If your DR plan can't be executed by CI, it's a hope, not a plan.

More on the observability side of this migration — Splunk OTel collectors and
CloudWatch dashboards — in a future post.

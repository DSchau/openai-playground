import { summary } from './playground/summary.mjs'

const SAMPLE_METRICS = `
## Must Read

- **DevCycle Migration**
    - The Frontend and Backend migrations are progressing well. The groundwork has been laid and the Frontend flag evaluations will soon start defaulting to DevCycle and the BitBalloon evals are ready for teams to take on, convert, and test. The ADN pod is holding off on their migration until DevCycle delivers a more performant Go SDK. Please read about the [State of the World](https://www.notion.so/DevCycle-Migration-b64ee23fc40b449c97f661520f6f06b6) in Notion.

## What went well

- Thanks to a collaborative effort between the **Workflow pillar** and **Expansion pillar**, we have officially moved off of AWS Redshift in favor of ClickHouse for all self-serve functions usage. Our usage billing performance has slowly been getting worse due to Redshift bottlenecks and this is the first step to fix that
- ********************************Expansion pillar******************************** rolled out the new Redesigned 1st Deploy UX to 100% of sign-ups, giving all new users the improved sign-up and onboarding flow. This experience positively lifted the sign-up rate, got more users to connect to Git, and decreased the time-to-1st-deploy by 25%.
- Every incident channel was closed by Friday this week, this is the first time this has happened!  Improved reliability and incident follow-up processes have resulted in faster completion rates.

## What could have gone better

- [500 errors on site creation (s2)](https://app.incident.io/incidents/24)

## Kudos

- ++ to the **Build Services pod** for being curious about Honeycomb and ++ to **Julien** for working with them to get their dev environment builds sending traces to Honeycomb! This unlocks a whole new way of debugging production issues for customers (when/if it is put into prod builds)
- Kudos to ********************************************************************************Jordan Whistler, Ryan Neal, Cole Bosmann, and Paulo Araujo******************************************************************************** for their work with DevCycle on ensuring good feature flag performance on our edge network. We make extensive use of feature flags for many reasons, including DDoS protection, so they’re both critical and performance-sensitive capabilities.
- Kudos to **Kelsey Schlarman, Bryan Mikaelian** and **Alex Kahn** for their dedicated and persistent effort to improve the performance of our batched billing jobs

## **Upcoming and Recent customer-facing updates and changes**

- Big Customer X is not ready to work with This Company to prove out the HUMAN bot protection capability. There are no other apparent customer opportunities at this point.
- ODB Refresh Hook beta underway with customer Customer Z.

## **Next week's highlights**

- More details are always available to read [here](https://www.notion.so/Pillar-Roadmap-Active-Projects-something)
`

async function run() {
  const response = await summary(SAMPLE_METRICS)

  console.log(response)
}

run()
  
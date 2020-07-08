import { expect } from "https://deno.land/x/expect/expect.ts";
import { getIssuesListFromJira } from "../../../src/services/Jira/issuesSearchService.ts";

const validIssueIds = [
    'RDI-1'
]

const invalidIssueIds = [
    'SOC-1'
]

Deno.test('service/Jira/issuesSearchService', async () => {
    const result = await getIssuesListFromJira()
    await result.body?.cancel()
    expect(result.status).toEqual(200)
})
import { expect } from "https://deno.land/x/expect/expect.ts";
import { getIssuesListFromJira } from "../../../src/services/Jira/issuesSearchService.ts";

const validJql: string = "issuetype = Epic and status not in (10000) and project in (RDI)"

const invalidIssueIds = [
    'SOC-1'
]

Deno.test('service/Jira/issuesSearchService', async () => {
    const result = await getIssuesListFromJira(validJql)
    await result.body?.cancel()
    expect(result.status).toEqual(200)
})
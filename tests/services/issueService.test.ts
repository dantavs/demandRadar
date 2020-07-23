import { expect } from "https://deno.land/x/expect/expect.ts";
import { getIssueFromJira, getIssuesListFromJira } from '../../src/services/issueService.ts'

const validIssueIds = [
    'RDI-1'
]

const invalidIssueIds = [
    'SOC-1'
]

Deno.test('service/Jira/issueService', async () => {
    for (let issue of validIssueIds) {
        const result = await getIssueFromJira(issue)
        await result.body?.cancel()
        expect(result.status).toEqual(200)
    }
})

const validJql: string = "issuetype = Epic and status not in (10000) and project in (RDI)"

Deno.test('service/Jira/issuesSearchService', async () => {
    const result = await getIssuesListFromJira(validJql)
    await result.body?.cancel()
    expect(result.status).toEqual(200)
})
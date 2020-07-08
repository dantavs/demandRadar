import { expect } from "https://deno.land/x/expect/expect.ts";
import { getJQLFromJira } from "../../../src/services/Jira/JQLService.ts";

const validIssueIds = [
    'RDI-1'
]

const invalidIssueIds = [
    'SOC-1'
]

Deno.test('service/Jira/issuesSearchService', async () => {
    for (let issue of validIssueIds) {
        const result = await getJQLFromJira(issue)
        await result.body?.cancel()
        expect(result.status).toEqual(200)
    }
})
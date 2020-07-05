import { expect } from "https://deno.land/x/expect/expect.ts";
import { getIssueFromJira } from '../../../src/services/Jira/issueService.ts'

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
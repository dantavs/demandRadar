import { expect } from "https://deno.land/x/expect/expect.ts";
import { getIssueData } from '../../src/models/issueModel.ts'

const validIssueIds = [
    'RDI-1'
]

const invalidIssueIds = [
    'SOC-1'
]

Deno.test("models/issueModel", async () => {
    for (let issue of validIssueIds) {
        const result = await getIssueData(issue)
        expect(result.status).toEqual(0)
    }

    for (let issue of invalidIssueIds) {
        const result = await getIssueData(issue)
        expect(result.status).toEqual(9)
    }
})

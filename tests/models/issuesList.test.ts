import { expect } from "https://deno.land/x/expect/expect.ts";
import { getIssuesListData } from '../../src/models/issuesListModel.ts'

const validSearchContext: string = "radarSOC"
const invalidSearchContext: string = "radar"

Deno.test("models/validIssuesListModel", async () => {
    const result = await getIssuesListData(validSearchContext)
    expect(result.status).toEqual(0)
})

Deno.test("models/invalidIssuesListModel", async () => {
    const result = await getIssuesListData(invalidSearchContext)
    expect(result.status).toEqual(9)
})
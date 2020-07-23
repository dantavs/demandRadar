import { expect } from "https://deno.land/x/expect/expect.ts";
import { getIssuesListData, getIssuesListDataByContext } from '../../src/models/issuesListModel.ts'

const validSearchContext: string = "radarSOC"
const invalidSearchContext: string = "radar"

Deno.test("models/validIssuesListModel", async () => {
    const result = await getIssuesListData(validSearchContext)
    expect(result.status).toEqual(0)
})


const project: string = 'RDI'
const id:string = 'RDI-1'
Deno.test("models/validIssuesListModel-ByContext", async () => {
    const result = await getIssuesListDataByContext(project, id)
    expect(result.status).toEqual(0)
})
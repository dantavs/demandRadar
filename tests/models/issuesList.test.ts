import { expect } from "https://deno.land/x/expect/expect.ts";
import { getIssuesListData } from '../../src/models/issuesListModel.ts'


Deno.test("models/issuesListModel", async () => {
    const result = await getIssuesListData()
    expect(result.status).toEqual(0)
})
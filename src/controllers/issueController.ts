import { config } from 'https://deno.land/x/dotenv/mod.ts'
import { getIssueData } from '../../models/issueModel.ts'

const getIssue = async ({params, response } : {params: {id: string}; response: any}) => {

    let issue = await getIssueData(params.id)

    response.status = 200
    response.body = issue
}

export { getIssue }
// simples comentario para teste de pull request
import { getIssueData } from '../models/issueModel.ts'
import { getIssuesListData } from '../models/issuesListModel.ts'


const getIssue = async ({params, response } : {params: {id: string}; response: any}) => {

    let issue = await getIssueData(params.id)

    response.status = 200
    response.body = issue
}

const getIssuesList = async ({params, response } : {params: {}; response: any}) => {

    let issue = await getIssuesListData()

    response.status = 200
    response.body = issue
}

export { getIssue, getIssuesList }
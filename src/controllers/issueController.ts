// simples comentario para teste de pull request
import { getIssueData } from '../models/issueModel.ts'
import { getIssuesListData } from '../models/issuesListModel.ts'


const getIssue = async ({params, response } : {params: {id: string}; response: any}) => {

    let issue = await getIssueData(params.id)

    response.status = 200
    response.body = issue
}

const getIssuesList = async ({params, response } : {params: {searchContext: string}; response: any}) => {

    let issue = await getIssuesListData(params.searchContext)

    if (issue.status === 0){
        response.status = 200
        response.body = issue    
    } else {
        response.status = 500
        response.body = 'Internal Error'    
    }
}

export { getIssue, getIssuesList }